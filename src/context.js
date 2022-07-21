import React from "react";
const url = "https://ghibliapi.herokuapp.com/films";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [searchWord, setSearchWord] = React.useState("");
  const [films, setFilms] = React.useState([]);

  const getFilms = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        const newFilmSet = data.filter((d) => {
          const {
            id,
            title,
            original_title,
            original_title_romanised,
            image,
            description,
            director,
            producer,
            release_date,
            running_time,
          } = d;

          if (title.toLowerCase().includes(searchWord.toLowerCase())) {
            return {
              id: id,
              title: title,
              original_title: original_title,
              original_title_romanised: original_title_romanised,
              image: image,
              description: description,
              director: director,
              producer: producer,
              release_date: release_date,
              running_time: running_time,
            };
          }
        });
        setFilms(newFilmSet);
      } else {
        setFilms([]);
      }
      setLoading(false);
    } catch {
      console.log(Error);
      setLoading(false);
    }
  }, [searchWord]);

  React.useEffect(() => {
    getFilms();
  }, [searchWord, getFilms]);

  return (
    <AppContext.Provider value={{ loading, films, searchWord, setSearchWord }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return React.useContext(AppContext);
}

export { AppContext, AppProvider };
