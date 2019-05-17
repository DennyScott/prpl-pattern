import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImageList from "./features/image-list";
import About from "./features/about";
import Navigation from './features/navigation';

import { PicSumContext } from "./context/picsum-context";
import { useFetch } from "./utils/useFetch";
import endpoints from "./utils/endpoints";

function App() {
  const [ picSum, setPicSum ] = useState([]); 
  useFetch(endpoints.images.getList(), setPicSum);

  return (
    <PicSumContext.Provider value={picSum}>
      <Router>
        <div>
          <Route path="/" component={Navigation} />
          <Route path="/images" exact component={ImageList} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    </PicSumContext.Provider>
  );
}

export default App;
