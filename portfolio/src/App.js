import Sidebar from "./Components/Layout/Sidebar";
import About from "./Pages/About/About";
import TechStack from "./Pages/TechStack/TechStack";
import Projects from "./Pages/Projects/Projects";
import Educations from './Pages/Educations/Education';

function App() {
  return(
    <div className="App">
      <Sidebar/>
      <div className="container">
      <About/> 
      </div>
      <TechStack/>
      <div className="container1">
        <Projects/>
        <Educations/>
      </div>
    </div>
    

  );
  
}

export default App;
