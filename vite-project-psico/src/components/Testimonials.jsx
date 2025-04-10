import './Testimonials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Testimonials() {
  useScrollAnimation('.animated');

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <h2 className="section-title animated">
              <span>Depoimentos de Pacientes</span>
            </h2>
            <br></br>
            <div className="section-subtitle animated">
              <p>A jornada terapêutica através das palavras de quem já vivenciou</p>
            </div>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card animated">
              <span className="quote-icon">"</span>
              <blockquote>
                "Gabi é ótima! Tem me ajudado muito com meus pensamentos e autoconhecimento! Me sinto muito melhor desde que começamos as sessões! Estou muito satisfeita com a evolução!"
              </blockquote>
              <div className="testimonial-author">- L.D.S.R</div>
            </div>
            
            <div className="testimonial-card animated">
              <span className="quote-icon">"</span>
              <blockquote>
                "Ela é incrível com as palavras e as pontuações sobre cada situação."
              </blockquote>
              <div className="testimonial-author">- S.D.C.I</div>
            </div>
            
            <div className="testimonial-card animated">
              <span className="quote-icon">"</span>
              <blockquote>
                "Gabrielle é maravilhosa. Tem me colocado para pensar e sem julgamentos. Me sinto muito à vontade."
              </blockquote>
              <div className="testimonial-author">- A.M.O.S.D.A</div>
            </div>
            
            <div className="testimonial-card animated">
              <span className="quote-icon">"</span>
              <blockquote>
                "Já estive com outros psicólogos e nunca me senti tão acolhida como Gabi me acolheu. Ela me traz para o lugar de reflexão, e não de palpites. Só tenho a agradecer por tudo e quanto me fez evoluir nesse tempo juntas."
              </blockquote>
              <div className="testimonial-author">- P.P.R.S</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;