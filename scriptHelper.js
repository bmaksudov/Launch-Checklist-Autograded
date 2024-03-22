function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTargetDiv = document.getElementById("missionTarget");
    let missionDestinationHeading = document.createElement("h2");
    missionDestinationHeading.textContent = "Mission Destination";
    let missionDestinationList = document.createElement("ol");
    let nameListItem = document.createElement("li");
    nameListItem.textContent = `Name: ${name}`;
    let diameterListItem = document.createElement("li");
    diameterListItem.textContent = `Diameter: ${diameter} km`;
    let starListItem = document.createElement("li");
    starListItem.textContent = `Star: ${star}`;
    let distanceListItem = document.createElement("li");
    distanceListItem.textContent = `Distance from Earth: ${distance} light years`;
    let moonsListItem = document.createElement("li");
    moonsListItem.textContent = `Number of Moons: ${moons}`;
    let missionDestinationImage = document.createElement("img");
    missionDestinationImage.src = imageUrl;

    missionDestinationList.append(
        nameListItem,
        diameterListItem,
        starListItem,
        distanceListItem,
        moonsListItem
    );
    missionTargetDiv.append(
        missionDestinationHeading,
        missionDestinationList,
        missionDestinationImage
    );
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotValidation = validateInput(pilot);
    let copilotValidation = validateInput(copilot);
    let fuelValidation = validateInput(fuelLevel);
    let cargoValidation = validateInput(cargoLevel);

    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelValidation === "Empty" || cargoValidation === "Empty") {
        alert("All fields are required!");
        return;
    }

    document.getElementById("pilotStatus").textContent = `Pilot ${pilot} Ready`;
    document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} Ready`;

    if (fuelValidation !== "Is a Number" || fuelLevel < 10000) {
        document.getElementById("faultyItems").classList.add("visible");
        document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
        document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
        document.getElementById("launchStatus").classList.add("red");
        return;
    }

    if (cargoValidation !== "Is a Number" || cargoLevel > 10000) {
        document.getElementById("faultyItems").classList.add("visible");
        document.getElementById("cargoStatus").textContent = "Cargo mass too high for launch";
        document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
        document.getElementById("launchStatus").classList.add("red");
        return;
    }

    document.getElementById("faultyItems").classList.remove("visible");
    document.getElementById("launchStatus").textContent = "Shuttle is ready for launch";
    document.getElementById("launchStatus").classList.add("green");
}

async function myFetch() {
    try {
        const response = await fetch('https://api.example.com/planets');
        if (!response.ok) {
            throw new Error('Failed to fetch planets');
        }
        const data = await response.json();
        return data.planets;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
}

module.exports.myFetch = myFetch;
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;