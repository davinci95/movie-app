import React from 'react'

function MoviesCard({ movie }) {
  return (
    <div className='movie'>
      <div>
      <p>{movie.Year}</p>
      </div>
      <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : "http://via.placeholder.com/400"} alt={movie.Title}/>
      </div>
      <div>
           <h3> {movie.Type}</h3>
            <p>{movie.Title}</p>
      </div>
    </div>
  )
}

export default MoviesCard