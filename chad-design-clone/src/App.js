import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <div className="header-section">

        <Title />
        <Header />
      </div>
      
      <div className="welcome-section">

        <Welcome />
      </div>
      
    </div>
  );
}

export default App;
