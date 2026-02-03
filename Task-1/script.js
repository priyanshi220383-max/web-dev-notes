const section = document.getElementById("profile");
console.log(profile);
section.style.background="beige";
section.style.padding="15px";
section.style.textAlign="center";
const task2 = document.getElementsByClassName("quote");
console.log(task2);

for(let i=0;i<task2.length;i++){
    task2[i].style.backgroundColor="beige";
    task2[i].style.fontSize="40px";
    task2[i].style.textAlign="center";
}
console.log(task2.length)
const content=document.getElementById("content");
const task3= content.querySelectorAll("p");
for(let i=0;i<task3.length;i++){
    task3[i].style.backgroundColor="purple";
    task3[i].style.color="white";
}


