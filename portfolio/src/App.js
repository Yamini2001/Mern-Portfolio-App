import Sidebar from "./Components/Layout/Sidebar";
import About from "./Pages/About/About";

function App() {
  return(
    <div className="App">
      <Sidebar/>
      <div className="container">
      <About/> 
      </div>
    </div>

  );
  
}

export default App;
