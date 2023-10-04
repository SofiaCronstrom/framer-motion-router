import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css"
import {motion, AnimatePresence} from "framer-motion";


function Home() {
  return (
    <div
      className="home component"
    >
     <h1>  Home Component </h1>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <span>Header Component</span>
      <ul>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div
      className="about component"
    >
      <h1> About Component </h1>
    </div>
  );
}

function Contact() {
  return (
    <div
      className="contact component"
    >
      <h1> Contact Component </h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AnimatePresence>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
     </AnimatePresence>
     </BrowserRouter>
    </div>
  );
}

export default App;
