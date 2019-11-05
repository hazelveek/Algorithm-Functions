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
 * Second Attempt(Splicing an array can be expensive when the array gets large.)
 * @param {array} arr 
 */
function moveZeroes2(arr) {
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

/**
 * Third Attempt (Moving the non-zeroes forward) : Accepted Solution
 * @param {array} arr
 */
function moveZeroes3(arr) {
    let i = 0;
    let j = i + 1;
    let end = arr.length;
    let x,y;
    for(i,j; j < end; j++){
        x = arr[i];
        y = arr[j];
        if(x == 0 && y != 0){
          arr[i] = y;
          arr[j] = 0;
          i++;
        }
        if(x != 0){
            i++;
        }
    }
};