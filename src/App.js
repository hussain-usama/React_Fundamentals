import React from "react";

import './App.css';
import RouterComp from './config/RouterComponent';

function App() {
  const isLogin=localStorage.getItem('token')
  return (
    <div className="App">
     <RouterComp />
    </div>
  );
}

export default App;
