import React from 'react'
import { useSearchParams } from "react-router-dom";
const Watch = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="px-5">
    <iframe
      width="650"
      height="400"
      src={"https://www.youtube.com/embed/" + searchParams.get("v")}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
  )
}

export default Watch