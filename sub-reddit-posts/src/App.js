import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RedditPosts from "./components/redditPosts";
import Navbar from "./components/navbar";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("hot");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Navbar
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="container mt-4">
        <RedditPosts endpoint={activeCategory} />
      </div>
    </div>
  );
};

export default App;
