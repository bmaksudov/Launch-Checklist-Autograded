window.addEventListener("load", async function() {
    try {
        let listedPlanets;
        let listedPlanetsResponse;

        listedPlanetsResponse = myFetch();

        listedPlanetsResponse.then(function(result) {
            listedPlanets = result;
            let randomIndex = Math.floor(Math.random() * listedPlanets.length);
            let randomPlanet = listedPlanets[randomIndex];
            addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.imageUrl);
        }).catch(function(error) {
            console.log("Error fetching planets:", error);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
});
