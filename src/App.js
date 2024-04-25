import "./App.css";
import Footer from "./components/Footer";

import LatestArticle from "./components/LatestArticle";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/Why_choose_us";
import Banner from "./components/banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <LatestArticle />
      <Footer />
    </div>
  );
}

export default App;
