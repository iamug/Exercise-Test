import React from "react";
import { useHistory, Link } from "react-router-dom";

const LeftSideNav = () => {
  const history = useHistory();
  return (
    <div className="bg-primary h-100  ">
      <nav
        id="sidebarMenu"
        className=" d-md-block min-vh-100  sidebar collapse "
      >
        <div className="position-sticky pt-5">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/artists"
              className="nav-link text-white active"
              aria-current="page">
                   <i className="far fa-user mr-2"></i>
                Artists
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default LeftSideNav;