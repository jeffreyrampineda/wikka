import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Story.css";
import Card from "./common/Card";
import FormContainer from "./FormContainer";
import Complete from "./Complete";
import Modal from "./common/Modal";

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
      <div className="horizontal-flex">
        <h4>{selectedStory.title}</h4>
        <button onClick={handleToggleModal} style={{ border: "none" }}>
          <i className="close"></i>
        </button>
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
        <br />
        <div className="horizontal-flex">
          <Link to="/">
            <button className="btn secondary">Exit</button>
          </Link>

          <button className="btn primary" onClick={handleToggleModal}>
            Stay
          </button>
        </div>
      </Modal>
    </Card>
  );
}

export default Story;
