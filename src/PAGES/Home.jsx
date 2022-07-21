import React from "react";
import SearchBar from "../COMPONENTS/SearchBar";
import Films from "../COMPONENTS/Films";
import Loading from "../COMPONENTS/Loading";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Films />
    </div>
  );
}
