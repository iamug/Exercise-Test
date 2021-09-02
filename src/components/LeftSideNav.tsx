import React from "react";
import { useHistory } from "react-router-dom";

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
              <a
                className="nav-link text-white active"
                aria-current="page"
                href="#!"
              >
                <i className="far fa-user mr-2"></i>
                Artists
              </a>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-light">
            <span>Saved reports</span>
            <a className="link-light" href="#!" aria-label="Add a new report">
              <i className="fas fa-plus-circle"></i>
            </a>
          </h6>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideNav;