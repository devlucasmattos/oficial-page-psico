import Header from './components/Header';
import Services from './components/Services';
import './App.css';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <About/>
      <Services />
      <Testimonials/>
      <Contact/>
      <Footer/>
      {/* Adicione as outras seções posteriormente */}
    </>
  );
}

export default App;
