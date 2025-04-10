import { useEffect } from 'react';
import './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

function Contact() {
  useScrollAnimation('.animated');

  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="section-title animated">Vamos conversar?</h2>
          <p className="section-subtitle animated">
            Estou aqui para ajudar você! Entre em contato através das minhas redes sociais
            e tire suas dúvidas ou agende uma consulta.
          </p>

          <div className="social-icons animated">
            <a 
              href="https://wa.me/message/3YQT5VMFXFKHI1" 
              className="social-icon whatsapp" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=100090650666440&mibextid=ZbWKwL" 
              className="social-icon facebook" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            
            <a 
              href="https://www.instagram.com/psi.gabriellechemieski/" 
              className="social-icon instagram" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;