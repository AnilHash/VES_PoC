import React from "react";

import Button from "../utilities/Button/Button";
import {
  headerStyle,
  logoStyle,
  navLeftStyle,
  navRightStyle,
  titleStyle
} from "./nav.css";

const Nav_Bar = () => {
  return (
    <header className={headerStyle}>
      <div className={navLeftStyle}>
        <span className={logoStyle}>Abstract</span>
        <span className={titleStyle}>Help Center</span>
      </div>
      <div className={navRightStyle}>
        <Button variant="ghost">Submit a request</Button>
        <Button variant="primary"> Sign-in</Button>
      </div>
    </header>
  );
};

export default Nav_Bar;
