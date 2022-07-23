const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", weatherChange);

function weatherChange() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent = "The weather looks great today";
  } else if (choice === "rainy") {
    para.textContent = "Its raining i should carry an umbrella";
  } else if (choice === "snowing") {
    para.textContent = "I should stay in the house it is snowing outside.";
  } else if (choice === "overcast") {
    para.textContent =
      "Looks like it will rain. I think I should carry an umbrella just incase.";
  } else {
    para.textContent = "";
  }
}
