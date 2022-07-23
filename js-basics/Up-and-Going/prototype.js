//consider

var foo = {
  a: 42,
};

//create 'bar' and link it to 'foo'
var bar = Object.create(foo);

bar.b = "Hello world";

console.log(bar.b);
console.log(bar.a);
