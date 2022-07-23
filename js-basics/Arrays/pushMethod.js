const fruits = ["Banana", "Orange", "Green", "Yellow", "Blue"];

document.getElementById("demo1").innerHTML += fruits.length;

fruits.push("Lemon");

document.getElementById("demo2").innerHTML += fruits.length;
