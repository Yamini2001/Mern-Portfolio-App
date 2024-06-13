import Sidebar from "./Components/Layout/Sidebar";
import About from "./Pages/About/About";
import TechStack from "./Pages/TechStack/TechStack";

function App() {
  return(
    <div className="App">
      <Sidebar/>
      <div className="container">
      <About/> 
      </div>
      <TechStack/>
    </div>

  );
  
}

export default App;
