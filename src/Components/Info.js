import React from 'react';
import styles from 'styled-components';

const TopContent = styles.div`
text-align: center;
font-family: Oswald, sans-serif;
margin: 0;
letter-spacing: 3px;
h2{
  font-size: 2.5rem;
}
p{
  font-size: 1.25rem;
  color: black;
  font-weight: bold;
}
span{
  font-size: 2rem;
}
`
const Info = ({data}) => {
  return (
      <div>
        <TopContent>
          <h2>{data.title}</h2>
          <span>{data.date}</span>
          <section>
            <img src={data.url} alt='nasa-APOD img of the day'/>
            <span>&#169;{data.copyright}</span>
          </section>
          <p>{data.explanation}</p>
        </TopContent>

      </div>
  )
}

export default Info