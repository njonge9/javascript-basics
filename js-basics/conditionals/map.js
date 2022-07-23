function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger"];

const upperCats = cats.map(toUpper);

console.log(upperCats[0]);
