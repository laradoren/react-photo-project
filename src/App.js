import React from 'react';
import './App.css';
import Gallery from './component/Gallery/Galllery';

const App = () => {
  return (
    <div className="appWraper">
      <div className = "appTitle"> APP TEST </div>
      <Gallery />   
      <footer className = "footer"> © 2018-2019 </footer>
    </div>
  );
}

export default App;
