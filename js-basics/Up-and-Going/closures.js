//closure ia a way to remember and continue to access a function's scope even once the function is finished running
function makeAdder(x){
    //parameter 'x' is an inner variable

    //inner function `add()` uses `x`,so
    //it has a "closure" over it
    function add(y) {
        return y+x;
    };

    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(3));