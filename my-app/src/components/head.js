import React, { useEffect, useState } from 'react'
import menu from "./menu.png"
import pro from "./pro.png"
import youtube from "./download (1).png"
import search from "./search-icon-png-5.png"
import { toggleMenu } from './toggleslice'
import "./head.css"
import {useDispatch} from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
function Head() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchQqery,setSearchQuery]=useState("")
  const [suggestions,setSuggestions]=useState([])
  useEffect(()=>{
    getSuggestions()
    const timer =setTimeout(() => {
      console.log("a")
    }, 2000);

    return ()=>{
      clearTimeout(timer)
    }


  },[searchQqery])

  const  getSuggestions= async ()=>{
    const res=await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQqery)
    const json= await res.json()
    //console.log(json[1])
    setSuggestions(json[1])
  }
  return (
    <div className='head p-3  shadow-lg mb-2  w-full '>
      <div className='flex'>
      <img onClick={() => dispatch(toggleMenu())} alt="" src={menu} className='h-8 pr-2 cursor-pointer' />
      <img alt="" src={youtube} className='h-8' />
      </div>
      <div className='flex '>
        <div className='flex flex-col   h-8'>
          <div className='flex'>
          <input type='search' className='border w-80 border-gray-400 outline-none rounded-l-full h-8 pl-2'  onChange={(e)=> setSearchQuery(e.target.value)} />
          <img src={search} alt="" className="h-8 border border-gray-400 rounded-r-full p-1 text-center" />
          </div>
          <div className='bg-white w-80 top-11 fixed  shadow-lg rounded-lg'>
          <ul>
          {suggestions?.map((s)=>(
            <Link to={"results?search_query="+s}><li  key={s}>🔍{s}</li></Link>
          
          ))}
        </ul>
          </div>
        
        </div>
      </div>
      <div>
        <img alt="" src={pro} className='h-8' />
      </div>


    </div>
  )
}

export default Head
