import React, { useState, useEffect } from 'react';
import { HIRAGANA } from '../helpers/characterMappings';

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

    /**
     * Attempt to translate (input) into a hiragana character.
     * @param {string} input 
     * @returns translatedChar | undefined
     */
    const translate = (input) => {
        if (input.length <= 3) {
            const translatedChar = HIRAGANA[input];

            return translatedChar;
        }
        return undefined;
    }

    const handleOnChange = (e) => {
        e.preventDefault();

        const value = e.target.value.trim();

        setUserInput(value);

        // Compare currentChar with translated input.
        if (currentChar && translate(value) === currentChar) {
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
