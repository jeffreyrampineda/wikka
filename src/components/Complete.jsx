import React from 'react';
import { Link } from 'react-router-dom';
import './Complete.css';
import Button from './common/Button';

function calculateGrade(grade) {
    if (grade >= 80) {
        return 'A';
    } else if (grade >= 65) {
        return 'B';
    } else if (grade >= 55) {
        return 'C'
    } else if (grade >= 50) {
        return 'D'
    }
    return 'F';
}

function Complete({ description = "", pages = 0, pagesSkipped = 0 }) {
    const score = Math.floor((pages - pagesSkipped) / pages * 100);
    const summary = [
        { label: 'Completed', value: `${pages - pagesSkipped} / ${pages}` },
        { label: 'Skipped', value: pagesSkipped },
        { label: 'Grade', value: calculateGrade(score) }
    ]

    return (
        <section className="summary">
            <h2>Summary</h2>
            <h3>{description}</h3>
            <ul className="summary-list">
                {summary.map((sm, i) =>
                    <li key={i}>{sm.label}: <span className="summary-list-value">{sm.value}</span></li>
                )}
            </ul>
            <hr />
            <Link to="/"><Button color="primary">Close</Button></Link>
        </section>
    )
}

export default Complete;
