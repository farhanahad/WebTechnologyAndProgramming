//Write a JavaScript function to validate whether a given value type is NaNor not.

function is_nan(val)
        {
        return val !== val;
       }

console.log(is_nan(NaN));

console.log(is_nan('ICT'));
