/**
 * This is my solution to the "Sherlock and Anagram" function in the link below" 
 * https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
 * 
 * @param {String} s
 */
function sherlockAndAnagrams(s) {
    let subAnagrams = {};
    for(let i = 0; i < s.length; i++){
        for(let j = i +1; j < s.length + 1; j++){
            let subStr = s.slice(i,j)
            let sortedSubStr = subStr.split('').sort().join('');
            subAnagrams[sortedSubStr] = (subAnagrams[sortedSubStr] || 0) + 1;
        }
    }
    let count = 0;
    for(let k in subAnagrams){
        let anagramsCount = subAnagrams[k];
        if(anagramsCount === 2) {
            count += 1;
            continue;
        }
        if(anagramsCount > 2){
            count += nCr(anagramsCount)
            continue;
        }
    }
    return count;
}

/**
 * Combination function (n!/n!(n-r)!)
 * @param {Number} n 
 * @param {Number} r 
 */
function nCr(n, r = 2){
    let nominator = factorial(n);
    let denominator = factorial(r) * factorial(n-r);
    return Number(nominator/denominator);
}
function factorial(int){
    let result = Array.from({length: int}, (v, i) => i+1).reduce((x,y) => x*y, 0);
    return result;
}
