import React, { useState, useEffect } from 'react';
import { HIRAGANA_ROMAJI } from '../helpers/characterMappings';

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
     * Attempt to translate (input) into a romaji character.
     * @param {string} input 
     * @returns translatedChar | undefined
     */
    const translate = (input) => {
        // Hiragana characters can be digraphs: "きゃ" -> "kya"
        if (input.length <= 2) {
            const translatedChar = HIRAGANA_ROMAJI[input];

            return translatedChar;
        }
        return undefined;
    }

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
