// Weather Site JavaScript Functions
console.log('My javascript is being read');

// Variable for Function Use
const temp = 31;
const speed = 5;
buildWC (speed, temp);
const direction = "NNE";
windDial(direction);
let weatherCon = document.getElementById('curWeather').className;
let curWeather = document.getElementById('curWeather');
let wDescription = document.getElementById('wDescription').innerHTML.toLowerCase();
let subtitle = document.getElementById('wDescription')
let condition = getCondition(wDescription);
let meter = document.getElementById("elevation").innerHTML;
let feet = meter * 3.2808;
convertMeters();
changeSummaryImage(wDescription);




//This function will calculate a wind chill temperature
function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16); 
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc >temp)?temp:wc;

    // Display the windchill
    console.log(wc);
    feelTemp.innerHTML = wc;
}


// Wind Dial Function
function windDial(direction){
    // Get the wind dial container
    const dial = document.getElementById("dial");
        // Determine the dial class
      switch (direction){
        case "North":
        case "N":
        dial.setAttribute("class", "n"); //"n" is the CSS rule selector
        break;
        case "NE":
        case "NNE":
        case "ENE":
        dial.setAttribute("class", "ne");
        break;
        case "NW":
        case "NNW":
        case "WNW":
        dial.setAttribute("class", "nw");
        break;
        case "South":
        case "S":
        dial.setAttribute("class", "s");
        break;
        case "SE":
        case "SSE":
        case "ESE":
        dial.setAttribute("class", "se");
        break;
        case "SW":
        case "SSW":
        case "WSW":
        dial.setAttribute("class", "sw");
        break;
        case "East":
        case "E":
        dial.setAttribute("class", "e");
        break;
        case "West":
        case "W":
        dial.setAttribute("class", "w");
        break;
      }
}
 

function getCondition(wDescription){
    if (wDescription.includes('rainy') || wDescription.includes("rain") || wDescription.includes('wet')){  
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
    
    feet = Math.floor(feet);
    document.getElementById("elevation").innerHTML = feet;
}


