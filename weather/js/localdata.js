"use strict"


let pageNav = document.getElementById('nav1');
let pageNav2 = document.getElementById('nav2');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');

pageNav.addEventListener('click', function(evt){

  // Get the city name
  let cityName = evt.target.innerHTML;
  switch (cityName) {
    case "Franklin":
      case "Greenville":
        case "Springfield":
          evt.preventDefault();
      break;
  }

  let date = new Date();
  let nextHour = date.getHours() + 1;

  let weatherURL = "https://jose-aquino.github.io/weather/weather.json";
  // fetchData(weatherURL);

  // function fetchData(weatherURL){
  //   let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
    .then(function(response) {
        if(response.ok){
            return response.json();
            }
            throw new ERROR('Network response was not OK.');
        })
    .then(function(data){
        // Check the data object that was retrieved
        console.log(data);
        // data is the full JavaScript object, but we only want the greenville part
        // shorten the variable and focus only on the data we want to reduce typing
        
        let g = data[cityName];

        // ************ Get the content ******************************

        // Get the location data
        let locName = g.City;
        let locState = g.State;
        // Put them together
        let fullName = locName+', '+locState;
        // See if it worked
        console.log('fullName is: '+fullName);

        // Get the temperature data
        let temp = g.Temp;
        // Get the high data
        let high = g.High;
        // Get the low data
        let low = g.Low;
        // Get the low and high data
        let lowHigh = high + "&#176;F " + low + "&#176;F";
        // get the feellike data
        let precip = g.Precip;
        // Get the wind data 
        let wind = g.Wind;
        // Get the direction data
        let direct = g.Direction;
        // Get the gusts
        let gusts = g.Gusts;
        // Get the current conditions
        let currentCondition = g.Summary;
        // Get the elevation
        let elevation = g.Elevation;
        // Get the longitud
        let longitude = g.Longitude;
        // Get the latitude
        let latitude = g.Latitude;
        // Put them together to get the Location
        let location = longitude + "&#176; N" + ", " + latitude + "&#176; W";
        // Get the zip
        let zip = g.Zip;
        // Get the hourly data 
        let tempHours = g.Hourly;
        
        
        

        // ************ Display the content ******************************
        // Set the title with the location name at the first
        // Gets the title element so it can be worked with
        let pageTitle = document.getElementById('page-title');
        if (pageTitle.childNodes.length > 1) {
          pageTitle.childNodes[0].remove();
        }
        // Create a text node containing the full name 
        let fullNameNode = document.createTextNode(fullName);
        // inserts the fullName value before any other content that might exist
        pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
        // When this is done the title should look something like this:
        // Greenville, SC | The Weather Site

        // Set the Location information
        // Get the h1 to display the city location
        let locname = document.getElementById('locName');
        locname.innerHTML = fullName;
        // The h1 in main h1 should now say "Greenville, SC"

        // Set the zip information
        document.getElementById('Zip').innerHTML = zip;
        // Set the elevation information
        document.getElementById('elevation').innerHTML = elevation;
        // Set the location information
        document.getElementById('location').innerHTML = location;
        // Set the temperature information
        document.getElementById('temp').innerHTML = temp; 
        // // // Set the high Temp information
        document.getElementById('high').innerHTML = high;
        // // // Set the low temp information
        document.getElementById('low').innerHTML = low;
        // // Set the feels like temp information
        // document.getElementById('feelTemp').innerHTML = precip;
        // Set the wind information
        document.getElementById('wind2').innerHTML = wind;
        // Set the direction information
        document.getElementById('direction').innerHTML = direct;
        // Set the gusts information
        document.getElementById('gusts').innerHTML = gusts;
        // Set the current conditions information
        document.getElementById('wDescription').innerHTML = currentCondition;

        // Set the hourly temperature information
        document.getElementById('hours').innerHTML = buildHourlyData(nextHour,tempHours);

        // Change the status of the containers
        contentContainer.setAttribute('class', ''); // removes the hide class
        statusContainer.setAttribute('class', "hide"); // hides the status container
    
    //Calling functions
    buildWC(wind,temp);
    changeSummaryImage(getCondition(currentCondition.toLowerCase()));
    convertMeters();
    windDial(direction);
      })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}) 


/////////////////////////////
pageNav2.addEventListener('click', function(evt){

  // Get the city name
  let cityName = evt.target.innerHTML;
  switch (cityName) {
    case "Franklin":
      case "Greenville":
        case "Springfield":
          evt.preventDefault();
      break;
  }

  let date = new Date();
  let nextHour = date.getHours() + 1;

  let weatherURL = "https://jose-aquino.github.io/weather/weather.json";
  // fetchData(weatherURL);

  // function fetchData(weatherURL){
  //   let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
    .then(function(response) {
        if(response.ok){
            return response.json();
            }
            throw new ERROR('Network response was not OK.');
        })
    .then(function(data){
        // Check the data object that was retrieved
        console.log(data);
        // data is the full JavaScript object, but we only want the greenville part
        // shorten the variable and focus only on the data we want to reduce typing
        
        let g = data[cityName];

        // ************ Get the content ******************************

        // Get the location data
        let locName = g.City;
        let locState = g.State;
        // Put them together
        let fullName = locName+', '+locState;
        // See if it worked
        console.log('fullName is: '+fullName);

        // Get the temperature data
        let temp = g.Temp;
        // Get the high data
        let high = g.High;
        // Get the low data
        let low = g.Low;
        // Get the low and high data
        let lowHigh = high + "&#176;F " + low + "&#176;F";
        // get the feellike data
        let precip = g.Precip;
        // Get the wind data 
        let wind = g.Wind;
        // Get the direction data
        let direct = g.Direction;
        // Get the gusts
        let gusts = g.Gusts;
        // Get the current conditions
        let currentCondition = g.Summary;
        // Get the elevation
        let elevation = g.Elevation;
        // Get the longitud
        let longitude = g.Longitude;
        // Get the latitude
        let latitude = g.Latitude;
        // Put them together to get the Location
        let location = longitude + "&#176; N" + ", " + latitude + "&#176; W";
        // Get the zip
        let zip = g.Zip;
        // Get the hourly data 
        let tempHours = g.Hourly;
        
        

        // ************ Display the content ******************************
        // Set the title with the location name at the first
        // Gets the title element so it can be worked with
        let pageTitle = document.getElementById('page-title');
        if (pageTitle.childNodes.length > 1) {
          pageTitle.childNodes[0].remove();
        }
        // Create a text node containing the full name 
        let fullNameNode = document.createTextNode(fullName);
        // inserts the fullName value before any other content that might exist
        pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
        // When this is done the title should look something like this:
        // Greenville, SC | The Weather Site

        // Set the Location information
        // Get the h1 to display the city location
        let locname = document.getElementById('locName');
        locname.innerHTML = fullName;
        // The h1 in main h1 should now say "Greenville, SC"

        // Set the zip information
        document.getElementById('Zip').innerHTML = zip;
        // Set the elevation information
        document.getElementById('elevation').innerHTML = elevation;
        // Set the location information
        document.getElementById('location').innerHTML = location;
        // Set the temperature information
        document.getElementById('temp').innerHTML = temp; 
        // // // Set the high Temp information
        document.getElementById('high').innerHTML = high;
        // // // Set the low temp information
        document.getElementById('low').innerHTML = low;
        // // Set the feels like temp information
        // document.getElementById('feelTemp').innerHTML = precip;
        // Set the wind information
        document.getElementById('wind2').innerHTML = wind;
        // Set the direction information
        document.getElementById('direction').innerHTML = direct;
        // Set the gusts information
        document.getElementById('gusts').innerHTML = gusts;
        // Set the current conditions information
        document.getElementById('wDescription').innerHTML = currentCondition;

        // Set the hourly temperature information
        document.getElementById('hours').innerHTML = buildHourlyData(nextHour,tempHours);

        // Change the status of the containers
        contentContainer.setAttribute('class', ''); // removes the hide class
        statusContainer.setAttribute('class', "hide"); // hides the status container
    
    //Calling functions
    buildWC(wind,temp);
    changeSummaryImage(getCondition(currentCondition.toLowerCase()));
    convertMeters();
    windDial(direction);
      })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}) 




//////////////////////////
// }