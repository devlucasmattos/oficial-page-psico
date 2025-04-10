import './Services.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Services() {
  useScrollAnimation('.animated');

  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        <div className="services-content">
          <h2 className="section-title animated">
            <span>Serviços</span>
          </h2>
          
          <div className="services-description animated">
            <p>
              Ofereço suporte psicológico online e presencial com foco em seu bem-estar.
            </p>
          </div>
          
          <ul className="services-list">
            <li className="service-item animated">
              <div className="service-content">
                <h3>Terapia Individual</h3>
                <p>
                  Explorar pensamentos, emoções e comportamentos, visando autoconhecimento, 
                  resolução de conflitos e melhoria do bem-estar emocional.
                </p>
              </div>
            </li>
            
            <li className="service-item animated">
              <div className="service-content">
                <h3>Psicoeducação</h3>
                <p>
                  Educação sobre saúde mental e técnicas para lidar com problemas emocionais.
                </p>
              </div>
            </li>
            
            <li className="service-item animated">
              <div className="service-content">
                <h3>Aconselhamento Online</h3>
                <p>
                  Atendimentos online para que você receba suporte no conforto da sua casa.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;