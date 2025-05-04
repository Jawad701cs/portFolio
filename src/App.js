import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import { useEffect, useState } from "react";
import Logo from "./Components/Logo";
function App() {
  const [page, setPage] = useState(false);
  useEffect(() => {
         setTimeout(() => {
            setPage(true)
         }, 5000);
  }, [])
  return (
    <div className="App">
      <Router>
        {page ? <NavBar/> : ""}
        <Routes>
          <Route path="/" element={page ? <Home/> : <Logo/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
