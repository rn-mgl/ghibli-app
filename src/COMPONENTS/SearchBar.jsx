import React from "react";
import { ReactComponent as Search } from "../IMG/SEARCH ICON.svg";
import { ReactComponent as Clear } from "../IMG/CLEAR ICON.svg";

import { useGlobalContext } from "../context";

export default function SearchBar() {
  const { setSearchWord } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchWord = () => {
    setSearchWord(searchValue.current.value);
  };

  return (
    <div className="search-container">
      <div className="search-and-icon-wrap">
        <input
          spellCheck="false"
          type="text"
          name="title"
          id="title"
          ref={searchValue}
          onChange={searchWord}
          className="search-field"
        />

        <Search className="search icon" />
      </div>
    </div>
  );
}
