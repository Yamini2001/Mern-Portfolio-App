import Sidebar from "./Components/Layout/Sidebar";
import About from "./Pages/About/About";
import TechStack from "./Pages/TechStack/TechStack";
import Projects from "./Pages/Projects/Projects";

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
      </div>
    </div>
    

  );
  
}

export default App;
