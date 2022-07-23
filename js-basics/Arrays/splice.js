const fruits = ["Banana", "Oranges", "Apples", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo").innerHTML = fruits;
