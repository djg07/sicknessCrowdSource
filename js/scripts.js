/**
 * Created by Daniel on 2/5/2015.
 */

$(function() {
		L.mapbox.accessToken = 'pk.eyJ1IjoiZGdhbGF0aSIsImEiOiI5MVd5dV84In0.HBORjJfOqTCyqoMlKukIvA';
	L.mapbox.map('map', 'dgalati.kgnfc438', {
		scrollWheelZoom:false

	}).setView([43.729,-79.4252], 10);
})

$(document).ready(function () {

	

    $("#addPoint").click(function () {
        alert("Clicked Go");

        $('#map').click(function () {
            alert('clicked map');
        });
        //TODO remove map listener now

    });

});
//TODO create graphics layer