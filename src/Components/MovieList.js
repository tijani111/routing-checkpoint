import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movieList,search,rate}) {
   const mov=movieList[1].titre
   console.log(mov)
    return (
        <div className="card">
            

            {movieList.filter(el=>el.titre.toUpperCase().includes(search.toUpperCase().trim())& el.rate>=rate).map((el)=>(<MovieCard film={el}/>))}
        </div>
    )
}
