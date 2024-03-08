import { useEffect, useState } from "react";
import 'css/Movie.css'
import SearchIcon from 'asset/search.svg'

import MovieCard from "component/movie/MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=8088ee5f';

const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  "Year": "2016",
  "imdbID": "tt18689424",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}

const LandingPage = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Superman');
  }, []);

  return (
    <div className="app">
      <h1>Anggi Movie Land</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {}}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movieItem={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  );
}

export default LandingPage;
