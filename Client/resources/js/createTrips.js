id = window.location.href;
id = id.split('?')[1]
console.log(id);

document.getElementById('refreshButton').addEventListener('click',()=>{
    window.location.href="myTrips.html?"+id+"";
});

document.getElementById('findTripsButton').addEventListener('click',()=>{
    window.location.href="findTrips.html?"+id+"";
});

document.getElementById('checkWeatherButton').addEventListener('click',checkWeather);
document.getElementById('confirmTripCreate').addEventListener('click',postTrip);






function postTrip(){
    destination = document.getElementById('destination').value
    date = document.getElementById("date").value
    weather = document.getElementById("weatherDesc").innerText
    id2 = id;
    date = date.replace(/-/g,"");
    if(destination != null && date != null && !weather.includes("Error")){
        console.log(destination,date,weather,id);
        let tripString= 
        {
            "location":destination,
            "date":date,
            "weather":weather,
            "interested":id2,
            "userIdOwner":id
        }
        console.log(tripString);
        postTripJson(tripString).then(result => {
        });
        
        window.location.href="myTrips.html?"+id+"";
        


    }
    else{

        //pass as invalid input
    }


}


async function postTripJson(tripString) {
    const response = await fetch(endpoint + "/Page/postTrip",  {
        method: "POST",
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Origin':myIp,
          },
        credentials: "omit",
        body: JSON.stringify(tripString),
    })
  console.log(`Response status: ${response.status}`);
   return response; 
}








function checkWeather(){
    destination = document.getElementById('destination').value
    date = document.getElementById("date").value
    date = date.replace(/-/g,"");
    date = parseInt(date);
    let WeathString=
        {
            "destination": destination,
            "date": date
        }
        //console.log(WeathString.destination) //gets destination

    sendJson(WeathString).then(result => {
        console.log(result);
        weatherImg = document.getElementById('weatherImg');
        weatherDesc = document.getElementById('weatherDesc');
        if(result.requestWorked == true ){
            if(result.dateInRange== true ){
                //date in next 7 days
                weatherDesc = document.getElementById('weatherDesc');
                console.log(result.weather);
                if(result.weather.includes("cloudy")){
                    weatherImg.src = "resources/images/cloudy.svg"
                    weatherDesc.innerText = "Cloudy"
                }
                else if(result.weather.includes("lightrain")){
                    weatherImg.src = "resources/images/lightrain.svg"
                    weatherDesc.innerText = "Light Rain"
                }
                else if(result.weather.includes("rain")||result.weather.includes("shower") ){
                    weatherImg.src = "resources/images/rainday.svg"
                    weatherDesc.innerText = "Rain"
                }
                else if(result.weather.includes("clear")){
                    weatherImg.src = "resources/images/clearday.svg"
                    weatherDesc.innerText = "Clear Skies"
                }
                else if(result.weather.includes("cloud")){
                    weatherImg.src = "resources/images/cloudy.svg"
                    weatherDesc.innerText = "Cloudy"
                }
                else if(result.weather.includes("snow")){
                    weatherImg.src = "resources/images/snowy.svg"
                    weatherDesc.innerText = "Snow"
                }
                else if(result.weather.includes("thunder")){
                    weatherImg.src = "resources/images/thunder.svg"
                    weatherDesc.innerText = "Thunder"
                }
                else{
                    weatherImg.src = "resources/images/unknown-error.svg"
                    weatherDesc.innerText = "No Image - "+result.weather;
                }
            }//end of if
            else{
                weatherImg.src = "resources/images/unknown-error.svg"
                weatherDesc.innerText="The trip > 7 Days away"
                //request passed but date out of range
            }
        }//end of if
        else{
            weatherImg.src = "resources/images/unknown-error.svg"
            weatherDesc.innerText="Error occured looking up the weather"
            // an error occured
        }
    })

}

async function sendJson(getWeathString) {
    const response = await fetch(endpoint + "/Page/checkWeather",  {
        method: "POST",
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Origin':myIp,
          },
        credentials: "omit",
        body: JSON.stringify(getWeathString),
    })
  console.log(`Response status: ${response.status}`);
   return response.json(); 
}