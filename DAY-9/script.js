//create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent=" this is dynamicaly created";
console.log(newParagraph);
// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);
// to remove an element
const rev = document.querySelector("#container p");
rev.remove();
//document.querySelector("#container p").remove();      short way
const image = document.createElement("img");

image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigcDJE5Oq3fHpCn5ZGKqbuPSCNPuYb8TjeS-cV-CTH9wX-h88z58BD3aZ49akxjQlW9V9N64v-RKhiYGGvoqnF1ZJsQ1tU7CnpiW5bg&s=10");
image.setAttribute("alt","Sunflower");

const gallery =document.getElementById("gallery");
gallery.appendChild(image);


