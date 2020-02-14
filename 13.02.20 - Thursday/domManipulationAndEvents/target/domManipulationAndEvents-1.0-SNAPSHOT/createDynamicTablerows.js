//Using map and filter to create dynamic table-rows

let cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];
//a
let headers = (Object.getOwnPropertyNames(cars[0]));
console.log(headers);
formatHeaders(cars);

function formatHeaders(cars) {
    let headerString = "<tr>" +
            headers.map(function (a) {
                return "<th>" + a + "</th>"
            }).join("") +
            "</tr>";
    console.log(headerString);
    let htmlRows = "<tr>";
    cars.forEach(e => {
        let temp = Object.values(e).map(function (a) {
            return "<td>" + a + "</td>";
        }).join("") + "</tr>";
        htmlRows += temp;
    });
    console.log(htmlRows);
    document.getElementById("div1").innerHTML = "<table border='1'>" + headerString + htmlRows;
}


//b
document.getElementById("price").addEventListener("click", priceLessThan);
function priceLessThan(e) {
    e.preventDefault();
    let c = document.getElementById("priceInput").value;
    let newC = cars.filter(function(f){
        return f.price < c;
    });
formatHeaders(newC);
};
