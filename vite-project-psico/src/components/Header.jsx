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
        <a href="https://api.whatsapp.com/message/3YQT5VMFXFKHI1?autoload=1&app_absent=0" className="whatsapp-button animated">
          <span>Agende sua consulta pelo WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
