//Simple DOM manipulation and Event handling
//b
function changeColour() {
    document.getElementById("one").style.backgroundColor = "pink"
    document.getElementById("two").style.backgroundColor = "yellow"
    document.getElementById("three").style.backgroundColor = "blue"
}

//Event Bubbling and event arguments

//a
function clickHandlerDiv1() {
    console.log("Hi from div1");
}

//a
function clickHandlerDiv2() {
    console.log("Hi from div2");
}

////b
//document.getElementById("outer").onclick = clickHandlerAll;
//function clickHandlerAll(e) {
//    console.log(e.target.id)
//}

//c
document.getElementById("outer").onclick = clickHandlerAll;
function clickHandlerAll(e) {
    document.getElementById("p").innerText = "The value of this id: " + this.id + ", the value of target id: " + e.target.id; 
}
