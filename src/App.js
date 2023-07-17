import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';






function App() {
  return (
    <>
      <Navbar title="Fucking Hello" aboutText="About Us" contactText="Contact Us" serviceText="Services" />
      <div className="container"  >
        <TextForm heading="Text to analyze" />
      </div>

    </>
  );
}

export default App;
