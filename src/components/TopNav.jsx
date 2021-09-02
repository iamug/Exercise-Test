import React from "react";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const history = useHistory();
  return (
    <div className="bg-light ">
      <header className="navbar navbar-primary  bg-light sticky-top py-3 px-1 shadow">
        <div className="col-lg-4 col-0"></div>
        <button
          className="navbar-toggler shadow-none text-primary position-relative  d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-left" />
        </button>
        <div className="input-group flex-nowrap col-6 col-md-4">
          <div class="input-group-text bg-white  border-end-0">
            <i className="fas fa-search link-lightgray"></i>
          </div>

          <input
            className="form-control form-control-dark shadow-none  w-100 border-start-0"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <div className="navbar-nav col-lg-4 col-4 text-right">
          <div className="nav-item text-nowrap">
            <a href="#!" className=" px-3">
              <i class="bi bi-bell"></i>
            </a>
            <i class="bi bi-grip-vertical"></i>
            <span
              className=" text-primary fw-bold d-none d-md-inline-block px-3"
              href="#"
            >
              Silver Hill Hospital
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopNav;

