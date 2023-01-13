id  = window.location.href;
id = id.split('?')[1]
console.log(id);


document.getElementById('refreshButton').addEventListener('click',()=>{
    window.location.href="myTrips.html?"+id+"";
});

document.getElementById('createTripsButton').addEventListener('click',()=>{
    window.location.href="createTrips.html?"+id+"";
});

document.getElementById('findTripsButton').addEventListener('click',()=>{
    window.location.href="findTrips.html?"+id+"";
});


document.getElementById('confirmInterestButton').addEventListener('click',()=>{
    sendInterests();
    //window.location.href="myTrips.html?"+id+"";
});


function sendInterests(){
    tripId ="";
    checked = false;
    for (const child of tripTickDiv.children) {
        count = count +1;
        if(child.checked == true){
            checked = true;
            for(const child2 of tripIdDiv.children){
                if(child.id == child2.id){
                    tripId = tripId+ child2.innerHTML + ","; 
                }
            }
        }
    }
    if(checked == true){
        console.log(tripId,)
        let interestString= 
        {
            "trip_id": tripId,
            "interested":id,
        }
        postInterests(interestString).then(result => {
            //window.location.href="myTrips.html?"+id+"";
        })
    }
    

}

async function postInterests(interestString) {
    const response = await fetch(endpoint + "/Page/postInterests",  {
        method: "PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Origin':myIp,
            },
        credentials: "omit",
        body: JSON.stringify(interestString),
    })
    console.log(`Response status: ${response.status}`);
    return response;
}
























async function getOtherTripData() {
    const dataToSend = { "id" : id };
    // js promise waits till response from server
    const response = await fetch(endpoint + "/Page/notMyTrips",  {
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

//async call on page load
 getOtherTripData().then(result => {
    if(result[1]=="No Trips"){
        const noPara = document.createElement('p');
        const noNode = document.createTextNode("No Trips Found");
        noPara.appendChild(noNode);
        const noDiv = document.getElementById("tripIdDiv");
        noDiv.appendChild(noPara);  
    }
    else{
        try{
            count = 0;
                for(let x = 0; x < 19; x++){
                    resultString = result[x];
                    id = resultString[Object.keys(resultString)[0]];
                    loc = resultString[Object.keys(resultString)[1]];
                    date = resultString[Object.keys(resultString)[2]];
                    weat = resultString[Object.keys(resultString)[3]];
                    interest = resultString[Object.keys(resultString)[4]];
                    

                    const box = document.createElement("INPUT");
                    box.setAttribute("type","checkbox");
                    box.setAttribute("id",x+1);
                    const boxDiv = document.getElementById("tripTickDiv");
                    boxDiv.appendChild(box);

                    //id
                    const idPara = document.createElement('p');
                    const idNode = document.createTextNode(id);
                    idPara.setAttribute("id",x+1);
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
                    count = count +1;
                }
            
        }
        catch{
            console.trace();
        }
    }
});