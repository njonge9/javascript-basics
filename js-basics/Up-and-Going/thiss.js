/*If a function has a this reference inside it, 
that this reference ussually points to an object(window object)*/
function foo(){
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
}

var obj2 = {
    bar: "obj2"
};

