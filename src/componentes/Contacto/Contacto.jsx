import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contacto.css';

const Contacto = () => {

    const [enviado, setEnviado] = useState(false);

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uto2em1', 'template_s46cv0r', e.target, '3hbL4EECd7mK79bUU')
            .then((result) => {
                console.log(result.text);
                setEnviado(true);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

  return (
    <section className="contacto">
      <h2>Contacto<ion-icon name="mail-open-outline"></ion-icon></h2>
      <form className="formulario-contacto" onSubmit={enviarEmail}>
          <input type="text" name="user_name" placeholder="Tu Nombre" required />
          <input type="email" name="user_email" placeholder="Tu Email" required />
          <textarea name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit">Enviar Mensaje</button>
      </form>
      {enviado && <p>Tu mensaje ha sido enviado. ¡Gracias!</p>}
  </section>
  )
}
export default Contacto