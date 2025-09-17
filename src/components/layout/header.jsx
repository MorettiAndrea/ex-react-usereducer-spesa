import paths from "../../data/paths";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={paths.homePage}>
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={paths.groceryListPage}>
                grocery list page
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
