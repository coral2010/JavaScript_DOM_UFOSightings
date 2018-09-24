// from data.js
var UFOSightings = data;

// select tbody
var tbody = d3.select("tbody");

// iterate each row in data to append key and value
data.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

console.log("All UFO Sightings")
console.log(data)

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log("User Input");  
    console.log(inputValue);

    // filter data based on input element
    var filteredData = UFOSightings.filter(UFOSighting => UFOSighting.datetime === inputValue);

    console.log("Filtered UFO Sightings"); 
    console.log(filteredData);

    // empty tbody and append filtered data
    d3.select("tbody").selectAll('*').remove();

    filteredData.forEach((UFOSighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
});