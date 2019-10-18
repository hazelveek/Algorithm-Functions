/**
 * A pangram is a sentence that contains every letter of the alphabet.
 * The function below checks if a given string `s` is a pangram or not
 *
 * Here's a problem you can solve with this
 * https://www.hackerrank.com/challenges/pangrams/problem
 * 
 * @param {String} s 
 */
function pangrams(str) {
    if(str.length < 26){
    	return false;
    }
    let alphabets = String("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('');
    let strUpper = str.toUpperCase().split('');
    let missingLetters = alphabets.filter(letter => strUpper.indexOf(letter) === -1);
    return (missingLetters.length === 0 )
}