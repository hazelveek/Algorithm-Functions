// You are given an array consisting of integers ranging from 0 - 100
// You are required to move all the 0s in the given array to the end while maintaining the relative order of the non-zero elements.
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// You must do this in-place without making a copy of the array. 

/** 
 * First Attempt
 */
function moveZeroes(arr) {
    let zeros = {}
   	arr.forEach((n, i) => {
      if(n === 0) {
		zeros[i] = 0;
      }
    })
    Object.keys(zeros).forEach((x, i) => {
        arr.splice((x-i), 1)
      	arr.push(0)
    })
};

/**
 * Second Attempt (prefered)
 * @param {array} arr 
 */
function moveZeroes(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        if(arr[start] === 0){
            arr.splice(start, 1)
            arr.push(0)
            end--;
        }else{
            start++;
        }
    }
};