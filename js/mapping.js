/**
 * Created by Daniel on 2/5/2015.
 */

var map;
require(["esri/map", "dojo/domReady!"], function(Map) {
    map = new Map("map", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "streets"
    });
});
