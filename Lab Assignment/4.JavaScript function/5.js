//Write a JavaScript function to get the function name.

function ict() {
    console.log( arguments.callee.name );
}

ict();
