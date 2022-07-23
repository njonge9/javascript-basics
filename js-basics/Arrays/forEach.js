const fruits = ["Banana", "Oranges", "Mangoes", "Apple"];

let text = "<ul>";
fruits.forEach(fruitsFunction);
text += "</ul>";

document.getElementById("demo").innerHTML = text;

function fruitsFunction(value) {
  text += "<li>" + value + "</li>";
}
