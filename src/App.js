import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className='background-image-color'>
      <div className="background-gradient">
        <div className="home-container-fluid">
          <Header></Header>
          <div className="section-type-whole"></div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
