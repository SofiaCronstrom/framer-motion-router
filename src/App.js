import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./App.css"
import {motion, AnimatePresence} from "framer-motion";

const routeVariants = {
  initial: {
    y: "100vh"
  },
  final: {
    y: "0vh"
  }
}
function Home() {
  return (
  <motion.div
  variants={routeVariants}
  initial="initial"
  animate="final"
  className="home component" 
  > 
  <h1>  Home Component </h1>
  </motion.div>
  )
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
  <motion.div 
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="about component"
  > 
  <h1>  About Component </h1>
  </motion.div>
  )
}

function Contact() {
  return (
  <motion.div
  variants={routeVariants}
  initial="initial"
  animate="final"
  className="contact component"
   > 
   <h1>  Contact Component </h1>
   </motion.div>
  )
}

function LocationProvider({children}){
return <AnimatePresence>{children}</AnimatePresence>
}

function RoutesWithAnimation(){
  const location = useLocation();
  console.log(location);

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
