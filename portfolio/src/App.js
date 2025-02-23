import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
