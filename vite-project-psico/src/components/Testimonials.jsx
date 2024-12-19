import './Testimonials.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Importando o hook

function Testimonials() {
  useScrollAnimation('.animated'); // Aplica a animação aos elementos com a classe "animated"

  return (
    <section className="testimonials" id="depoimentos">
      <h2 className="animated">Depoimentos</h2>
      <p className="animated">Veja o que os pacientes estão dizendo sobre os atendimentos.</p>
      <div className="testimonial-list">
        <div className="testimonial animated">
          <p>"Gabi é otima! Tem me ajudado muito com meus pensamentos e autoconhecimento! Me sinto muito melhor desde que começamos as sessões! Estou muito satisfeita com a evolução! "</p>
          <span>- L.D.S.R</span>
        </div>
        <div className="testimonial animated">
          <p>"Ela é incrível com as palavras e as pontuações sobre cada situação"</p>
          <span>- S.D.C.I</span>
        </div>
      
        <div className="testimonial animated">
          <p>"Gabrielle é maravilhosa. Tem me colocado para pensar e sem julgamentos. Me sinto muito a vontade.</p>
          <span>- A.M.O.S.D.A</span>
        </div>
        <div className="testimonial animated">
          <p>"Já estive com outros psicólogos e nunca me senti tão acolhida como Gabi me acolheu, ela é uma pessoa que me traz para o lugar de reflexão, e não de palpites, como já estive em outros profissionais que eram apenas palpiteiros, só tenho a agradecer a Gabi por tudo e quanto me fez evoluir nesse tempo juntas. Deus te abençoe, Gabi! Que você possa mudar muitas vidas com o seu trabalho."</p>
          <span>- P.P.R.S</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
