// import { Triangle } from './../src/triangle.js';
//
// describe('Triangle', function() {
//   var reusableTriangle;
//
//   beforeEach(function() {
//     reusableTriangle = new Triangle(5, 5, 5);
//   });
//
//   it('to test if it is a triangle', function() {
//     reusableTriangle.checkType();
//     expect(reusableTriangle.side1).toEqual(reusableTriangle.side2);
//     console.log(reusableTriangle);
//   });
// });
import { englishToPigLatin } from './../src/triangle.js';
import { isVowel } from './../src/triangle.js';

describe('englishToPigLatin', function() {

  it('should correctly change a word into pig-latin', function() {
    var translation = englishToPigLatin("Hello");

     expect(translation).toBe("elloHay");
  });

});
