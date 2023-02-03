import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Story.css";
import Card from "./common/Card";
import FormContainer from "./FormContainer";
import Complete from "./Complete";
import Modal from "./common/Modal";
import Button from "./common/Button";

let timerRef;

/**
 * @param {Story} selectedStory
 * @param {function} fetchStoryById
 */
function Story({ selectedStory, fetchStoryById }) {
  const { id } = useParams();
  const skipped = useRef(0);
  const duration = useRef(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    fetchStoryById(id);

    timerRef = setInterval(() => {
      duration.current += 1;
    }, 1000);

    return () => clearInterval(timerRef);
  }, []);

  // Increments skipped by 1.
  const addSkipped = () => {
    skipped.current += 1;
  };

  const handleGotoComplete = () => {
    clearInterval(timerRef);
    setIsComplete(true);
  };

  const handleToggleModal = () => {
    setIsModalActive(!isModalActive);
  };

  if (!selectedStory) {
    return <p className="text-center">Loading...</p>;
  }
  if (isComplete) {
    return (
      <Card>
        <Complete
          description={`Reading: ${selectedStory.title}`}
          pages={selectedStory.passages.length}
          pagesSkipped={skipped.current}
          duration={duration.current}
        ></Complete>
      </Card>
    );
  }
  return (
    <Card>
      <div className="d-flex justify-content-between">
        <h4 className="display-6 mb-5">{selectedStory.title}</h4>
        <button
          onClick={handleToggleModal}
          type="button"
          className="btn-close btn btn-lg"
          aria-label="Close"
        ></button>
      </div>
      <FormContainer
        sentences={selectedStory.passages}
        addSkipped={addSkipped}
        gotoComplete={handleGotoComplete}
      ></FormContainer>
      <Modal
        isModalActive={isModalActive}
        close={() => {
          setIsModalActive(false);
        }}
      >
        <p>Are you sure you wan't to exit? You will lose your progress.</p>
        <div className="d-flex justify-content-between">
          <Link to="/">
            <Button color="secondary">Exit</Button>
          </Link>
          <Button color="primary" onClick={handleToggleModal}>
            Stay
          </Button>
        </div>
      </Modal>
    </Card>
  );
}

export default Story;
