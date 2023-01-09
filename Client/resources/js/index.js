
document.getElementById('createButton').addEventListener('click',()=>{
        window.location.href="createAccount.html";
});
document.getElementById('loginButton').addEventListener('click',()=>{
    window.location.href="login.html";
});




// async function GetTripData() {
//     const response = await fetch(
//         endpoint + "/Page/myTrips",  {
//         method: "GET",
//         headers:{
//             'Accept':'application/json', //data type client wants to receive
//             //'Content-Type': 'text/plain', //in request sent
//           },
//         credentials: "omit",
//     })
//     const result = await response.json();
//     return result;
// }


// GetTripData().then(result => { //async call on page load
//     try{
//         console.log(response);
//         reponse.json()
//     }
//     catch{
//         console.log("Not json format")
        
//     }
//     console.log(result)
//     id = result;
//     document.getElementById("userID").innerHTML = "ID: "+id;
// }); 