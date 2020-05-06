import React from "react";
import "./WordSearchResult.css";

const WordSearchResult = ({ word, result }) => {
  return (
    <p className="word-search-result">
      La palabra {word} aparece {result} veces.
    </p>
  );
};

export default WordSearchResult;
