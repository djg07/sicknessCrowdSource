/**
 * Created by Daniel on 2/5/2015.
 */

var map;
require([
    "esri/map", "esri/toolbars/draw",
    "esri/symbols/SimpleMarkerSymbol", "esri/symbols/SimpleLineSymbol",
    "esri/symbols/PictureFillSymbol", "esri/symbols/CartographicLineSymbol",
    "esri/graphic",
    "esri/geometry/webMercatorUtils",
    "esri/Color", "dojo/dom", "dojo/on", "dojo/domReady!"
], function (Map, Draw,
             SimpleMarkerSymbol, SimpleLineSymbol,
             PictureFillSymbol, CartographicLineSymbol,
             Graphic, webMercatorUtils,
             Color, dom, on) {
    map = new Map("map", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "streets"
    });

    //Cached variables
    var $iconToggle = $('#iconPlaceholder');

    //Globals
    var addPointListener;

    (function() {
        var toggled = false;

        $('#iconPlaceholder').click(function () {
            toggled = !toggled;

            if (toggled === true) {
                console.log(true);
                $iconToggle.css('opacity', '.5');
                enableAddPoint();
            }
            else if (toggled === false) {
                console.log('false');
                $iconToggle.css('opacity', '1');
                disableAddPoint();
            }
        });
    })();


    function enableAddPoint() {
        addPointListener = map.on("click", function (e) {
            console.log(e.mapPoint.x);
            var long = e.mapPoint.getLongitude();
            var lat = e.mapPoint.getLatitude();
            //console.log(map.spatialReference);
            map.graphics.add(new esri.Graphic(
                // Point coordinates are 0, 0
                new esri.geometry.Point(long, lat, new esri.SpatialReference({wkid: 4326})),
                new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_DIAMOND, 16,

                    new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,

                        new esri.Color([255, 0, 0]), 1),

                    new esri.Color([0, 0, 255, 1]))
            ));
        });
    }

    function disableAddPoint() {
        addPointListener.remove();
    }

    //TODO - Add Data to points when clicked


});