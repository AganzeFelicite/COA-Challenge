function stringTransform(str) {
  // first let me get the lenght of the string
  let len = str.length;
  if (len % 15 === 0) {
    /*f the length of the string is divisible by 15
     *  then reverse the string and then get the ascii value of each character
     * return it as a string
     * */
    const reversedStr = str.split("").reverse().join("");
    const asciiValuesStr = reversedStr
      .split("")
      .map((char) => char.charCodeAt(0))
      .join("");
    return asciiValuesStr;
  }
  if (len % 5 === 0) {
    /* If the length of the string is divisible by 5,
     * replace each character with its ASCII code.
     **/
    const asciiValuesStr = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join("");
    return asciiValuesStr;
  }
  if (len % 3 === 0) {
    /* If the length of the string is divisible by 3,
     * reverse the string.
     **/
    const reversedStr = str.split("").reverse().join("");
    return reversedStr;
  }
}

/// Test cases

console.log(stringTransform("Hamburger"));
console.log(stringTransform("Pizza"));
console.log(stringTransform("Chocolate Chip Cookie"));
