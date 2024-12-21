import { useEffect, useState } from "react";
import './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Importando o hook

function Contact() {
  // Usando o hook para detectar se a seção está visível
  const isVisible = useScrollAnimation();

  return (
    <section 
      className={`contact ${isVisible ? "visible" : ""}`} 
      id="contato"
    >
      <h2>Vamos conversar?</h2>
      <p>Estou aqui para ajudar você!<br /> Entre em contato através das minhas redes sociais<br /> e tire suas dúvidas, agende uma consulta. ⤵️</p>

      <div className="social-icons">
        <a href="https://wa.me/message/3YQT5VMFXFKHI1" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> {/* Ícone do WhatsApp */}
        </a>
        <a href="https://www.facebook.com/profile.php?id=100090650666440&mibextid=ZbWKwL" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> {/* Ícone do Facebook */}
        </a>
        <a href="https://www.instagram.com/psi.gabriellechemieski/" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> {/* Ícone do Instagram */}
        </a>
      </div>
    </section>
  );
}

export default Contact;
