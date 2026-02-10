const textInput=document.getElementById("myInput");
textInput.addEventListener("change",(event)=>{
    event.preventDefault()
    console.log(event.target.id)
    console.log(event.target)
    
// HERE EVENT IS TARGETTING THE ENTIRE ELEMENT OBJECT NODE AND 
// event.target IS TARGETTING IN PARTICULAR ELEMENT.

})
const form=document.getElementById("formInput");
const textInp=document.getElementById("myInput");
const courseInput=document.getElementById("courseInput");
const output=document.getElementById("output");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const name=textInp.value
    const course=courseInput.value
    console.log(name)
    output.innerText=name+" "+ course
    
}
)
