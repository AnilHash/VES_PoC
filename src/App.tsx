import React from "react";

import HeroSearch from "./components/Hero_Search/HeroSearch";
import Nav_Bar from "./components/Nav/Nav_Bar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav_Bar />
      <HeroSearch />
    </div>
  );
};

export default App;
