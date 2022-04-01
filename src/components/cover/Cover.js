import React from 'react';
import './cover.css';
import cover from '../../assets/img/cover-portfolio-1.jpg';
const Cover = () => {
  return (
    <div className='cover-container'>
        <img src={cover} alt='Cover'/>
    </div>
  )
}

export default Cover;