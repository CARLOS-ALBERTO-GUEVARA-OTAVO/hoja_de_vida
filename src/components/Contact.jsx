const Contact = () => {
  return (
    <section id="contacto" className="section">
      <h2 className="section-title">Contacto</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
};