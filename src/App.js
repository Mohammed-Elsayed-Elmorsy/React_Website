import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Logos from "./components/Logos/Logos";
import Resedancies from './components/Resedancies/Resedancies'
import Value from "./components/Value/Value";
function App() {
  return (
    <>
      <div className="parent" style={{
        backgroundColor: "var(--black)"
      }}>
        <Header />
        <Hero />
      </div>
      {/* <Logos /> */}
      <Resedancies />
      <Value />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
