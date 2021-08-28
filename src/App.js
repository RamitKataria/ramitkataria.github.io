import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ramit Kataria's portfolio <br /> Under construction
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ramitkataria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
    /*<main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>*/
  );
}

export default App;
