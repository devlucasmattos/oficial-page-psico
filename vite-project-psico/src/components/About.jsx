import { useEffect } from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';  // Importando o hook


const About = () => {

    useScrollAnimation('.animated');

    return (
        <section id="sobre" className="sobre">
            <div className="container">
                {/* Imagem acima da seção */}
                <div className="image-container">
                    <img src="/gabrielle-chemieski.jpg" alt="Gabrielle Chemieski" className="profile-image animated" />
                </div>

                <h2 className="animated"><span>Sobre mim</span></h2>
                <p className="animated">
                    Psicóloga formada pela Faculdade Anhanguera de Rio Grande, com especialização em Saúde Mental, 
                    Psicopatologia, Atenção Psicossocial e Terapia Cognitivo-Comportamental.<br /> <br />
                    Atualmente, atua como psicóloga clínica, realizando atendimentos online para jovens adultos, adultos e idosos ao redor do mundo, 
                    além de atendimentos presenciais na cidade de Rio Grande, RS.
                </p>
            </div>
        </section>
    );
};

export default About;
