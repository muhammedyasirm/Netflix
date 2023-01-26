import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'
function Banner() {
  const [movie,SetMovie] =useState();
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    const ban = Math.floor(Math.random() * 19 + 1);
    SetMovie(response.data.results[ban])
   })
  },[])
  return (
     
    
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
     className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title ? movie.title : movie.name : ""}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? truncate(movie.overview, 100) : ""}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
