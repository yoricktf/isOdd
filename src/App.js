import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Clients from './Components/Clients/Clients';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Clients />
    </div>
  );
}

export default App;
