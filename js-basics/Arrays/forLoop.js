const fruits = ["Mangoes", "Oranges", "Apples", "Oles", "Pineapple"];

let text = "<ul>";
for (i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}

text += "</ul>";

document.getElementById("demo").innerHTML = text;
