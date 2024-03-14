// Write your helper functions here!

require('cross-fetch/polyfill');



/// Update mission destination information
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Locate the missionTarget div using the document parameter
    const missionTargetDiv = document.querySelector('#missionTarget');

    // Create the HTML structure for mission destination
    const missionHtml = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} km</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} km</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}" alt="Mission Destination">
    `;

    // Set the innerHTML of the missionTarget div
    missionTargetDiv.innerHTML = missionHtml;
}
 
 //This function takes a string as a parameter.
//It checks if the input is empty (blank or only contains spaces).
//If the input is empty, it displays an alert message (“All fields are required.”) and returns false.
//Otherwise, it returns true.
function validateInput(testInput) {
    if (!testInput || testInput.trim() === "") {
        alert("All fields are required.");
        return false;
    }
    return true;
}
 
 //take in a document parameter and strings 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot))
 }
 
//This asynchronous function fetches data (presumably planet data) from an API endpoint or URL.
//You’ll need to replace the comment (/* API endpoint or URL */) with the actual endpoint or URL.
//Handle the response appropriately (e.g., parsing JSON data).
//Return the fetched data.
 // Asynchronous function to fetch planet data
async function myFetch() {
    try {
        const response = await fetch(/* API endpoint or URL */);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Error fetching data from the API.");
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}
// async function myFetch() {
//     try {
//         const response = await fetch('https://api.example.com/planets'); // Replace with the actual URL
//         if (!response.ok) {
//             throw new Error('Failed to fetch planetary data');
//         }
//         const planets = await response.json();
//         return planets;
//     } catch (error) {
//         console.error('Error fetching planetary data:', error.message);
//         return null;
//     }
// }

/// Pick a random planet from the list
function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;





