import { Link } from 'react-router';
import Button from '../common/Button';
import tadaAudioSrc from '../../assets/audio/tada.mp3';
import gradeA from '../../assets/images/grade_a.svg';
import gradeB from '../../assets/images/grade_b.svg';
import gradeC from '../../assets/images/grade_c.svg';
import gradeD from '../../assets/images/grade_d.svg';
import gradeF from '../../assets/images/grade_f.svg';

function calculateGrade(grade: number): string {
  if (grade >= 80) {
    return 'A';
  } else if (grade >= 70) {
    return 'B';
  } else if (grade >= 60) {
    return 'C';
  } else if (grade >= 50) {
    return 'D';
  }
  return 'F';
}

function Complete({
  description = '',
  pages = 0,
  pagesSkipped = 0,
  duration = 0,
}) {
  const score = Math.floor(((pages - pagesSkipped) / pages) * 100);
  const summary = [
    { label: 'Completed', value: `${pages - pagesSkipped} / ${pages}` },
    { label: 'Skipped', value: `${pagesSkipped} pages` },
    { label: 'Duration', value: `${duration} seconds` },
    { label: 'Grade', value: calculateGrade(score) },
  ];
  let grade_img_src = '';

  switch (calculateGrade(score)) {
    case 'A':
      grade_img_src = gradeA;
      break;
    case 'B':
      grade_img_src = gradeB;
      break;
    case 'C':
      grade_img_src = gradeC;
      break;
    case 'D':
      grade_img_src = gradeD;
      break;
    case 'F':
    default:
      grade_img_src = gradeF;
      break;
  }

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
        <img src={grade_img_src} style={{ height: '8em', width: '8em' }} />
      </ul>
      <hr />
      <Link to="/">
        <Button wClass="btn--primary">Close</Button>
      </Link>
    </section>
  );
}

export default Complete;
