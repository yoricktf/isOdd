import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Clients from './Components/Clients/Clients';
import Features from './Components/Features/Features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Clients />
      <Features />
    </div>
  );
}

export default App;
