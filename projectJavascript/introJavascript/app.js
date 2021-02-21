window.onload = function() {
	getCovidStats();
    
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
        let country = data.locations[249].country;
        console.log(country);
		let population = data.locations[249].country_population;
        console.log(population);
		let update = data.locations[249].last_updated;
		let confirmedCases = data.locations[249].latest.confirmed;
		let deaths = data.locations[249].latest.deaths;

		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

        // var select = document.getElementById("select");
        // let countries = data.location.country;
        
        
        // for (var i = 0; i < countries.length; i++)
        // {
        //     var option = document.createElement("OPTION");
            
        //     option.innerHTML = countries[i].Country;
        //     option.value = i;

        //     select.options.add(option);
           
        // }
        
	})
	.catch(function() {
		console.log("error");
	})
    
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}


function getSelectValue(sel)
{
    var x = sel.options[sel.selectedIndex].value;

    // var x = document.getElementById("select").textContent.onClick;
    console.log(x);
   
   
    fetch('https://api.covid19api.com/summary')
    .then((response) => {
        return response.json()
    })

    .then((data) => {   
        
        // <td id="Country"></td>
        // <td id="TotalCon"></td>
        // <td id="TotalDe"></td>
        // <td id="TotalRec"></td>
        // <td id="NewConf"></td>
       


            // let country = data.Countries[x].Country;
             document.getElementById("Country").innerHTML = sel.options[sel.selectedIndex].innerHTML;
             document.getElementById("TotalCon").innerHTML = data.Countries[x].TotalConfirmed;
             document.getElementById("TotalDe").innerHTML = data.Countries[x].TotalDeaths;
             document.getElementById("TotalRec").innerHTML = data.Countries[x].TotalRecovered;
             document.getElementById("NewConf").innerHTML = data.Countries[x].NewConfirmed;
    })

    .catch((err) => {
        // Do something for an error here
        console.log('error')
    })


}