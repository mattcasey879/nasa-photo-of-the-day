import React, { useState } from 'react';

const Info = props => {
  const { url, explanation, title } = props.data
  return (
      <div className='info-container'>
        <div className='top-content'>
          <h2 className='vid-title'>{title}</h2>
          <section className='img-container'>
            <iframe src={url} 
                    title='Nasa APOD video'/>
          </section>
          <p>{explanation}</p>
        </div>

      </div>
  )
}

export default Info