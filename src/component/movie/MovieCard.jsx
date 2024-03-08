import React from 'react';

const MovieCard = ({ movieItem }) => {
    return (
    <div className="movie">
        <div>
            <p>{movieItem.Year}</p>
        </div>
        
        <div>
            <img src={movieItem.Poster !== 'N/A' ? movieItem.Poster : 'https://via.placeholder.com/400'} alt={movieItem.Title} />
        </div>

        <div>
            <span>{movieItem.Type}</span>
            <h3>{movieItem.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard;