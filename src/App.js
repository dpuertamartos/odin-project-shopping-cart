import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer.js"
import Navigation from "./components/Header.js"
import HomePage from "./components/Homepage.js"
import Shop from "./components/Shop.js"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<HomePage />} />
            <Route path="shop" element={<Shop />}/>
            <Route path="*" element="404" />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
