
async function GetUserId() {
    const response = await fetch(
        endpoint + "/Page/CreateAccount",  {
        method: "GET",
        headers:{
            'Accept':'application/json', //data type client wants to receive
            //'Content-Type': 'text/plain', //in request sent
          },
        credentials: "omit",
    })
    const result = await response.json();
    return result;
}

var id = "";
GetUserId().then(result => { //async call on page load
    try{
        console.log(response);
        reponse.json()
    }
    catch{
        console.log("Not json format")
        
    }
    console.log(result)
    id = result;
    document.getElementById("userID").innerHTML = "ID: "+id;
}); 



document.getElementById('confirmButton').addEventListener('click',()=>{
    console.log(id);
    //postUserDetails(); //fix later
    window.location.href="myTrips.html?"+id+"";
});






//fix
async function postUserDetails() {
    const dataToSend = { userId: "myvalue",password:"password"};
    // js promise waits till response from server
    const response = await fetch(endpoint + "/Page/PostId",  {
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
  console.log(response.text());
}

