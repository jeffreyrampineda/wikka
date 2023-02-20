import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import tadaAudioSrc from "../../assets/audio/tada.mp3";

function calculateGrade(grade) {
  if (grade >= 80) {
    return "A";
  } else if (grade >= 70) {
    return "B";
  } else if (grade >= 60) {
    return "C";
  } else if (grade >= 50) {
    return "D";
  }
  return "F";
}

function Complete({
  description = "",
  pages = 0,
  pagesSkipped = 0,
  duration = 0,
}) {
  const score = Math.floor(((pages - pagesSkipped) / pages) * 100);
  const summary = [
    { label: "Completed", value: `${pages - pagesSkipped} / ${pages}` },
    { label: "Skipped", value: `${pagesSkipped} pages` },
    { label: "Duration", value: `${duration} seconds` },
    { label: "Grade", value: calculateGrade(score) },
  ];
  const grade_img_src = require(`../../assets/images/grade_${calculateGrade(
    score
  ).toLowerCase()}.svg`);

  const tadaAudio = new Audio(tadaAudioSrc);
  tadaAudio.volume = 0.3;
  tadaAudio.play();

  return (
    <section className="complete text-center">
      <h2>Summary</h2>
      <h3>{description}</h3>
      <ul className="complete__summary">
        {summary.map((sm, i) => (
          <li className="complete__summary__row" key={i}>
            {`${sm.label}: `}
            <span>{sm.value}</span>
          </li>
        ))}
        <img src={grade_img_src} style={{ height: "8em", width: "8em" }} />
      </ul>
      <hr />
      <Link to="/">
        <Button wClass="btn--primary">Close</Button>
      </Link>
    </section>
  );
}

export default Complete;
