// Write your JavaScript code here!

// script.js

window.addEventListener("load", function() {
    let listedPlanets;

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    const listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);

        // Attach an event listener to the form submit button
        const form = document.querySelector('#launchForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get input values from the form
            const pilotName = document.querySelector('#pilotName').value;
            const copilotName = document.querySelector('#copilotName').value;
            const fuelLevel = Number(document.querySelector('#fuelLevel').value);
            const cargoMass = Number(document.querySelector('#cargoMass').value);

            // Validate input
            const isValid = validateInput(pilotName, copilotName, fuelLevel, cargoMass);
            if (!isValid) {
                alert('Please fill in all fields with valid data.');
                return;
            }

            // Update pilot and co-pilot names
            document.querySelector('#pilotStatus').textContent = `Pilot: ${pilotName}`;
            document.querySelector('#copilotStatus').textContent = `Co-pilot: ${copilotName}`;

            // Check fuel level
            if (fuelLevel < 10000) {
                document.querySelector('#faultyItems').style.visibility = 'visible';
                document.querySelector('#fuelStatus').textContent = 'Not enough fuel for the journey';
                document.querySelector('#launchStatus').textContent = 'Shuttle not ready for launch';
                document.querySelector('#launchStatus').style.color = 'red';
                alert('Not enough fuel for the journey! Please refuel.');
                return;
            }

            // Check cargo mass
            if (cargoMass > 10000) {
                document.querySelector('#faultyItems').style.visibility = 'visible';
                document.querySelector('#cargoStatus').textContent = 'Too much mass for takeoff';
                document.querySelector('#launchStatus').textContent = 'Shuttle not ready for launch';
                document.querySelector('#launchStatus').style.color = 'red';
                alert('Cargo mass exceeds safe limits! Adjust the cargo.');
                return;
            }

            // If everything is okay, shuttle is ready for launch
            document.querySelector('#launchStatus').textContent = 'Shuttle is ready for launch';
            document.querySelector('#launchStatus').style.color = 'green';
            alert('Shuttle is ready for launch!');

            // Pick a planet and update mission destination information
            const selectedPlanet = pickPlanet(listedPlanets);
            addDestinationInfo(
                document,
                selectedPlanet.name,
                selectedPlanet.diameter,
                selectedPlanet.star,
                selectedPlanet.distance,
                selectedPlanet.moons,
                selectedPlanet.imageUrl
            );
        });
    });
});
