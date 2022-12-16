import React from "react";

const Card = ({ movie,  setModal }) => {
  return (
    <div className="cards" onClick={() => setModal(movie)}>
      <img src={`${process.env.REACT_APP_IMG_URL}${movie.poster_path}`} />
      <p>{movie.title ?? movie.original_name}</p>
      <div className="rating">
        <p>{movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default Card;
