import { HIRAGANA_ROMAJI } from '../helpers/characterMappings';

/**
 * Attempt to translate (input) into a romaji character.
 * @param {string} input 
 * @returns translatedChar | undefined
 */
function translate(input) {
    // Hiragana characters can be digraphs: "きゃ" -> "kya"
    if (input.length <= 2) {
        const translatedChar = HIRAGANA_ROMAJI[input];

        return translatedChar;
    }
    return undefined;
}

export default translate;
