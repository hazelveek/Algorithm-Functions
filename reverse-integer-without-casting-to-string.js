/**
 * Given a positive number, reverse the number without first casting to string
 * @param {number} n  
 */
function reverseInt(n){
    let result = n, remainder, newNumber, divisor = 10;
    while(result > 0){
      remainder = result%divisor;
      if(!newNumber){
        newNumber = remainder * 1;
      }
      else{
        newNumber = (newNumber * 10) + remainder
      }
      result = Math.floor(result/divisor)
    }
    return newNumber;
}
  
