//Write a JavaScript program to check whether a string starts with &#39;Java&#39; and false otherwise.

function string_check(str)
{
  if (str.length < 4)
  {
    return false;
  }
  front = str.substring(0, 4);
  if (front == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
  }
}

console.log(string_check("JavaScript"));
console.log(string_check("Java"));
console.log(string_check("java"));
console.log(string_check("Python"));
