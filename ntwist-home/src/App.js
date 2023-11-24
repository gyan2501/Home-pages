
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Services from './components/service/Services';


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <Footer/>
      {/* <CountryButton/>
      <ScrollButton/> */}
    </>
  );
}

export default App;
