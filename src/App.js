import React, { useEffect } from "react";

import './App.css';
import RouterComp from './config/RouterComponent';

function App() {
  const isLogin=localStorage.getItem('token')
  const onStorageUpdate = (e) => {
    if( e.data !== sessionStorage.getItem('currtabID')){
      window.location.reload()
    }
  }
  useEffect(() => {
    const channel = new BroadcastChannel("my-channel");
    channel.addEventListener("message", onStorageUpdate);
    return () => {
      channel.addEventListener("message", onStorageUpdate);
    };
  }, []);

  return (
    <div className="App">
     <RouterComp />
    </div>
  );
}

export default App;
