//Write a JavaScript program to compute the sum of all digits that occur in a given string.

function sum_digits_from_string(str) {
    let sum = 0;
  
    for (let i = 0; i < str.length; i++)
    {
  
      if (/[0-9]/.test(str[i])) 
      sum += parseInt(str[i])
    }
    return sum;
  }
  
  console.log(sum_digits_from_string("ab2cd12efg9"))
  console.log(sum_digits_from_string("5ict222"))
  