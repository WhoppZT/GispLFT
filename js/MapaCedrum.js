mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlhZ29jYWxkZXJvbjE5MTAiLCJhIjoiY2xvZWNyc3VqMDljbTJubzE1aGV0ZW5hNSJ9.sddMKv5g3Orjxt9FkRWiRQ';

// Crea un nuevo mapa en el contenedor con id 'map'
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9', // Cambia a la vista satelital
    center: [7.9169069665348015, -72.49985540912625], // Longitud y latitud iniciales del mapa
    zoom: 9, // Nivel de zoom inicial
    pitch: 45, // Ajusta el ángulo de inclinación del mapa
    bearing: -17.6 // Ajusta la rotación del mapa
});

// Añade control de navegación
map.addControl(new mapboxgl.NavigationControl());

// Oculta el nombre de las calles
map.setStyle({ "layers": [{ "id": "road-label", "type": "symbol", "layout": { "visibility": "none" } }] });
