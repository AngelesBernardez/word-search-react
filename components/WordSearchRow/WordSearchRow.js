import React from "react";
import "./WordSearchRow.css";
import WordSearchLetter from "./../WordSearchLetter/WordSearchLetter";

const WordSearchRow = ({ row }) => {
  /**
   * Renders the WordSearchLetter component according the amount of items passed as a prop.
   * @param {array} item Needs an array of strings.
   * @returns <WordSearchLetter /> for the amount of Letters.
   */
  const renderLetters = () => {
    if (row.length > 0) {
      return row.map((letter, index) => {
        return <WordSearchLetter key={index} letter={letter} />;
      });
    }
  };

  return <div className="word-search-row">{renderLetters()}</div>;
};

export default WordSearchRow;
