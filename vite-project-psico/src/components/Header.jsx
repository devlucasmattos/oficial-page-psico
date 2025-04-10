import './Header.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Header() {
  useScrollAnimation('.animated');

  return (
    <header className="header-section">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title animated">Gabrielle Chemieski</h1>
          <p className="header-subtitle animated">CRP 07/39189</p>
          <p className="header-description animated">
            A transformação que você busca começa na sua mente.<br />
            Vamos caminhar juntos? 🧠⤵️
          </p>
          <a 
            href="https://wa.me/message/3YQT5VMFXFKHI1" 
            className="header-button animated" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Agende sua consulta pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;