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
            let translatedChar = HIRAGANA[input[0]];

            // Checks for 'single N'.
            if (input[0] === 'n' && /^n$/.test(input)) {
                translatedChar = HIRAGANA['single_n'];
            }

            // If input is not a vowel.
            if (typeof translatedChar === 'object') {
                translatedChar = translatedChar[input.substring(1)];
            }
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
