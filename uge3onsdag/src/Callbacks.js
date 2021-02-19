//opg 1
var names =["Lars","Jan","Peter","Bo","Frederik"];
var shortNames = names.filter(name=>name.length<=3);
console.log(shortNames);
names.forEach(name=>console.log(name));
shortNames.forEach(name=>console.log(name));

//opg 2
namesUppercase=names.map(name=>name.toUpperCase());
console.log(namesUppercase);

//opg3
var html ="<ul><li>".concat(names.join("</li><li>"),"</li><ul>");
console.log(html);

//opg4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
//opg a
var cars1999 = cars.filter(car=>car.year>1999);
console.log(cars1999);

var volvos = cars.filter(car=>car.make==="Volvo");
console.log(volvos);

var cheap = cars.filter(car=>car.price<5000);
console.log(cheap);