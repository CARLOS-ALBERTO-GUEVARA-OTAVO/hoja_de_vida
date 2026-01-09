/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer, Html } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// --- IMPORTANTE ---
// Asegúrate de tener los archivos 'card.glb' y 'lanyard.png' en la carpeta 'src/assets/'.
import cardGLB from '../assets/card.glb';
import lanyardTextureFile from '../assets/lanyard.png';
import cardImage from '../assets/desarrollador.png';

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 15, transparent = true }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
        eventSource={document.body}
        eventPrefix="client"
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  
  // --- Búsqueda de Nodos ---
  // Intentamos encontrar el nodo por nombre. Si no existe, usamos el PRIMER nodo que tenga geometría (fallback).
  // Esto asegura que se vea algo aunque el nombre sea diferente (ej. "Mesh_0").
  const cardNode = nodes.card || nodes.Card || nodes.Cube || nodes.Plane || Object.values(nodes).find((n) => n.geometry);
  
  const clipNode = nodes.clip || nodes.Clip;
  const clampNode = nodes.clamp || nodes.Clamp;

  useEffect(() => {
    if (!cardNode) {
      console.warn("⚠️ ERROR CRÍTICO: No se encontró NINGUNA geometría en el archivo .glb. Nodos disponibles:", Object.keys(nodes));
    } else {
      console.log("✅ Carnet cargado correctamente usando el nodo:", cardNode.name);
    }
  }, [nodes, cardNode]);

  const lanyardTexture = useTexture(lanyardTextureFile);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.5]); // Joint 1 (Más corto)
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.5]); // Joint 2 (Más corto)
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.5]); // Joint 3 (Más corto)
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0] // Ajustado al nuevo tamaño del carnet
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  lanyardTexture.wrapS = lanyardTexture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[isMobile ? 0 : 3, 0, 0]}>
        {/* Bajamos el punto fijo a y=3 para que salga de la parte de abajo del head */}
        <RigidBody ref={fixed} {...segmentProps} type="fixed" position={[0, 3, 0]} />
        <RigidBody position={[0.2, 2.5, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.05]} />
        </RigidBody>
        <RigidBody position={[0.4, 2.0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.05]} />
        </RigidBody>
        <RigidBody position={[0.6, 1.5, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.05]} />
        </RigidBody>
        <RigidBody position={[0.8, 0.8, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={1.5}
            position={[0, 0, -0.05]}
            rotation={[0, 0, 0]} // Rotación en 0 para que mire al frente
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={cardNode?.geometry}>
              <meshPhysicalMaterial color="#f0f0f0" side={THREE.DoubleSide} roughness={0.5} metalness={0.5} transparent opacity={0} />
            </mesh>
            
            {/* Capa HTML con tu foto y nombre pegada al carnet */}
            <Html
              transform
              position={[0, 0.25, 0.05]} // Subimos la foto en Y (0 -> 0.25) para centrarla mejor
              rotation={[0, 0, 0]}
              scale={0.005} // Escala corregida: 0.02 era gigante, 0.005 se ajusta al carnet
              style={{
                width: '320px', // Ancho ajustado al modelo escalado
                height: '450px', // Alto ajustado al modelo escalado
                backgroundColor: 'transparent',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                pointerEvents: 'none', // Importante: permite arrastrar el carnet haciendo clic sobre la foto
                userSelect: 'none'
              }}
            >
              <img src={cardImage} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} alt="Carnet" />
            </Html>
            
            <mesh geometry={clipNode?.geometry} material={materials?.metal} material-roughness={0.3} />
            <mesh geometry={clampNode?.geometry} material={materials?.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={lanyardTexture}
          repeat={[-4, 1]}
          lineWidth={0.5}
        />
      </mesh>
    </>
  );
}