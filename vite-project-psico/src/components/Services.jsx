import './Services.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Importando o hook

function Services() {
  useScrollAnimation('.animated'); // Aplica a animação aos elementos com a classe "animated"

  return (
    <section className="services" id="servicos">
      <h2 className="animated">Serviços</h2>
      <p className="animated">Ofereço suporte psicológico online e presencial com foco em seu bem-estar.</p>
      <ul className="service-list">
        <li className="animated">
          <h3>Terapia Individual</h3>
          <p>Explorar pensamentos, emoções e comportamentos, visando autoconhecimento, resolução de conflitos e melhoria do bem-estar emocional.</p>
        </li>
        <li className="animated">
          <h3>Psicoeducação</h3>
          <p>Educação sobre saúde mental e técnicas para lidar com problemas emocionais.</p>
        </li>
        <li className="animated">
          <h3>Aconselhamento Online</h3>
          <p>Atendimentos online para que você receba suporte no conforto da sua casa.</p>
        </li>
      </ul>
    </section>
  );
}

export default Services;
