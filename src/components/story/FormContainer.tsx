import React, { useState, useEffect } from 'react';
import { generateTranslation } from '../../helpers/translator';
import Button from '../common/Button';
import Sentence from './Sentence';
import InputBox from './InputBox';

/**
 * @param {Array<string>} sentences
 * @param {function} addSkipped
 * @param {function} gotoComplete
 */
function FormContainer({
  sentences,
  addSkipped,
  gotoComplete,
}: {
  sentences: string[];
  addSkipped: () => void;
  gotoComplete: () => void;
}) {
  const [currentIndexSentence, setCurrenctIndexSentence] = useState(0);
  const [currentIndexChar, setCurrenctIndexChar] = useState(0);
  const [canNextSentence, setCanNextSentence] = useState(false);
  const [sentence, setSentence] = useState(() =>
    generateTranslation(sentences[0]),
  );

  useEffect(() => {
    handleNextChar(0);
  }, [sentence]);

  // Returns true if currentIndexSentence is the last available sentences index.
  const isLastSentence = () => currentIndexSentence + 1 >= sentences.length;

  // Change to <Complete /> component for summary.
  const handleOnComplete = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    gotoComplete();
  };

  // Updates which sentence is currently active & resets canNextSentence.
  const handleNextSentence = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const _nextIndexSentence = currentIndexSentence + 1;

    if (_nextIndexSentence < sentences.length) {
      setCurrenctIndexSentence(_nextIndexSentence);
      setCanNextSentence(false);
      setSentence(generateTranslation(sentences[_nextIndexSentence]));
    }
  };

  // Skip to the next available sentence or complete the story.
  const handleOnSkipped = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Increment skipped by 1.
    addSkipped();

    if (isLastSentence()) {
      handleOnComplete(event);
    }
    handleNextSentence(event);
  };

  /**
   * Updates which character is currently active. Default is the next
   * translatable character.
   * @param {number} nextIdx
   */
  const handleNextChar = (nextIdx = currentIndexChar + 1) => {
    let _nextIndexChar = nextIdx;

    // Ignore undefined translations.
    while (
      _nextIndexChar < sentence.length &&
      sentence[_nextIndexChar].translation === undefined
    ) {
      _nextIndexChar++;
    }

    // Check if the sentence is complete.
    if (_nextIndexChar >= sentence.length) {
      setCanNextSentence(true);
    }
    setCurrenctIndexChar(_nextIndexChar);
  };

  return (
    <form onSubmit={isLastSentence() ? handleOnComplete : handleNextSentence}>
      <Sentence
        sentence={sentence}
        currentIndexChar={currentIndexChar}
      ></Sentence>
      <InputBox
        translation={sentence[currentIndexChar]?.translation}
        nextChar={handleNextChar}
      ></InputBox>
      <hr className="mt-1" />
      <div className="form__actions mt-1">
        <Button wClass="btn--secondary" onClick={handleOnSkipped}>
          Skip
        </Button>
        <p>
          Page: {currentIndexSentence + 1}/{sentences.length}
        </p>
        <Button wClass="btn--primary" disabled={!canNextSentence}>
          {isLastSentence() ? 'Complete' : 'Next'}
        </Button>
      </div>
    </form>
  );
}

export default FormContainer;
