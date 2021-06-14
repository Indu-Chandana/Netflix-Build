import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
            {movies.map(
                 (movie) => (
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <div className="row__poster_section">
                    <img 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name}/>
                    <h1 className="row__poster_title"> {truncate((movie?.title || movie?.name || movie?.original_name),15)}</h1> 
                    </div>
                )
            ))}
            </div>
        </div>
    )
}

export default Row
