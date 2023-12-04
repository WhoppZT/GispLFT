
// Funciones para trazar la ruta y cerrar el modal
function trazarRuta(geojsonCoords) {
    closeModal("myModal");
    var geojsonFeature = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": geojsonCoords,
            "type": "LineString"
        }
    };
    var geojsonLayer = L.geoJSON(geojsonFeature).addTo(map);

    setTimeout(function () {
        map.removeLayer(geojsonLayer);
    }, 60000);  // Cambié 100000 a 60000 ya que parece que había un error en el tiempo especificado
}

// Asignar eventos a los elementos
document.getElementById("ruta").addEventListener("click", function () {
    var geojsonCoords = [
        [-72.5034586813827, 7.901842211990385],
        [-72.50341367351974, 7.901984445038792],
        [-72.50319077743637, 7.901914389961036],
        [-72.50309861847914, 7.902200978838394],
        [-72.50298074074291, 7.902169135639724]
    ];
    trazarRuta(geojsonCoords);
});