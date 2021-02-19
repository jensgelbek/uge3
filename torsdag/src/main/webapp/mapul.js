const names =["Lars","Jan","Peter","Bo","Frederik"];
/**
 * Comment
 */
function makeUl(){return "<li>".concat(names.join("</li><li>"),"</li>");};

document.getElementById("ul").innerHTML=makeUl();
console.log(document.getElementById("ul"));
/**
 * Comment
 */
function trykket(name) {
    console.log(name);
}

/**
 * Comment
 */
function udskrivliste(parameters) {
    document.getElementById("ul").innerHTML = makeUl();

}
document.getElementById("sub").addEventListener("click", function (event) {
    event.preventDefault();
    names.push(document.getElementById("name").value);
    udskrivliste();

    trykket(document.getElementById("name").value);
});

document.getElementById("rml").addEventListener("click", function () {
    event.preventDefault();
    names.pop();
    udskrivliste();
});

document.getElementById("rmf").addEventListener("click", function () {
    event.preventDefault();
    names.shift();
    udskrivliste();
});