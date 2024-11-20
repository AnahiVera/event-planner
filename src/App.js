import logo from './logo.svg';
import './App.css';

function App() {

  const handleNameChange= () => {
    const names = ['Bob', 'Kevin', 'Anahi']
    const int = Math.floor(Math.random() * 3)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!!
        </p>
        
      </header>
    </div>
  );
}

export default App;
