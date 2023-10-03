
import './App.css';
import logos from "./assests/images/Frame(1).png"
import reactlogo from "./assests/images/reactlogo.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={reactlogo} className='App-logo' alt="logo"/>
        <img src={logos}  alt="logo" />
       
      </header>
    </div>
  );
}

export default App;
