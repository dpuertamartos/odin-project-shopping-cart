import { Outlet, Link } from "react-router-dom";

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

export default Navigation;  