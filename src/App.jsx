import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default App;
