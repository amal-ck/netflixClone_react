import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from "../../constants/constants";
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
    })
  },[])
  
  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results.length!==0){
        window.open(`https://www.youtube.com/watch?v=${response.data.results[0].key}`, '_blank');
      }else{
        console.log('Trailer Not Available');
      }
    })
  }
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className="content">
            <h1 className="title">{movie?movie.title?movie.title:movie.name:""}</h1>
            <div className="banner_buttons">
                <button onClick={()=>handleMovie(movie? movie.id:'')} className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
        
    </div>
    
  )
}

export default Banner 