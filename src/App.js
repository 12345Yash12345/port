// import './App.css';
import { Routes, Route , useLocation} from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Content from './components/Content/Content';
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'
import Navbar from './Container/Navbar/Navbar';
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles';
import particles from './utils.js/particles'
// import Ecome from './components/portfolio/ecom.jsx'
import Ecom from './components/portfolio/Ecom';
import Notes from './components/portfolio/Notes';


// import Navbar from './Container/Navbar/Navbar '
// import About from './components/About/About'



function App() {

      let newlocation =  useLocation()
      console.log(newlocation);

      const handleinit = async(main)=>{
        await loadFull(main)
      }

      let checkpath = newlocation.pathname==="/"

  return (
  <>
  <div className="App">
      {checkpath && 
      <Particles id="particles" options={particles} init={handleinit}></Particles> }

      <Navbar></Navbar>
     


    <div  className="app_content">
      <Routes>
      <Route path='/Portfolio/Ecom' element={<Ecom></Ecom>}></Route>
      <Route path=' /Notes' element={<Notes></Notes>}></Route>
      <Route path='/' element={<Home></ Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='/Content' element={<Content></Content>}></Route>
      <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='/Resume' element={<Resume></Resume>}></Route>
      <Route path='/Skills' element={<Skills></Skills>}></Route>




      </Routes>

    
    </div>
    </div>
  </>
  
  );
}

export default App;
