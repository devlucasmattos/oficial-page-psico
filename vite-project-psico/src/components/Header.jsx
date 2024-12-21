import './Header.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Importando o hook para animação

function Header() {
  useScrollAnimation('.animated'); // Aplica a animação a todos os elementos com a classe "animated"

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="professional-name animated">Gabrielle Chemieski</h1>
        <p className="professional-crp animated">CRP 07/39189</p>
        <p className="cta-phrase animated">A transformação que você busca começa na sua mente. <br/>Vamos caminhar juntos? 🧠⤵️</p>
        <a href="https://wa.me/message/3YQT5VMFXFKHI1" 
   className="whatsapp-button animated" target="_blank" rel="noopener noreferrer"> <span>Agende sua consulta pelo WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
