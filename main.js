$(document).ready(function(){

var myLatlng1 = new google.maps.LatLng(53.3478, -6.2597); // initially shows dublin

     var mapOptions = {
         zoom: 12,
         center: myLatlng1,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById('map'),
     mapOptions);

     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function (position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);
                var marker = new google.maps.Marker({
          			position: initialLocation,
          			map: map,
         });
       });



 function initialize() {


  $("#myid li").click(function() {

  var selection = this.id;

 var selectedMode = document.getElementById('mode').value;



 var myLatlng1 = new google.maps.LatLng(53.3478, -6.2597); // initially shows dublin

     var mapOptions = {
         zoom: 12,
         center: myLatlng1,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById('map'),
     mapOptions);

     if (navigator.geolocation) {

         navigator.geolocation.getCurrentPosition(function (position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);

                 var marker = new google.maps.Marker({
			position: initialLocation,
			map: map,

		});
         });


    var directionsService = new google.maps.DirectionsService(),
	  directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
	  directionsDisplay.setPanel(document.getElementById("map-directions"));

	 		 var travel = {
	 			origin : initialLocation,
				destination : selection,
				travelMode: google.maps.TravelMode[selectedMode]
				};

  		 directionsService.route(travel,function(result, status) {
						if (status === google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(result);
						}
					});
     }
    });
  }
 }

initialize();

});
