import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useSearchParams,Link } from "react-router-dom";
import Videocard from './Videocard';

const Search = () => {
  const [searchvideos,setsearchvideos]=useState()
  const [searchParams] = useSearchParams();
  const item=searchParams.get("search_query")
  const api="AIzaSyBa1NlKc8f0QNWvWRuKaVgzlMmYseMLI4M"
  //console.log(item)

  useEffect(()=>{
    getSearchvideos()
  })
  const options = {
    params: {
      q: item,
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

  const getSearchvideos= async()=>{
    const {data}= await axios.get("https://youtube-v31.p.rapidapi.com/search",options)
    setsearchvideos(data?.items)
    //console.log(data)
  }
  return (
    <div className='flex flex-wrap '>
      {searchvideos?.map((video)=>(
      <Link to={"/watch?v=" + video?.videoId}>
        <Videocard info={video}/>
      </Link>
 
))}
      
      
    </div>
  )

}

export default Search