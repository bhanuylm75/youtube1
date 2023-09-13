import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios"
import Videocard from './Videocard';
const api="AIzaSyBa1NlKc8f0QNWvWRuKaVgzlMmYseMLI4M"

const CategoriesVideoCon = () => {
  const [searchParams] = useSearchParams();
  const item=searchParams.get("v")
  console.log(item)
  const [videos ,setvideos]=useState()
  useEffect(()=>{
    data()
  })

  const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '8c47b78693msha57e53052dc8fb9p1b3515jsnca2932a42962',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  const data= async ()=>{
    const {data}=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${"music"}&type=video&key=`+api)
    console.log(data)
    setvideos(data.items)
  }
  return (
    <div className='flex flex-wrap '>
      snsjsn
      
    </div>
  )
}

export default CategoriesVideoCon