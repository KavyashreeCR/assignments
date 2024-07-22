/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
    // Helper function to clean and sort the string
    function cleanString(str) {
      return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }
  
    return cleanString(str1) === cleanString(str2);
  }
  
  module.exports = isAnagram;
  