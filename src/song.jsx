import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import React, { useState } from "react";
import './song.css'
export default function Song({id, artist, songName}){

     const [isLiked, changeLike] = useState(false)

     function handleLike(){
changeLike(!isLiked)
     }



return(
    <li 
    key = {id}
    >   
    <div className="song">
        <FaMusic className="music_icon"/>
    <div className="song__details">
    <p className="song__name">{songName}</p>
    <p className="song__artist">{artist}</p>
    </div>
    <a onClick={handleLike}>
        {isLiked ? <FaHeart className="like"/> : <FaRegHeart className="like"/>}
    </a>
    </div>
 </li>
);
}