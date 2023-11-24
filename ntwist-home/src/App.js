// Importing necessary components and styles
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/Banner';
import CountryButton from './components/countrybutton/CountryButton';
import Footer from './components/footer/Footer';
import ScrollButton from './components/scrollbutton/ScrollButton';
import Services from './components/service/Services';

// Main App component
function App() {
  // Rendering components in the desired order
  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Banner component */}
      <Banner />

      {/* Services component */}
      <Services />

      {/* Footer component */}
      <Footer />

      {/* CountryButton component */}
      <CountryButton />

      {/* ScrollButton component */}
      <ScrollButton />
    </>
  );
}

// Exporting the App component as the default export
export default App;
