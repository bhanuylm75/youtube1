import Videocard from './Videocard'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./video.css"
import axios from 'axios'
const api="AIzaSyBa1NlKc8f0QNWvWRuKaVgzlMmYseMLI4M"
const options = {
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': 'd016f390b9mshfd01490323829eap146c95jsn3d770b22a7ac',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


const Videocontainer = () => {
  const [videos,setVideos]=useState()
  useEffect(()=>{
    getVideos()

  },[])
  const getVideos= async()=>{
    const {data}=await axios.get('https://youtube-v31.p.rapidapi.com/search',options)
    //const response=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=iphone&type=video&key="+api)
    //const data= await response?.json()
    setVideos(data?.items)
    //const a= data.items[0].id.videoId
    //console.log(data)

  }
  return (
    <div className='flex flex-wrap '>
      {videos?.map((video)=>(
      <Link to={"/watch?v=" + video?.id?.videoId}>
        <Videocard info={video}/>
      </Link>
 
))}
      
      
    </div>
  )
}

export default Videocontainer
