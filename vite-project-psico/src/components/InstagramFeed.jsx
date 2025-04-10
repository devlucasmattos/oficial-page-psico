import { useEffect } from 'react';
import './InstagramFeed.css';
import { FaInstagram } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const InstagramFeed = () => {
  useScrollAnimation('.animated');

  useEffect(() => {
    // Carrega os scripts do Instagram de forma dinâmica
    const loadInstagramWidget = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }

      const instagramScript = document.createElement('script');
      instagramScript.src = 'https://www.instagram.com/embed.js';
      instagramScript.async = true;
      instagramScript.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(instagramScript);
    };

    loadInstagramWidget();

    return () => {
      // Limpeza opcional se necessário
    };
  }, []);

  return (
    <section id="instagram" className="instagram-feed-section">
      <div className="instagram-content-wrapper">
        <div className="instagram-header">
          <h2 className="section-title animated">
            <span>Acompanhe meu dia a dia profissional !</span>
          </h2>
          <br></br>
          <p className="section-subtitle animated">
            Dicas de saúde mental, reflexões e momentos do consultório
          </p>
          <a 
            href="https://www.instagram.com/psi.gabriellechemieski" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link animated"
          >
            @psi.gabriellechemieski
          </a>
        </div>
        
        <div className="instagram-embed-container animated">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/psi.gabriellechemieski"
            data-instgrm-version="12"
          >
            <div className="instagram-placeholder">
              <div className="placeholder-content">
                <FaInstagram className="placeholder-icon" />
                <p>Carregando meus últimos posts...</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;