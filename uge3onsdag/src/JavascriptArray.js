// opg A
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//opg B
var all = boys.concat(girls);
console.log(all);
//opg c
console.log(all.join());
console.log(all.join("-"));
//opg D
all.push("Lone","Gitte");
console.log(all);
//opg E
all.unshift("Hans","Kurt");
console.log(all);
//opg F
all.shift();
console.log(all);
//opg g
all.pop();
console.log(all);

//opg H
all.splice(3,2);
console.log(all);

//opg i
all.reverse();
console.log(all);

//opg j
all.sort();
console.log(all);

// opg k

//opg l
var allUpperCase = all.map(name=>name.toUpperCase());
console.log(allUpperCase);

//opg m
console.log(all.filter(name=>name.startsWith("l")).concat(all.filter(name=>name.startsWith("L"))));
