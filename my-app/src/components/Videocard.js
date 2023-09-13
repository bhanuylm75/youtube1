import React from 'react'

const Videocard = ({info}) => {
  //console.log(info)

  const {snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  //console.log(snippet)
  //const {channelTitle,thumbnails,title}=snippet

  return (
    <div className="w-72 p-2 shadow-lg flex flex-col h-80" >
    <div>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
    </div>
    <div className="flex justify-center">
      <div className="">
        <h6 className="text-base font-medium w-4/5">{title}</h6>
        <p className="text-gray-dark text-xs w-4/5 h-[32px]">{channelTitle}</p>
        </div>
    </div>
    

  </div>
  )
}

export default Videocard
