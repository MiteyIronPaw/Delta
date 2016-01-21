function initMap() {

	var map_theme = [
	  {
		"elementType": "labels",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"stylers": [
		  { "hue": "#8B4513" }
		]
	  }
	];
	
	var user_location = {lat: -43.531, lng: 172.64}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: user_location,
		disableDefaultUI: true,
		styles: map_theme
	});
	var marker = new google.maps.Marker({
		position: user_location,
		map: map,
		icon: "./arrow.png"
	});

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			user_location = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			
			marker.setPosition(user_location);
			map.setCenter(user_location);
		}, function() {
			//ERROR
		});
	} else {
		//ERROR
	}
}