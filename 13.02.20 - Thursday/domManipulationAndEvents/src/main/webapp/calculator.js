
document.getElementById("buttons").onclick = click;

let n1 = "";

function click(evt) {
    if (evt.target.innerText !== '=') {
        console.log(this.id);
        n1 += evt.target.innerText;
        console.log(n1);
        document.getElementById("display").innerHTML = n1;
    } else {
        n1 = result(n1);
        document.getElementById("display").innerHTML = n1
    }
}

function result(r) {
    console.log(new Function('return ' + r)())
    return new Function('return ' + r)();
}

