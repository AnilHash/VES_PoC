import React, { useState } from "react";

import ArrowRightSVG from "../../assests/ArrowRightSVG";
import Button from "../utilities/Button/Button";
import {
  heroTitleStyle,
  inputWrapperStyle,
  mainStyle,
  searchBtnStyle,
  searchInputStyle
} from "./heroStyle.css";
const HeroSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <main className={mainStyle}>
      <h1 className={heroTitleStyle}>How can we help ?</h1>
      <div className={inputWrapperStyle}>
        <input
          className={searchInputStyle}
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <Button className={searchBtnStyle} variant="light">
          <ArrowRightSVG />
        </Button>
      </div>
    </main>
  );
};

export default HeroSearch;
