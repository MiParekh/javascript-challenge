// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

console.log("tbody var test")

//create function to build table from dataset

function dataTable(dataset) {
    tbody.text(" ");
    dataset.forEach(function (ufoSighting) {
        tableRow = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function ([key, value]) {
            tableDetail = tableRow.append("td").text(value);
        })
    })
}

//Pull data.js file into table function

dataTable(tableData)

//Check console log for table

console.log(tableData)
//Submit Button

var dateFilter = d3.select("#datetime");
var cityFilter = d3.select("#city");
var stateFilter = d3.select("#state");
var countryFilter = d3.select("#country");
var shapeFilter = d3.select("#shape");

console.log(dateFilter.property("value"));
console.log(cityFilter.property("value"));
console.log(stateFilter.property("value"));
console.log(countryFilter.property("value"));
console.log(shapeFilter.property("value"));

var filterTable = d3.select("#filter-btn");

filterTable.on("click", function () {
    console.log("Filter Button Clicked")

    //Prevent page from refreshing

    d3.event.preventDefault();

    //Return a filtered table

    var refinedTable = tableData.filter(ufoSighting => {
        return (ufoSighting.datetime === dateFilter.property("value") || !dateFilter.property("value")) &&
            (ufoSighting.city === cityFilter.property("value") || !cityFilter.property("value")) &&
            (ufoSighting.state === stateFilter.property("value") || !stateFilter.property("value")) &&
            (ufoSighting.country === countryFilter.property("value") || !countryFilter.property("value")) &&
            (ufoSighting.shape === shapeFilter.property("value") || !shapeFilter.property("value"))
    });

    dataTable(refinedTable)

});

//Choose all filter boxes

var allInputs = d3.selectAll('.form-control');

//Clear filters and return to default table

function resetFilters() {
    refinedTable = tableData;
    dataTable(tableData);
}

