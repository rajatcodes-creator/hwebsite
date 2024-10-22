let map;

function initMap() {
    const userLocation = { lat: -34.397, lng: 150.644 }; // Default location
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: userLocation,
    });

    fetchUserLocation();
}

function fetchUserLocation() {
    fetch('https://your-backend-api.com/getUserLocation')
        .then(response => response.json())
        .then(data => {
            const { startLocation, endLocation } = data;
            const startLatLng = { lat: startLocation.lat, lng: startLocation.lng };
            const endLatLng = { lat: endLocation.lat, lng: endLocation.lng };

            new google.maps.Marker({
                position: startLatLng,
                map,
                title: "Start Location",
            });

            new google.maps.Marker({
                position: endLatLng,
                map,
                title: "End Location",
            });

            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            const request = {
                origin: startLatLng,
                destination: endLatLng,
                travelMode: google.maps.TravelMode.DRIVING,
            };

            directionsService.route(request, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);
                } else {
                    console.error('Error fetching directions: ' + status);
                }
            });
        })
        .catch(error => console.error('Error fetching user location: ', error));
}

window.onload = initMap;