function hifrom(id) {
document.getElementById("p").innerHTML=("Hi from "+id);
//console.log("Hi from "+id);
}

document.getElementById("outer").onclick=function(event){hifrom(event.target.id);};
/*
document.getElementById("div1").onclick=function() {hifrom("div1");};
document.getElementById("div2").onclick=function() {hifrom("div2");};

document.getElementById("div3").onclick=function() {hifrom("div3");};
document.getElementById("div4").onclick=function() {hifrom("div4");};

document.getElementById("div5").onclick=function() {hifrom("div5");};
document.getElementById("div6").onclick=function() {hifrom("div6");};

document.getElementById("div7").onclick=function() {hifrom("div7");};
document.getElementById("div8").onclick=function() {hifrom("div8");};

document.getElementById("div9").onclick=function() {hifrom("div9");};
document.getElementById("div0").onclick=function() {hifrom("div0");};
 * 
 */