document.getElementById("calculate").addEventListener("click",function(event){
    event.stopPropagation();
    let regnestykke=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=calculate(regnestykke);
});
document.getElementById("buttons").addEventListener("click", function (event) {
    event.preventDefault();
  let pressed=event.target.innerText;
  let display=document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML=display+pressed;
  console.log(display);
});

/**
 * Comment
 */
function calculate(regnestykke) {
    console.log("regnestykke " + regnestykke)
    let resultat = "intet";
    let gange = regnestykke.indexOf("*");
    let dividere = regnestykke.indexOf("/");
    let plus = regnestykke.indexOf("+");
    let minus = regnestykke.indexOf("-");
    if (plus > 0) {
        resultat =parseFloat(calculate(regnestykke.substring(0, plus))) + parseFloat(calculate(regnestykke.substring(plus + 1)));
    } else {
        if (minus > 0) {
            resultat = calculate(regnestykke.substring(0, minus)) - calculate(regnestykke.substring(minus + 1));

        } else {
            if (gange > 0) {
            resultat = calculate(regnestykke.substring(0, gange)) * calculate(regnestykke.substring(gange + 1));

        } else {
           if (dividere > 0) {
            resultat = calculate(regnestykke.substring(0, dividere)) / calculate(regnestykke.substring(dividere + 1));

        } else {
            resultat=regnestykke;
        }
        }

        }
    }
    return resultat;
}

