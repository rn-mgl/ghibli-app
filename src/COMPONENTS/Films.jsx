import React from "react";
import Loading from "./Loading";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Films() {
  const { loading, films } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (films.length < 1) {
    return (
      <div className="search-error">
        Your Search Does Not Match A Ghibli Film
      </div>
    );
  }
  return (
    <div className="film-body">
      <div className="films-container">
        {films.map((d) => {
          return (
            <div className="film-card" key={d.id}>
              <img className="film-image" src={d.image} />
              <div className="card-text-container">
                <div className="film-title">{d.title}</div>
                <div className="film-romanised-title">
                  {d.original_title_romanised}
                </div>
                <Link className="details-btn" to={`/${d.id}`}>
                  DETAILS
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
