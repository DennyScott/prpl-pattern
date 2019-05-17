import React, { useState } from "react";
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './features/navigation';

import Loading from './components/loading';

import { PicSumContext } from "./context/picsum-context";
import { useFetch } from "./utils/useFetch";
import endpoints from "./utils/endpoints";

const ImageListPage = Loadable({
  loader: () => import('./features/image-list'),
  loading: Loading
});

const AboutPage = Loadable({
  loader: () => import('./features/about'),
  loading: Loading
});

function App() {
  const [ picSum, setPicSum ] = useState([]); 
  useFetch(endpoints.images.getList(), setPicSum);

  return (
    <PicSumContext.Provider value={picSum}>
      <Router>
        <div>
          <Route path="/" component={Navigation} />
          <Route path="/images" exact component={ImageListPage} />
          <Route path="/about" exact component={AboutPage} />
        </div>
      </Router>
    </PicSumContext.Provider>
  );
}

export default App;
