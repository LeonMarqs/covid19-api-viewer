import React from 'react';
import './App.css';
// import Axios from 'axios';
import CovidCountries from "./components/Api";
import Header from "./components/Header";

function App() {

  return (
      <main>
        <Header />
        <CovidCountries />
      </main>
  );
}

export default App;

