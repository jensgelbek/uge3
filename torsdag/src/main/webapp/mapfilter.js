var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function makerow(car) {
    return "<tr><td>"+car.id+"</td><td>"+car.year+"</td><td>"+car.make+"</td><td>"+car.model+"</td><td>"+car.price+"</td></tr>";    
}
function maketable(thesecars) {
 let head="<tr><th>id</th><th>Year</th><th>Make</th><th>Model</th><th>Price</th></tr>";   
 let rows=thesecars.map(makerow);
 
  return head.concat(rows.join());
 }

/**
 * Comment
 */
function insertcarsintabel(cars) {
    document.getElementById("cars").innerHTML=maketable(cars);
    
};
insertcarsintabel(cars);
/**
 * Comment
 */
function filteronprice(maxprice) {
    return (cars.filter(car=>car.price<maxprice))
}
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
   let maxprice=document.getElementById("price").value;
   let cheapcars=filteronprice(maxprice);
   insertcarsintabel(cheapcars);
});
