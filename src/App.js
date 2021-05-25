import React, { useState, useEffect } from "react";
import axios from 'axios';
import Info from './Components/Info';
import SearchBar from './Components/SearchBar';

const apiUrl= 'https://api.nasa.gov/planetary/apod?api_key=cvicckb2zf4QgnYkFf0SkSDeEJdIs6M8URg70k9K'

function App() {
const [info, setInfo] = useState({})

useEffect(() => {
  axios
  .get(apiUrl)
  .then((res) => {
    setInfo(res.data);
  })
  .catch(err => console.log(err))
},[])
console.log(info)
  return (
    <div className="App">
      <SearchBar />
      <Info data={info}/>
    </div>
  );
}

export default App;
