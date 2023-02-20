import React from "react";
import "./Sentence.css";
import Tooltip from "../common/Tooltip";

/**
 * @param {Array<char>} sentence
 * @param {number} currentIndexChar
 */
function Sentence({ sentence, currentIndexChar }) {
  return (
    <p className="form__sentence">
      {sentence.map((mc, i) => {
        if (mc.translation) {
          return (
            <Tooltip key={i} message={mc.translation}>
              <span
                className={`${
                  i < currentIndexChar
                    ? "correct"
                    : i === currentIndexChar
                    ? "current"
                    : "incorrect"
                }`}
              >
                {mc.character}
              </span>
            </Tooltip>
          );
        }
        return mc.character;
      })}
    </p>
  );
}

export default Sentence;
