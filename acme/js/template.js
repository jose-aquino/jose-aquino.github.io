let acme = "https://Erambal.github.io/finalproject/acme/js/acme.json";

function nav(){
    let nav = "<li>Home</li>";
   
    fetch(acme)
      .then(function(response) {
        if(response.ok){
          return response.json();
        }
        throw new Error("Network response was no bueno.");
      })
      .then(function(data){
        console.log(data);
   //Create array with all of the different keys
   let product = Object.keys(data);
       console.log(product);
   
       for (let i = 0, x = product.length; i < x; i++){
         nav += "<li><a href ='" + product[i].toLowerCase() + ".html'>"+ product[i] + "</a></li>";
       }
       document.getElementById("links").innerHTML = nav;
   
      })
      .catch(function(error){
        console.log("There was a fetching problem: ", error.message);
      })
   }
   nav();
   
   