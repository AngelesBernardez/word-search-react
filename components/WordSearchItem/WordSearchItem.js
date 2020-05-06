import React from "react";
import WordSearchRow from "./../WordSearchRow/WordSearchRow";
import "./WordSearchItem.css";

const WordSearchItem = ({ item, selectedItem, handleItemClick }) => {
  /**
   * Renders the WordSearchRow component according the amount of items passed as a prop.
   * @param {array[][]} item Needs 2d array.
   * @returns <WordSearchRow /> for the amount of items.
   */
  const renderRows = item => {
    if (item.length > 0) {
      return item.map((row, index) => {
        return <WordSearchRow key={index} row={row} />;
      });
    }
  };

  return (
    <div
      className={"word-search-item " + (selectedItem && "selected")}
      onClick={handleItemClick}
    >
      <div className="rows-container">{renderRows(item)}</div>
    </div>
  );
};

export default WordSearchItem;
