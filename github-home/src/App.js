import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Productivity from "./components/productivity/Productivity";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Productivity />
      <Footer />
    </div>
  );
}

export default App;
