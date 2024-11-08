
function countWordOccurrences(sentence: string, word: string): number {
  
  const lowerSentence = sentence.toLowerCase();
  const lowerWord = word.toLowerCase();

  const words = lowerSentence.split(" ");

  return words.filter(w => w === lowerWord).length;
}


// console.log(countWordOccurrences("I love typescript", "love")); 