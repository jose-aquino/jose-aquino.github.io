// functions for current location and populate a web page with the data
'use strict';



// Call the function to get our location
getGeoLocation();


// Gets longitude and latitude of current location
function getGeoLocation() {
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...'
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude.toFixed(2);
            const long = position.coords.longitude.toFixed(2);
    
            //Combine the values
            const locale = lat + "," + long;
            console.log(`Lat and Long are: ${locale}.`);

            storage.setItem("latitude", lat);
            storage.setItem("longitude", long);
            //Call getLocation function, send locale
            getLocation(locale);
        })
    } else {
        status.innerHTML = " Your browsesr doesn't support Geolocation or it is not enabled!";
    }
}
// end getGeoLocation



