import React, { useEffect, useState } from 'react'
import CategoryButton from './CategoryButton';
import { Link } from 'react-router-dom'
import axios from 'axios';
//import { GET_VIDEO_CATEGORIES_LIST } from '../utils/config';
const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': 'd016f390b9mshfd01490323829eap146c95jsn3d770b22a7ac',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const Categories = () => {

  const [categoryList, setCategoryList] = useState([]);
  
  const getCategories = async () => {
    const{data}  = await axios.get('https://youtube-v31.p.rapidapi.com/captions',options);
    //const data_json = await data.json();

    console.log(data.items);

    //setCategoryList(data_json.items);
  };

  useEffect(()=> {
    getCategories();
  },[]);

  return (
    <div className="flex">
      {categoryList?.map(item=>{
        return  <Link to={"/catsection?v=" + item.snippet.name}>
        <CategoryButton className=" flex-wrap" name={item.snippet.name} key={item.id}/>
        </Link>
      })
      }
      

  
    </div>
  );
};

export default Categories;