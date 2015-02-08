/**
 * Created by Daniel on 2/5/2015.
 */



$( document ).ready(function() {

    $( "#addPoint" ).click(function() {
        alert( "Clicked Go" );

        $('#map').click(function() {
            alert('clicked map');
        })
        //TODO remove map listener now

    });

});
//TODO create graphics layer