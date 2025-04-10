import { useEffect } from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation('.animated');

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-container animated">
            <img 
              src="/gabrielle-chemieski.jpg" 
              alt="Gabrielle Chemieski - Psicóloga" 
              className="about-profile-image" 
            />
          </div>
          
          <div className="about-text">
            <h2 className="section-title animated">
              <span>Sobre Mim</span>
            </h2>
            
            <div className="about-description animated">
              <p>
                Psicóloga formada pela Faculdade Anhanguera de Rio Grande, com especialização em Saúde Mental, 
                Psicopatologia, Atenção Psicossocial e Terapia Cognitivo-Comportamental.
              </p>
              
              <p>
                Atualmente, atuo como psicóloga clínica, realizando atendimentos online para jovens adultos, 
                adultos e idosos ao redor do mundo, além de atendimentos presenciais na cidade de Rio Grande, RS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;