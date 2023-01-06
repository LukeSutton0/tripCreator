

// async function sendJson() {
    
//     // Create a JSON object with some data
//     const json = { key: "value" };
//     // Send a POST request to the /json endpoint with the JSON payload
//     const response = await fetch(endpoint,  {
//       mode:'no-cors',
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(json)
//     });
  
//     // Print the response status
//     console.log(`Response status: ${response.status}`);
//   }






document.getElementById('loginButton').addEventListener('click', sendJson);


