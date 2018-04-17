// export function Triangle(side1, side2, side3) {
//   this.side1 = side1
//   this.side2 = side2;
//   this.side3 = side3;
// }
// Triangle.prototype.checkType = function() {
//   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return "not a triangle";
//   }
// };

export function englishToPigLatin(englishWord) {
  if (isVowel(englishWord.charAt(0))) {
    return englishWord + 'ay';
  } else {
    return englishWord.slice(1) + englishWord.charAt(0) + 'ay';
  }
  function isVowel(letter) {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
  }
}
