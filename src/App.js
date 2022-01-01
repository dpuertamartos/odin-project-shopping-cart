import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

const Shop = () => {
  return(
    <div>
      <h2>This is the shop</h2>
    </div>
  )
}

const HomePage = () => {
  return(
    <div>
      <h2>This is the landing page</h2>
    </div>
  )
}

const Navigation = () => {
  return(
    <div>
      <nav>
      <span><Link to="/">Home </Link></span>
      <span><Link to="/shop">Shop</Link></span>
      </nav>
      <Outlet />
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
