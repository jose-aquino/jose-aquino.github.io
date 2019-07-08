// Weather Site JavaScript Functions
console.log('My javascript is being read');

var idHeader = {
    headers: {
        "User-Agent" : "Student Learning Project - aqu17004@byui.edu"
    }
};


let storage = window.localStorage;
// Variable for Function Use
 let fullName = storage.getItem('locName')+', '+ storage.getItem('locState');

// let temp = 31;
// let speed = 5;
// let direction = document.getElementById("direction").innerHTML.toLowerCase();
// let weatherCon = document.getElementById('curWeather').className;
// let curWeather = document.getElementById('curWeather');
// let wDescription = document.getElementById('wDescription').innerHTML.toLowerCase();
// let subtitle = document.getElementById('wDescription')
// let meter = document.getElementById("elevation").innerHTML;
// let feet = meter * 3.2808;
let date = new Date();
let nextHour = date.getHours() + 1;
let pageTitle = document.getElementById('page-title');
        if (pageTitle.childNodes.length > 1) {
          pageTitle.childNodes[0].remove();
        }
let fullNameNode = document.createTextNode(fullName);

  pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);

// let hourlyTemps = hours;

// buildWC (speed, temp);
// windDial(direction);
// convertMeters();
// console.log(convertMeters());
// changeSummaryImage(wDescription);
// buildHourlyData(nextHour,hourlyTemps);





//This function will calculate a wind chill temperature
function buildWC(windSpeed, temp) {
    // let feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16); 
    // console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc >temp)?temp:wc;
    console.log('WindChill: ' + wc);

    return wc;
    // Display the windchill
    
    
    // feelTemp.innerHTML = wc;
}


// Wind Dial Function
function windDial(direction){
    // Get the wind dial container
    let dial = document.getElementById("dial");
        // Determine the dial class
      switch (direction){
        case "north":
        case "n":
        dial.setAttribute("class", "n"); //"n" is the CSS rule selector
        break;
        case "ne":
        case "nne":
        case "ene":
        dial.setAttribute("class", "ne");
        break;
        case "nw":
        case "nnw":
        case "wnw":
        dial.setAttribute("class", "nw");
        break;
        case "south":
        case "s":
        dial.setAttribute("class", "s");
        break;
        case "se":
        case "sse":
        case "ese":
        dial.setAttribute("class", "se");
        break;
        case "sw":
        case "ssw":
        case "wsw":
        dial.setAttribute("class", "sw");
        break;
        case "east":
        case "e":
        dial.setAttribute("class", "e");
        break;
        case "west":
        case "w":
        dial.setAttribute("class", "w");
        break;
      }
}
 

function getCondition(wDescription){
    if (wDescription.includes('rainy') || wDescription.includes("rain") || wDescription.includes('wet') || wDescription.includes('thunderstorms')){  
        return "rainy";
    }
    else if (wDescription.includes('cloudy') || wDescription.includes('cloud') || wDescription.includes('overcast')){
        return "cloud";
    }
    else if (wDescription.includes('clear') || wDescription.includes('sunny')){
        return "clear";
    }
    else if (wDescription.includes('fog') || wDescription.includes('foggy')) {
        return "fog";
    }
    else if (wDescription.includes('snow') || wDescription.includes('snowy')){
        return "snow";
    }
}

 function changeSummaryImage(condition){
    switch(condition){
        case "clear":
        case "sunny":
            curWeather.setAttribute("class", "clear");
            sImage.setAttribute("class", "clear2");
            break;
        case "rainy":
        case "wet":
        case "rain":
        case "thunderstorms":
            curWeather.setAttribute("class", "rainy");
            sImage.setAttribute("class", "rainy2");
            break;
        case "cloud":
        case "cloudy":
        case "overcast":
            curWeather.setAttribute("class", "cloud");
            sImage.setAttribute("class", "cloud2");
            break;
        case "fog":
        case "foggy":
            curWeather.setAttribute("class", "fog");
            sImage.setAttribute("class", "fog2");
            break;
        case "snow":
        case "snowy":
            curWeather.setAttribute("class", "snow");
            sImage.setAttribute("class", "snow2");
            break;
    }
 } 
 
 function convertMeters(){
    let meter = document.getElementById('elevation').innerHTML;
    let feet = meter * 3.2808;
    feet = Math.floor(feet);
    
    document.getElementById("elevation").innerHTML = feet;
}


// This function will convert and format hours to a 12 hour format.
function format_time(hour){
    if(hour > 23){ 
        hour -= 24; 
       } 
       let amPM = (hour > 11) ? "pm" : "am"; 
       if(hour > 12) { 
        hour -= 12; 
       } 
       if(hour == 0) { 
        hour = "12"; 
       } 
       return hour + amPM;
}

function buildHourlyData(nextHour,hourlyTemps) {
    // Get the next hour based on the current time
   
    // Data comes from a JavaScript object of hourly temp name - value pairs
    // Next hour should have a value between 0-23
    // The hourlyTemps variable holds an array of temperatures
    // Line 8 builds a list item showing the time for the next hour 
    // and then the first element (value in index 0) from the hourly temps array
     let hourlyListItems = format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F | ';
     // Build the remaining list items using a for loop
     for (let i = 1, x = hourlyTemps.length; i < x; i++) {
        let pipe = (i!=x-1)?"| ":"";        
        hourlyListItems += format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F ' + pipe;
     }
     
     console.log('HourlyList is: ' +hourlyListItems);
     return hourlyListItems;
    }

    // Gets location information from the NWS API
function getLocation(locale) {
    const URL = "https://api.weather.gov/points/" + locale; 
    // NWS User-Agent header (built above) will be the second parameter 
    fetch(URL, idHeader) 
    .then(function(response){
      if(response.ok){ 
       return response.json(); 
      } 
      throw new ERROR('Response not OK.');
    })
    .then(function (data) { 
      // Let's see what we got back
      console.log('Json object from getLocation function:'); 
      console.log(data);
      // Store data to localstorage 
      storage.setItem("locName", data.properties.relativeLocation.properties.city); 
      storage.setItem("locState", data.properties.relativeLocation.properties.state); 
   
      // Next, get the weather station ID before requesting current conditions 
      // URL for station list is in the data object 
      let stationsURL = data.properties.observationStations;
      let forecastHourly= data.properties.forecastHourly; 
      // Call the function to get the list of weather stations
      getStationId(stationsURL); 
      getHourly(forecastHourly);
     }) 
    .catch(error => console.log('There was a getLocation error: ', error)) 
} // end getLocation function


// get the Hourly temperature and additional information for the weather site
function getHourly(forecastHourly) {
    fetch(forecastHourly, idHeader) 
     .then(function(response){
        if(response.ok){ 
            return response.json(); 
           } 
           throw new ERROR('Response not OK.');
     })
     .then (function(data){
         // lets get the information
         console.log('From getHourly:');
         console.log(data);
         
         //Store the information
         let hourlyForcast = [];
         for (let i = 0; i < 13; i++) {
             hourlyForcast[i] = data.properties.periods[i].temperature;
         }
         storage.setItem("hourFor", buildHourlyData(nextHour, hourlyForcast));
  
          
          storage.setItem("temperature", data.properties.periods[0].temperature);
          storage.setItem("windChill", data.properties.periods[0].windSpeed);
          storage.setItem("windDirec", data.properties.periods[0].windDirection);
          storage.setItem("Summary", data.properties.periods[0].shortForecast);
          storage.setItem("MaxTemp", data.properties.periods[0].temperature);
          storage.setItem("MinTemp", data.properties.periods[1].temperature);


     })
}


// Gets weather station list and the nearest weather station ID from the NWS API
function getStationId(stationsURL) { 
    // NWS User-Agent header (built above) will be the second parameter 
    fetch(stationsURL, idHeader) 
    .then(function(response){
      if(response.ok){ 
       return response.json(); 
      } 
      throw new ERROR('Response not OK.');
    })
    .then(function (data) { 
      // Let's see what we got back
      console.log('From getStationId function:'); 
      console.log(data);
    
      // Store station ID and elevation (in meters - will need to be converted to feet) 
      let stationId = data.features[0].properties.stationIdentifier; 
      let stationElevation = data.features[0].properties.elevation.value; 
      console.log('Station and Elevation are: ' + stationId, stationElevation); 
   
      // Store data to localstorage 
      storage.setItem("stationId", stationId); 
      storage.setItem("stationElevation", stationElevation); 
   
      // Request the Current Weather for this station 
      getWeather(stationId);
     }) 
    .catch(error => console.log('There was a getStationId error: ', error)) 
   } // end getStationId function]

   // Gets current weather information for a specific weather station from the NWS API
function getWeather(stationId) { 
    // This is the URL for current observation data 
    const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
    // NWS User-Agent header (built above) will be the second parameter 
    fetch(URL, idHeader) 
    .then(function(response){
      if(response.ok){ 
       return response.json(); 
      } 
      throw new ERROR('Response not OK.');
    })
    .then(function (data) { 
      // Let's see what we got back
      console.log('From getWeather function:'); 
      console.log(data);
    
      // Store weather information to localStorage 
      storage.setItem("Elevation", data.properties.elevation.value);
      storage.setItem("Temperature", data.properties.temperature.value);
      storage.setItem("WindDir", data.properties.windDirection.value);
      storage.setItem("WindSp",data.properties.windSpeed.value);
      storage.setItem("Summary", data.properties.textDescription);
      storage.setItem("gusts", data.properties.windGust.value);
    

      // Build the page for viewing 
       buildPage();
     }) 
    .catch(error => console.log('There was a getWeather error: ', error)) 
   } // end getWeather function


function buildPage() {
    let temp = localStorage.getItem("temperature");
    let windSpeed = localStorage.getItem("windChill");
    windSpeed = windSpeed.match(/\d/g);
    windSpeed = windSpeed.join("");
    let summary = localStorage.getItem("Summary");
    let windDirec = localStorage.getItem("windDirec");
    let city = localStorage.getItem("locName");
    let state = localStorage.getItem("locState");
    let citSta = city + ", " + state;
    let latitude = localStorage.getItem("latitude");
    let longitude = localStorage.getItem("longitude");
    let elevation = localStorage.getItem("stationElevation");
    let Gusts = localStorage.getItem("gusts");
    let maxTemp = localStorage.getItem("MaxTemp");
    let minTemp = localStorage.getItem("MinTemp");

    console.log(temp);
    console.log(windSpeed);

    //Hourly temperatures
    let hourly = localStorage.getItem("hourFor");
    


    //Insert the information in the page
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('wind2').innerHTML = windSpeed + " mph" ;
    document.getElementById('wDescription').innerHTML = summary;
    document.getElementById('direction').innerHTML = windDirec ;
    document.getElementById('locName').innerHTML = citSta ;
    document.getElementById('latitude').innerHTML = latitude + "&#176;" + "N , ";
    document.getElementById('longitude').innerHTML = longitude + "&#176;" + "W";
    document.getElementById('elevation').innerHTML = elevation;
    document.getElementById("gusts").innerHTML = Gusts;
    document.getElementById('feelTemp').innerHTML = buildWC(windSpeed, temp);
    document.getElementById('high').innerHTML = maxTemp + "&#176;" + "F";
    document.getElementById('low').innerHTML = minTemp + "&#176;" + "F";
    let status = document.getElementById('status');
    let content = document.getElementById('hide');
    
    //Inserting Hourly temps
    document.getElementById("hours").innerHTML = hourly;

    let condition = getCondition(summary.toLowerCase());

    content.setAttribute('class', '');
    status.setAttribute('class','hide');

    windDial(windDirec.toLowerCase());
   
    changeSummaryImage(condition);
}

