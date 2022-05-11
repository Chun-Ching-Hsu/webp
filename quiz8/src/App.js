import logo from './logo.svg';
import './App.css';
import MultiButton  from './cgu_multiButton';
import HelloCGU from './cgu_hello';
function App() {
  const Button_Click = (event)=>{
    const e = event.target;
      e.textContent  = e.textContent +"被點了";
      console.log(e.textContent );
  }; 
  
  return (
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div className="tmp" onClick={Button_Click}>
        { MultiButton(10)}
      </div>
    </div>
  );
}

export default App;
