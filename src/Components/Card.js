import React from "react";

const Card=(movie)=>{
//    console.log("movie")

    return(
        <>
            <div className="movie">
                <img src={movie.infom.poster_path} className="poster" alt=" No img"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.infom.title}</h4>
                        <p className="rating">{movie.infom.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        {movie.infom.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;