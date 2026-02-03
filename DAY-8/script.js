const heading = document.getElementById("myHeading");
console.log(heading);

heading.style.color="purple";
heading.style.backgroundColor="beige";
heading.style.width="200px";

const para = document.getElementsByClassName("para");
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].style.backgroundColor="beige";
    para[i].style.width="350px";
}
// queryselector it helps in specifying which to describe or change
const qs =document.querySelector("#content p")
console.log(qs);
qs.textContent="lorem djkabn. j d.eqjo. e j"