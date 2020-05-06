import React, { useState } from "react";
import { findWord, findAllDiagonals } from "./../../helpers";
import WordSearchItem from "./../WordSearchItem/WordSearchItem";
import WordSearchResult from "./../WordSearchResult/WordSearchResult";
import "./WordSearchBody.css";

const WordSearchBody = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState({ active: null });
  const [wordQuantity, setWordQuantity] = useState(0);

  /**
   * Toggles the selection of a WordSearchItem and calls the searchWord() method.
   * @param {int} index - The index of the element that has been selected.
   */
  const toggleSelectedItem = index => {
    setWordQuantity(0);
    if (selectedItem.active !== index) {
      setSelectedItem({ active: index });
      searchWords(index);
    } else {
      setSelectedItem({ active: null });
    }
  };

  /**
   * Searchs for the word "OIE" in different ways. The best thing would be for it not to be hardcoded,
   * but I think it's okay, given the nature of the excercise.
   * @param {int} index - The index of the element that has been selected.
   */
  const searchWords = index => {
    const diagonalsBottomRightToTop = findAllDiagonals(
      items[index],
      "bottomRightToTop"
    );

    const diagonalsBottomLeftToTop = findAllDiagonals(
      items[index],
      "bottomLeftToTop"
    );

    handleMatrix("OIE", items[index], false);
    handleMatrix("OIE", items[index], true);
    handleMatrix("OIE", diagonalsBottomRightToTop, false);
    handleMatrix("OIE", diagonalsBottomLeftToTop, false);
  };

  /**
   * Handles the wordQuantity state for the amount of times a word appears in a matrix.
   * @param {string} word - The word you want to search for.
   * @param {array[][]} matrix - The 2d array where you want to make the search.
   * @param {boolean} findColumn - If you want to check the matrix columns.
   */
  const handleMatrix = (word, matrix, findColumn) => {
    setWordQuantity(
      prevState => prevState + findWord(word, matrix, findColumn)
    );
  };

  /**
   * Renders the WordSearchItem component according the amount of items passed as a prop.
   * @param {array[][][]} item - Needs an array of 2d arrays.
   * @returns <WordSearchItem /> for the amount of items.
   */
  const renderWordSearchItems = items => {
    return items.map((item, index) => {
      return (
        <WordSearchItem
          key={index}
          item={item}
          selectedItem={selectedItem.active === index}
          handleItemClick={() => toggleSelectedItem(index)}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <div className="word-search-body">{renderWordSearchItems(items)}</div>
      <WordSearchResult result={wordQuantity} word="OIE" />
    </React.Fragment>
  );
};

export default WordSearchBody;
