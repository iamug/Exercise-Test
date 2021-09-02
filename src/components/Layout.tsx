import React from "react";
import { TopNav, LeftSideNav } from ".";

// const DRAWERWIDTH = "240px";

// const sideNav = {
//   width: DRAWERWIDTH,
// };

const Layout: React.FC = ({ children }) => {
  return (
    <div className="d-flex row g-0">
      <div className="col-md-3 col-lg-2 p-0 ">
        <LeftSideNav />
      </div>

      <main role="main" className="col">
        <TopNav />
        {children}
      </main>
      {/* <RightSideBar /> */}
    </div>
  );
};

export default Layout;