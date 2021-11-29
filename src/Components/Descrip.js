import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
export default function Descrip({match,movieList}) {
    

    const ID=match.params.ID;
    console.log(ID);
   const mov=movieList.find(el=>el.id==ID);
   console.log(mov);
   
    return (
        <div>
           
           <Link to={"/"}>
            <h2>{mov.titre}</h2>
            </Link>
           <p>{mov.description}</p>
           <ReactPlayer
        url={mov.video} 
      />
      
      
        </div>
    )
}
