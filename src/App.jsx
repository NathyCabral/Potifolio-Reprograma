import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Cards from "./Components/Projects/Cards"
import Repos from "./Components/Others/Repos"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <hr></hr>
      <Cards />
      <Repos />
      <Footer />
    </div>
  );
}

export default App;
