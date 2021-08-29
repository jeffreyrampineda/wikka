import { HIRAGANA_ROMAJI } from '../helpers/characterMappings';

/**
 * Attempt to translate (input) into romaji character(s).
 * @param {string} input 
 * @returns translated chararacter(s) | undefined
 */
export function translate(input) {
    // Hiragana characters can be digraphs: "きゃ" -> "kya"
    if (input.length <= 2) {
        const translatedChar = HIRAGANA_ROMAJI[input];

        return translatedChar;
    }
    return undefined;
}

/**
 * Generate an array of obj that contains each character and
 * its corresponding translation of the given sentence.
 * @param {string} sentence 
 * @returns Array<{character, translation}>
 */
export function generateTranslation(sentence) {
    return sentence.split('').map((char) => {
        return {
            character: char,
            translation: translate(char),
        }
    });
}
