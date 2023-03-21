//Write a JavaScript program to find the number of elements which presents in both of the given arrays.

function find_same_element(arr1, arr2) {
    var result = 0;
    for(var i = 0; i < arr1.length; i++) {
      for(var j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j])
        {
          result++;
        }
      }
    }
    return result;
  }
  console.log(find_same_element([1,2,3,4], [1,2,3,4]));
  console.log(find_same_element([1,2,3,4], [1,2,3,5]));
  console.log(find_same_element([1,2,3,4], [11,22,33,44]));
  