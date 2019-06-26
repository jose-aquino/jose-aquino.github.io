// Weather Site JavaScript Functions
console.log('My javascript is being read');

// Variable for Function Use

// let temp = 31;
// let speed = 5;
// let direction = document.getElementById("direction").innerHTML.toLowerCase();
// let weatherCon = document.getElementById('curWeather').className;
// let curWeather = document.getElementById('curWeather');
// let wDescription = document.getElementById('wDescription').innerHTML.toLowerCase();
// let subtitle = document.getElementById('wDescription')
// let condition = getCondition(wDescription);
// let meter = document.getElementById("elevation").innerHTML;
// let feet = meter * 3.2808;
// let date = new Date();
// let nextHour = date.getHours() + 1;
// let hourlyTemps = hours;

// buildWC (speed, temp);
// windDial(direction);
// convertMeters();
// console.log(convertMeters());
// changeSummaryImage(wDescription);
// buildHourlyData(nextHour,hourlyTemps);




//This function will calculate a wind chill temperature
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16); 
    // console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc >temp)?temp:wc;

    // Display the windchill
    // console.log(wc);
    feelTemp.innerHTML = wc;
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

 function changeSummaryImage(condition) {
    switch(condition){
        case "clear":
        case "sunny":
        curWeather.setAttribute("class", "clear");
        break;
        case "rainy":
        case "wet":
        case "rain":
        case "Thunderstorms":
        curWeather.setAttribute("class", "rainy");
        break;
        case "cloud":
        case "cloudy":
        case "overcast":
        curWeather.setAttribute("class", "cloud");
        break;
        case "fog":
        case "foggy":
        curWeather.setAttribute("class", "fog");
        break;
        case "snow":
        case "snowy":
        curWeather.setAttribute("class", "snow");
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
