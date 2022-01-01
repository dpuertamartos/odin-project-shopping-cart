import { BrowserRouter, Routes, Route } from "react-router-dom";

const Shop = () => {
  return(
    <div>
      This is the shop
    </div>
  )
}

const HomePage = () => {
  return(
    <div>
      This is the landing page
    </div>
  )
}

const Header = () => {
  return(
    <div>
      This is the header
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      This is the footer
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
