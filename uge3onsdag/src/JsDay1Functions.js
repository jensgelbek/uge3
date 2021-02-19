//opg 1
function add(n1, n2) {
    return n1 + n2;
}
;


var sub = function (n1, n2) {
    return n1 - n2;
};

//opg 3 er rettet til i opg 3
var cb = function (n1, n2, callback) {
    try {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } catch (e) {
        if (!(typeof callback === "function")) {
           return("fejl ikke en funktion")
        }
    }

};

//opg 2
console.log(add(1, 2));     // What will this print?   3
console.log(add);          // What will it print and what does add represent?  funktionen
console.log(add(1, 2, 3)); // What will it print   3
console.log(add(1));	  // What will it print   	undefined
console.log(cb(3, 3, add)); // What will it print    rghfh 3+3=6
console.log(cb(4, 3, sub)); // What will it print     esrgdh4+3=1
console.log(cb(3, 3, add())); // What will it print (and what was the problem)   fejl add() er ikke en funktion men værdien af den...
console.log(cb(3, "hh", add));// What will it print   grdggre3+"hh"="3hh"

//opg 4

function mul(n1,n2) {
    return n1*n2;    
}
console.log(cb(23,12,mul)); //burde give rewt 23+12=276

//opg5
console.log(cb(200,10,function (a, b) {return a / b})); //burde give rewt 200+10=20
