import React, { useState, useEffect } from 'react';

const inputBoxStyle = {
    'fontSize': '2em',
    'resize': 'none',
    'width': '100%',
};

/**
 * @param {char} translation 
 * @param {function} nextChar 
 */
function InputBox({ translation, nextChar }) {
    const [userInput, setUserInput] = useState('');

    // Reset userInput if translation is updated.
    useEffect(() => {
        setUserInput('');
    }, [translation]);

    const handleOnChange = (e) => {
        e.preventDefault();

        const value = e.target.value.trim();

        setUserInput(value);

        // Compare translation with user input.
        if (translation && translation === value) {
            setUserInput('');
            nextChar();
        }
    }

    return (
        <textarea
            style={inputBoxStyle}
            id="userInput"
            rows="3"
            cols="30"
            placeholder="Type in Romaji"
            value={userInput}
            onChange={handleOnChange}
        />
    );
}

export default InputBox;
