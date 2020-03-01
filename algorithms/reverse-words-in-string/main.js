// Using additional variables
function reverseWordsInString(string) {
  let words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }

  function reverseWord(word) {
    const n = word.length;
    let i = 0;
    while (i < n) {
      const lastChar = word.charAt(word.length-1);
      word = word.slice(0, i) + lastChar + word.slice(i, n-1);
      i++;
    }
    return word;
  }

  return words.join(' ');
}


// INLINE
function reverseWordsInStringInline(string) {
  // Start walking the string from index 0
  // Any more characters left?
    // YES - 
    // Is the next character a space?
      // NO  - 
        // keep track of the index in (startIndex)
        // push the character to the beginning of (temp) string
      // YES -  
        // hold the index in (endIndex)
        // Remove characters from startIndex to endIndex from string
        // prepend temp string to string at startIndex
        // Clear (temp) to an empty string
    
    // NO - Return string

  let startIndex = 0;
  let endIndex = 0;
  let tempString = '';
  for (let i = 0; i < string.length; i++) {
    
    let thisCharacter = string.charAt(i);
    if (thisCharacter !== ' ' && i !== string.length-1) {
      tempString = thisCharacter + tempString;
    } else {
      let extraSpace = ' ';
      if (i === string.length-1) {
        tempString = thisCharacter + tempString;
        extraSpace = '';
      }
      endIndex = i;
      string = string.slice(0, startIndex) + tempString + extraSpace + string.substr(endIndex + 1);
      startIndex = i+1;
      tempString = '';
    }
  }
  return string;
}

let input = 'Hello my name is Sina';
console.log(reverseWordsInString(input));
console.log(reverseWordsInStringInline(input));













