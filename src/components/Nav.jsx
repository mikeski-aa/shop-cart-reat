import { Link } from "react-router-dom";
import "../styles/Nav.css";
// this function will create the navigation bar for the app
// this nav bar will be displayed on main page and shop page

function Nav() {
  return (
    <div className="navBar">
      <button>
        <Link to="/">Homepage</Link>
      </button>
      <button>
        <Link to="/shop">Shop</Link>
      </button>
    </div>
  );
}

export { Nav };
