import React, { useState, useEffect } from "react";
import axios from 'axios';
import Info from './Components/Info';
import styles from 'styled-components'

const apiUrl= 'https://api.nasa.gov/planetary/apod?api_key=cvicckb2zf4QgnYkFf0SkSDeEJdIs6M8URg70k9K';

const Background = styles.div`
background-color: gray;
background-size: cover;
min-height: 100vh;
min-width: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
box-sizing: border-box
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
