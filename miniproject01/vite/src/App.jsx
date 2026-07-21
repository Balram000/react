import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer" ;
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;