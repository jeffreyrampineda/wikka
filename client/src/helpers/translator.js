import { HIRAGANA_ROMAJI } from "../helpers/characterMappings";

// Used for Hiragana digraphs: "きゃ" -> "kya".
const SOKUON = { ゃ: true, ゅ: true, ょ: true };

// Used for double consonant: "っと" -> "tto".
const SOKUON_TSU = "っ";

/**
 * A sokuon is for digraphs. This function preprocesses by checking
 * for sokuon rules. Sokuon 'tsu' relies on the nextChar to
 * calculate its double consonant: "っと" -> "tto", "っく" -> "kku".
 *
 * Regular sokuon combines with the nextChar: "きゃ" -> "kya".
 *
 * @param {string} char
 * @param {string} nextChar
 * @returns result { input<string>, isSokuonTsu<bool>, isSokuonReg<bool> }
 */
function checkSokuon(char, nextChar) {
  const result = {
    isSokuonTsu: char === SOKUON_TSU,
    isSokuonReg: SOKUON[nextChar],
  };
  result.input = result.isSokuonTsu ? nextChar : char;
  return result;
}

/**
 * Attempt to translate non-romaji into romaji character(s).
 * @param {string} char
 * @param {string} nextChar
 * @returns translated chararacter(s)<string> | undefined
 */
export function translate(char, nextChar) {
  const { input, isSokuonTsu, isSokuonReg } = checkSokuon(char, nextChar);
  const translatedCharacter = HIRAGANA_ROMAJI[input];

  if (isSokuonTsu) {
    return translatedCharacter[0];
  }
  if (isSokuonReg) {
    return translatedCharacter.slice(0, -1);
  }
  // Regular character
  return translatedCharacter;
}

/**
 * Generate an array of obj that contains each character and
 * its corresponding translation of the given sentence.
 * @param {string} sentence
 * @returns Array<{character, translation}>
 */
export function generateTranslation(sentence) {
  return sentence.split("").map((char, i) => {
    return {
      character: char,
      translation: translate(char, sentence[i + 1]),
    };
  });
}
