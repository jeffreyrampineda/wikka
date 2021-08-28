import React, { useState, useEffect } from 'react';
import translate from '../helpers/translator';

/**
 * @param {char} currentChar 
 * @param {function} nextChar 
 */
function InputBox({ currentChar, nextChar }) {
    const [userInput, setUserInput] = useState('');

    // Reset userInput if currentChar is updated.
    useEffect(() => {
        setUserInput('');
    }, [currentChar]);

    const handleOnChange = (e) => {
        e.preventDefault();

        const value = e.target.value.trim();

        setUserInput(value);

        // Compare currentChar with translated input.
        if (currentChar && translate(currentChar) === value) {
            setUserInput('');
            nextChar();
        }
    }

    return (
        <label>
            Type:
            <input type="text" value={userInput} onChange={handleOnChange} />
        </label>
    );
}

export default InputBox;
