// Get references to the table elements, search inputs and buttons
var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#date");
var searchButton = document.querySelector("#search");
var cityInput = document.querySelector("#city");
var cityButton = document.querySelector("#searchCity");
var searchState = document.querySelector("#selectState");
var searchCountry = document.querySelector("#selectCountry");
var searchShape = document.querySelector("#selectShape");
var clearFilters = document.querySelector("#clear");

// Add an event listener to the filters
searchButton.addEventListener("click", handleSearch, {passive: true});
cityButton.addEventListener("click", handleCity, {passive: true});
searchState.addEventListener("change", handleState, {passive: true});
searchCountry.addEventListener("change", handleCountry, {passive: true});
searchShape.addEventListener("change", handleShape, {passive: true});
clearFilters.addEventListener("click", handleClear, {passive: true});

// Set filteredDate to dateData
var filteredDate = dataSet;
var filteredCity = dataSet;

// renderTable 
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredDate.length; i++) {
    // Get get the current data
    var dates = filteredDate[i];
    var fields = Object.keys(dates);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the object, create a new cell at set its inner text to be the current value 
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = dates[field];
    }
  }
}
function renderTableCity() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredCity.length; i++) {
      // Get get the current data
      var cities = filteredCity[i];
      var fields = Object.keys(cities);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = cities[field];
      }
    }
  }
function renderTableState() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredState.length; i++) {
      // Get get the current data
      var states = filteredState[i];
      var fields = Object.keys(states);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = states[field];
      }
    }
}
function renderTableCountry() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredCountry.length; i++) {
      // Get get the current data
      var countries = filteredCountry[i];
      var fields = Object.keys(countries);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = countries[field];
      }
    }
}
function renderTableShape() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredShape.length; i++) {
      // Get get the current data
      var shapes = filteredShape[i];
      var fields = Object.keys(shapes);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = shapes[field];
      }
    }
}
// handle click function for when user searches by date
function handleSearch() {

  var filterDate = dateInput.value.trim();

  filteredDate = dataSet.filter(function(date) {
    var datePicked = date.datetime;

    // If true, add the to the filtered table
    return datePicked === filterDate;
  });
  renderTable();
}
// handle click function for when user searches by city
function handleCity() {
    if(dateInput.value === "") {
        var filterCity = cityInput.value.trim().toLowerCase();
    
        filteredCity = dataSet.filter(function(city) {
        var cityPicked = city.city;

        return cityPicked === filterCity;
    });
        renderTableCity();
    }

    else {
        var filterCity = cityInput.value.trim().toLowerCase();
        var filterDate = dateInput.value.trim();

        filteredCity = dataSet.filter(function(city) {
            var cityPicked = city.city;

            return cityPicked === filterCity;
        }),
        
        filteredDate = filteredCity.filter(function(date) {
            var datePicked = date.datetime;

            return datePicked === filterDate;
        });
            renderTable();
    }
}

//handle click function for when user searches by state
function handleState() {
    if(dateInput.value === "" && cityInput.value === "") {
        var filterState = searchState.value.trim().toLowerCase();
    
        filteredState = dataSet.filter(function(state) {
        var statePicked = state.state;

        return statePicked === filterState;
    });
        renderTableState();
    }

    else {
        var filterCity = cityInput.value.trim().toLowerCase();
        var filterDate = dateInput.value.trim();
        var filterState = searchState.value.trim().toLowerCase();

        filteredState = dataSet.filter(function(state) {
            var statePicked = state.state;
    
            return statePicked === filterState;
        })
            if(cityInput.value === "") {
                filteredDate = filteredState.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
            if(searchCountry.value !== "SELECT...") {
                filteredState = filteredCountry.filter(function(state) {
                    var statePicked = state.state;
            
                    return statePicked === filterState;
                });
            }
            if(cityInput.value === "" && searchCountry.value === "SELECT..." & searchShape.value === "SELECT...") {
                filteredDate = filteredState.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
            else {
                filteredCity = filteredState.filter(function(city) {
                    var cityPicked = city.city;
        
                    return cityPicked === filterCity;
                }),
                
                filteredDate = filteredCity.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
                    renderTable();
        }

       
    }

// handle click function for when user chooses country
function handleCountry() {
    if(dateInput.value === "" && cityInput.value === "" && searchState.value === "SELECT...") {
        var filterCountry = searchCountry.value.trim().toLowerCase();
    
        filteredCountry = dataSet.filter(function(country) {
        var countryPicked = country.country;

        return countryPicked === filterCountry;
    });
        renderTableCountry();
    }

    else {
        var filterCity = cityInput.value.trim().toLowerCase();
        var filterDate = dateInput.value.trim();
        var filterState = searchState.value.trim().toLowerCase();
        var filterCountry = searchCountry.value.trim().toLowerCase();

        filteredCountry = dataSet.filter(function(country) {
            var countryPicked = country.country;
    
            return countryPicked === filterCountry;
        })
            if(searchState.value === "SELECT...") {
                filteredCity = filteredCountry.filter(function(city) {
                    var cityPicked = city.city;
        
                    return cityPicked === filterCity;
                }),
                
                filteredDate = filteredCity.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
            if(searchState.value === "SELECT..." && cityInput.value === "") {
                filteredDate = filteredCountry.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
            if(cityInput.value === "" && dateInput.value === "") {
                filteredCountry = dataSet.filter(function(country) {
                    var countryPicked = country.country;
            
                    return countryPicked === filterCountry;
                }),
                filteredState = filteredCountry.filter(function(state) {
                    var statePicked = state.state;
            
                    return statePicked === filterState;
                });
            }
            else {
                filteredState = filteredCountry.filter(function(state) {
                    var statePicked = state.state;
            
                    return statePicked === filterState;
                }),
                filteredCity = filteredState.filter(function(city) {
                    var cityPicked = city.city;
        
                    return cityPicked === filterCity;
                }),
                
                filteredDate = filteredCity.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
                renderTable();
        }
    }

// handle click function for when user picks shape
function handleShape() {
    if(dateInput.value === "" && cityInput.value === "" && searchState.value === "SELECT..." && searchCountry.value === "SELECT...") {
        var filterShape = searchShape.value.trim().toLowerCase();
    
        filteredShape = dataSet.filter(function(shape) {
        var shapePicked = shape.shape;

        return shapePicked === filterShape;
    });
        renderTableShape();
    }

    else {
        var filterCity = cityInput.value.trim().toLowerCase();
        var filterDate = dateInput.value.trim();
        var filterState = searchState.value.trim().toLowerCase();
        var filterCountry = searchCountry.value.trim().toLowerCase();
        var filterShape = searchShape.value.trim().toLowerCase();

        filteredShape = dataSet.filter(function(shape) {
            var shapePicked = shape.shape;
    
            return shapePicked === filterShape;
        })
            if(searchCountry.value === "SELECT...") {
                filteredState = filteredShape.filter(function(state) {
                    var statePicked = state.state;
            
                    return statePicked === filterState;
                }),
                filteredCity = filteredState.filter(function(city) {
                    var cityPicked = city.city;
        
                    return cityPicked === filterCity;
                }),
                
                filteredDate = filteredCity.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
            if(searchCountry.value === "SELECT..." && searchState.value === "SELECT...") {
                filteredCity = filteredShape.filter(function(city) {
                    var cityPicked = city.city;
        
                    return cityPicked === filterCity;
                }),
                
                filteredDate = filteredCity.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
            if(searchCountry.value === "SELECT..." && searchState.value === "SELECT..." && cityInput.value === "") {
                filteredDate = filteredShape.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
            else {
                filteredCountry = filteredShape.filter(function(country) {
                    var countryPicked = country.country;
            
                    return countryPicked === filterCountry;
                }),
                filteredState = filteredCountry.filter(function(state) {
                    var statePicked = state.state;
            
                    return statePicked === filterState;
                }),
                filteredCity = filteredState.filter(function(city) {
                    var cityPicked = city.city;
        
                    return cityPicked === filterCity;
                }),
                
                filteredDate = filteredCity.filter(function(date) {
                    var datePicked = date.datetime;
        
                    return datePicked === filterDate;
                });
            }
        }
        renderTable();
    }

// handle click function for clearing the filters
function handleClear() {
    var filteredDate = dataSet;
    
    return dateInput === "";
    cityInput === "";
    searchState === "SELECT...";
    searchCountry === "SELECT...";
    searchShape === "SELECT...";
    
    renderTable();
}

// get list of states from the data
var states = [];

// loop through the data
for (var i = 0; i < filteredDate.length; i++) {
    if(filteredDate[i].state in states) {
    console.log(filteredDate[i].state)}
    else {
    states.push(filteredDate[i].state);
   
}}
// remove duplicates and sort
states = states.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
});

states.sort();

// add another object so that the dropdown doesn't start on a state
states.unshift('Select...');

// add the states to the dropdown
var selectState = document.getElementById("selectState");
for (var i = 0; i < states.length; i++) {
    var opt = states[i].toUpperCase();
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectState.appendChild(el);
}

// get list of countries from the data
var countries = [];

for (var i = 0; i < filteredDate.length; i++) {
    if(filteredDate[i].country in countries) {
    console.log(filteredDate[i].country)}
    else {
    countries.push(filteredDate[i].country);
   
}}
// remove duplicates and sort
countries = countries.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
});

countries.sort();

countries.unshift("Select...");

// add the countries to the dropdown
var selectCountry = document.getElementById("selectCountry");
for (var i = 0; i < countries.length; i++) {
    var opt = countries[i].toUpperCase();
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectCountry.appendChild(el);
}

// get list of shapes from the data
var shapes = [];

for (var i = 0; i < filteredDate.length; i++) {
    if(filteredDate[i].shape in shapes) {
    console.log(filteredDate[i].shape)}
    else {
    shapes.push(filteredDate[i].shape);
   
}}
// remove duplicates and sort
shapes = shapes.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
});

shapes.sort();

shapes.unshift("Select...");

// add the shapes to the dropdown
var selectShape = document.getElementById("selectShape");
for (var i = 0; i < shapes.length; i++) {
    var opt = shapes[i].toUpperCase();
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectShape.appendChild(el);
}
// Render the table for the first time on page load
renderTable();