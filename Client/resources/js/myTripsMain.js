id = window.location.href;
id = id.split('?')[1]
console.log(id);


document.getElementById('refreshButton').addEventListener('click',()=>{
    window.location.href="myTrips.html?"+id+"";
});

document.getElementById('findTripsButton').addEventListener('click',()=>{
    window.location.href="findTrips.html?"+id+"";
});

document.getElementById('createTripsButton').addEventListener('click',()=>{
    window.location.href="createTrips.html?"+id+"";
});



async function getTripData() {
    const dataToSend = { "id" : id };
    // js promise waits till response from server
    const response = await fetch(endpoint + "/Page/myTrips",  {
        method: "POST",
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Origin':myIp,
            },
        credentials: "omit",
        body: JSON.stringify(dataToSend),
    })
    console.log(`Response status: ${response.status}`);
    return response.json();
}

 getTripData().then(result => { //async call on page load
    if(result[1]=="No Trips"){
        const noPara = document.createElement('p');
        const noNode = document.createTextNode("No Trips Found");
        noPara.appendChild(noNode);
        const noDiv = document.getElementById("tripIdDiv");
        noDiv.appendChild(noPara);  
    }
    else{
        try{
            for(x in result){
                resultString = result[x];
                id = resultString[Object.keys(resultString)[0]];
                loc = resultString[Object.keys(resultString)[1]];
                date = resultString[Object.keys(resultString)[2]];
                weat = resultString[Object.keys(resultString)[3]];
                interest = resultString[Object.keys(resultString)[4]];
                
                //id
                const idPara = document.createElement('p');
                const idNode = document.createTextNode(id);
                idPara.appendChild(idNode);
                const idDiv = document.getElementById("tripIdDiv");
                idDiv.appendChild(idPara);  
    

                const locPara = document.createElement('p');
                const locNode = document.createTextNode(loc)
                locPara.appendChild(locNode);
                const locDiv = document.getElementById("tripLocDiv");
                locDiv.appendChild(locPara); 

                const datePara = document.createElement('p');
                const dateNode = document.createTextNode(date)
                datePara.appendChild(dateNode);
                const dateDiv = document.getElementById("tripDateDiv");
                dateDiv.appendChild(datePara); 

                const weatPara = document.createElement('p');
                const weatNode = document.createTextNode(weat)
                weatPara.appendChild(weatNode);
                const weatDiv = document.getElementById("tripWeatDiv");
                weatDiv.appendChild(weatPara);  

                const interestPara = document.createElement('p');
                const interestNode = document.createTextNode(interest);
                if(interest == null){
                    interestNode2 = document.createTextNode("No Users Error");
                    interestPara.appendChild(interestNode2);
                }
                else{
                    interestPara.appendChild(interestNode);
                    
                }
                const interestDiv = document.getElementById("tripInterestDiv");
                interestDiv.appendChild(interestPara);  
            
            }
        }
        catch{
            console.log("o");
            console.trace();
        }
}





    
}); 





//graveyard
/*
// console.log("ID "+tripIdArr );
    // console.log("location "+tripLocationArr);
    // console.log("Date" + tripDateArr);
    // console.log("Weatherr:" + tripWeatherArr);





// console.log(tripLocationArr);
        // for(x in tripIdArr){
        //         const newPara = document.createElement('p');
        //         const node = document.createTextNode(tripIdArr[x])
        //         newPara.appendChild(node);
        //         const element = document.getElementById("tripId");
        //         const child = document.getElementById("p2");
        //         element.appendChild(newPara,child);  
        // }
        // for(x in tripLocationArr){
        //     const newPara = document.createElement('p');
        //     const node = document.createTextNode(tripLocationArr[x])
        //     newPara.appendChild(node);
        //     const element = document.getElementById("tripLocation");
        //     const child = document.getElementById("p2");
        //     element.appendChild(newPara,child);  
        // }
        // for(x in tripDateArr){
        //     const newPara = document.createElement('p');
        //     const node = document.createTextNode(tripDateArr[x])
        //     newPara.appendChild(node);
        //     const element = document.getElementById("tripDate");
        //     const child = document.getElementById("p2");
        //     element.appendChild(newPara,child);  
        // }
        // for(x in tripWeatherArr){
        //     const newPara = document.createElement('p');
        //     const node = document.createTextNode(tripWeatherArr[x])
        //     newPara.appendChild(node);
        //     const element = document.getElementById("tripWeather");
        //     const child = document.getElementById("p2");
        //     element.appendChild(newPara,child);  
        // }
        // for(x in tripInterestedArr){
        //     const newPara = document.createElement('p');
        //     const node = document.createTextNode(tripIntserestedArr[x])
        //     newPara.appendChild(node);
        //     const element = document.getElementById("tripInterested");
        //     const child = document.getElementById("p2");
        //     element.appendChild(newPara,child);  
        // }


/div
            // const newDiv = document.createElement('div');
            // newDiv.className = "tripEntry";
            // const currentDiv = document.getElementById("tripBoxEntries");
            // currentDiv.appendChild(newDiv); 

            //for all the next elements
            // const element = document.getElementsByClassName("tripEntry");
            // div = element[element.length-1];


                // tripIdArr.push(resultString[Object.keys(resultString)[0]]);
            // tripLocationArr.push(resultString[Object.keys(resultString)[1]]);
            // tripDateArr.push(resultString[Object.keys(resultString)[2]]);
            // tripWeatherArr.push(resultString[Object.keys(resultString)[3]]);
            // tripInterestedArr.push(resultString[Object.keys(resultString)[4]]);


const tripIdArr = [];
// const tripLocationArr = [];
// const tripDateArr = [];
// const tripWeatherArr = [];
// const tripInterestedArr =[];
// const resultTest = [];



        */