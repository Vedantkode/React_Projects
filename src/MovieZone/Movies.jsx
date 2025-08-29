import React, { useState } from "react";
import { movies } from "./data.js";
const Movies = () => {
  const [movielist, setMovieList] = useState(movies);

  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat));
  };
  return (
    <>
      <div
        className="my-3  d-flex justify-content-center gap-3 py-3"
        style={{ width: "1100px", margin: "0 auto" }}
      >
        <button
          type="button"
          onClick={() => setMovieList(movies)}
          className="btn btn-outline-primary"
        >
          All
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Action")}
          className="btn btn-outline-secondary"
        >
          Action
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Thriller")}
          className="btn btn-outline-success"
        >
          Thriller
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Animation")}
          className="btn btn-outline-danger"
        >
          Animation
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Horror")}
          className="btn btn-outline-warning"
        >
          Horror
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Drama")}
          className="btn btn-outline-info"
        >
          Drama
        </button>
        <button
          type="button"
          onClick={() => filterByCategory("Sci-Fi")}
          className="btn btn-outline-light"
        >
          Sci-Fi
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          // gap: "2rem",
          textAlign: "center",
          width: "1300px",
          margin: "auto",
        }}
      >
        {movielist.map((data) => (
          <div
            key={data.id}
            style={{
              maxWidth: "280px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "10px",
              }}
              classNameName="hover_effect"
            >
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "285px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
