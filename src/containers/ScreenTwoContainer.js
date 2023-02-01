import React, { useEffect, useState } from "react";
import Axios from "axios";

function ScreenTwoContainer() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6544a83e780ba439d9176668b38e7601"
    )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <div>
      {error && <p>An error occurred: {error.message}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {data.map((movie) => {
          return (
            <div key={movie.id}>
              <h2 style={{ backgroundColor: "lightgray", padding: "20px" }}>
                {movie.title}
              </h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ backgroundColor: "lightgray", padding: "20px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScreenTwoContainer;
