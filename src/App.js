import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Clients from './Components/Clients/Clients';
import Features from './Components/Features/Features';
import Docs from './Components/Docs/Docs';
import Pricing from './Components/Pricing/Pricing';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Clients />
      <Features />
      <Docs />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
