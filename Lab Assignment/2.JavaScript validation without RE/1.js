//Write a JavaScript function to validate whether a given value type is boolean or not

function is_boolean(value)
        {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
       }

console.log(is_boolean(true));

console.log(is_boolean('bar'));