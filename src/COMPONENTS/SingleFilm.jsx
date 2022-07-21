import React from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";

export default function SingleFilm() {
  const [loading, setLoading] = React.useState(false);
  const { filmId } = useParams();
  const [singleFilm, setSingleFilm] = React.useState({});

  React.useEffect(() => {
    setLoading(true);

    async function getFilm() {
      try {
        const res = await fetch(
          `https://ghibliapi.herokuapp.com/films/${filmId}`
        );
        const data = await res.json();

        if (data) {
          setSingleFilm(data);
        } else {
          setSingleFilm([]);
        }
      } catch {
        console.log(Error);
      }
      setLoading(false);
    }
    getFilm();
  }, [filmId]);

  React.useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
      .then((res) => res.json())
      .then((data) => setSingleFilm(data));
  }, [filmId]);

  if (loading) {
    return <Loading />;
  }

  const hour = (parseInt(singleFilm.running_time) / 60).toFixed(0);
  const minute = parseInt(singleFilm.running_time) % 60;

  return (
    <React.Fragment>
      <div className="back-container">
        <Link className="back-btn" to="/">
          Back Home
        </Link>
      </div>

      <div className="single-film-container">
        <div className="img-container">
          <img className="single-film-img" src={singleFilm.image} />
        </div>

        <div className="film-details-container">
          <div className="bar-container">
            <span className="bar">Title:</span>
            <span className="title">{singleFilm.title}</span>
          </div>

          <div className="bar-container">
            <span className="bar">Original Title:</span>
            <span className="original-title">{singleFilm.original_title}</span>
          </div>

          <div className="bar-container">
            <span className="bar">Director:</span>
            <span className="director">{singleFilm.director}</span>
          </div>

          <div className="bar-container">
            <span className="bar">Producer:</span>
            <span className="producer">{singleFilm.producer}</span>
          </div>

          <div className="bar-container">
            <span className="bar">Release Date:</span>
            <span className="date">{singleFilm.release_date}</span>
          </div>

          <div className="bar-container">
            <span className="bar">Run Time:</span>
            <span className="time">
              {hour !== NaN &&
                minute !== NaN &&
                `${hour} ${hour > 1 ? "hours" : "hour"} and ${minute} ${
                  minute > 1 ? "minutes" : "minute"
                }`}
            </span>
          </div>

          <div className="bar-container">
            <span className="bar">Description:</span>
            <p className="description">{singleFilm.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
