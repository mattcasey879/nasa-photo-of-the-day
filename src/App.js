import React from "react";
import "./Css/App.css";
import axios from 'axios';
import Info from './Components/Info';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

 axios.get('https://api.nasa.gov/planetary/apod?api_key=cvicckb2zf4QgnYkFf0SkSDeEJdIs6M8URg70k9K')
  .then((res) => {
    console.log(res.data)
  })

function App() {

  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
