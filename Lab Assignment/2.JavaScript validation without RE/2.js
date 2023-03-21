//Write a JavaScript function to validate whether a given value is RegExp or not

function is_regexp(value)
        {
       return toString.call(value) === '[object RegExp]';
        }

console.log(is_regexp(/test/));

console.log(is_regexp('bar'));

console.log(is_regexp(72));
