import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";

import MoviesCard from "./component/MoviesCard";

const API_URL = "http://www.omdbapi.com/?apikey=db045701";

function App() {
   const [movies, setMovies] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   const searchMovies = async (title) => {
      const reponse = await fetch(`${API_URL}&s=${title}`);
      const data = await reponse.json();
      setMovies(data.Search);
      console.log(data.Search);
   };

   useEffect(() => {
      searchMovies("superman");
   }, []);

   return (
      <div className="app">
         <h1>MoviesLand</h1>
         <div className="search">
            <input
               value={searchTerm}
               placeholder="search for movies"
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
               src={SearchIcon}
               alt="search"
               onClick={() => searchMovies(searchTerm)}
            />
         </div>
         {movies.length > 0 ? (
            <div className="flex flex-wrap justify-center">
               {movies.map((movie) => (
                  <MoviesCard movie={movie} />
               ))}
            </div>
         ) : (
            <div className="empty">
               <h2>No movie found</h2>
            </div>
         )}
      </div>
   );
}

export default App;
