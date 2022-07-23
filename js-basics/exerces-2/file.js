const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const paragraph = document.createElement("p");
const heading = document.createElement("h3");
const text = document.createElement("div");
const headingText = document.createElement("h1");
const paragraphText = document.createElement("p");

paragraph.textContent = "Hey I'm red!";
heading.textContent = "I'm a blue h3!";
text.classList.add("text");
text.style.border = "1px solid black";
text.style.color = "pink";

headingText.textContent = "I'm in a div";
paragraphText.textContent = "ME TOO!";

container.appendChild(paragraph);
container.appendChild(heading);

body.appendChild(text);
text.appendChild(headingText);
text.appendChild(paragraphText);
