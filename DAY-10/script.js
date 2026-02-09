// function handleClick(){
//     document.getElementById("btn").textContent="Clicked"
    

//  }

// function MyClick(){
//     document.getElementById("head").style.color="tomato"
//     document.getElementById("head").textContent="Your heading"
// }
// function handleClick(){
//      const spanEle = document.createElement("span").textContent="this is my flower";
//     const image = document.createElement("img");

//     image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigcDJE5Oq3fHpCn5ZGKqbuPSCNPuYb8TjeS-cV-CTH9wX-h88z58BD3aZ49akxjQlW9V9N64v-RKhiYGGvoqnF1ZJsQ1tU7CnpiW5bg&s=10");
//     image.setAttribute("alt","Sunflower");

// const gallery =document.getElementById("gallery");
// gallery.append(image);
// gallery.append(spanEle); 
// }

document.getElementById("btn").addEventListener("click",()=>{
    const spanEle = document.createElement("span").textContent="this is my flower";
    const image = document.createElement("img");

    image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigcDJE5Oq3fHpCn5ZGKqbuPSCNPuYb8TjeS-cV-CTH9wX-h88z58BD3aZ49akxjQlW9V9N64v-RKhiYGGvoqnF1ZJsQ1tU7CnpiW5bg&s=10");
    image.setAttribute("alt","Sunflower");

const gallery =document.getElementById("gallery");
gallery.append(image);
gallery.append(spanEle); 
})