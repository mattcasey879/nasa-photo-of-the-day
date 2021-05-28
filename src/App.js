import React, { useState, useEffect } from "react";
import axios from 'axios';
import Info from './Components/Info';
import styles from 'styled-components'

const apiUrl= 'https://api.nasa.gov/planetary/apod?api_key=cvicckb2zf4QgnYkFf0SkSDeEJdIs6M8URg70k9K';

const Background = styles.div`
background-image: url(https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/shutterstock_262946390.jpg?w=750);
background-size: cover;
min-height: 100vh;
min-width: 100vh;
background-position: fixed;

`

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
    <Background className="App">
      <Info data={info}/>
    </Background>
  );
}

export default App;
