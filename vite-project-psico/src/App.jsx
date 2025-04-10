import Header from './components/Header';
import Services from './components/Services';
import './App.css';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <About />
        <Services />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;