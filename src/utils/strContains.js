/**
 * The function checks if the first string contains the second one
 * @param {string} string1 
 * @param {string} string2 
 * @returns 
 */
const strContains = (string1, string2) => {
  return string1.toLowerCase().includes(string2.toLowerCase());
}

export default strContains;