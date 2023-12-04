var verificador = false;
var nombre_AmbienteTicCoordinates = "ambiente tic";
var nombre_CordinacionAcademicaCoordinates = "coordinacion academica";
var nombre_pasilloSegundaPlantaCafeteriaCoordinates = "segunda planta";
var nombre_Ambiente201CedrumCoordinates = "ambiente 201";
var nombre_SalonTopografiaCoordinates = "salon topografia";
var nombre_AmbienteTrainingEnveromentCoordinates = "ambiente training enveroment";
var nombre_LaboratorioCalidadAireCoordinates = "laboratorio coordinacion";
var nombre_LabAnalisisConstruccion= "laboratorio analisis";
var nombre_pasillo = "pasillo";
var nombre_SalonesMecacina2 = "salon mecanica";
var nombre_SalonesMecacina1 = "salon mecanica";
var nombre_zona_barismo = "barismo";
var nombre_edificio_biblioteca = "edificio biblioteca";
var nombre_baño = "baño";
var nombre_SalaInstructoresCoordinates= "sala instructores";
var nombre_laboratorio_analisis = "Laboratorio analisis construccion";
var nombre_cafeteria = "cafeteria";
var AmbienteTicCoordinates=[7.901743605491248,-72.50323122615211];
var CordinacionAcademicaCoordinates=[7.901803333299782,-72.50335666816642];
var pasilloSegundaPlantaCafeteriaCoordinates=[7.902157945595619,-72.50325875569946];
var Ambiente201CedrumCoordinates=[7.902183776507002,-72.50340384047642];
var SalonTopografiaCoordinates=[7.9020652509529725,-72.50319783445784];
var AmbienteTrainingEnveromentCoordinates=[7.90217153817089,-72.50335600071385];
var LaboratorioCalidadAireCoordinates=[7.90224881820987,-72.50334980857788]
var SalaInstructoresCoordinates=[7.902337017894737,-72.50332168308161];
var labAnalisisConstruccionCoordinates=[7.902098778180047,-72.50301760013195]
var pasilloCoordinates=[7.901702738523582,-72.50329025988687];
var SalonesMecacina2Coordinates = [7.901687092214857, -72.50323302460582];
var SalonesMecacina1Coordinates = [7.901308973423383, -72.50358440242478];
var edificioBibliotecaCoordinates = [7.900852463877854, -72.50373002349993];
var zonaBarismoCoordinates = [7.901034133372676, -72.5036575559759];
var bañoCoordinates = [7.901308973423383,-72.50358440242478];
var cafeteriaCoordinates= [7.902235735089803,-72.50327894047149];
var LaboratorioCoordinates = [7.900852463877854, -72.50373002349993];
                                

document.addEventListener("DOMContentLoaded", function () {
    var campo = document.getElementById("nameBusqueda");
    var markers = [];

    document.getElementById("miBoton").addEventListener("click", function () {
        var valor = campo.value;
        var verificador = false;

        markers.forEach(function(marker) {
            map.removeLayer(marker);
        })
        if(compararValor(valor, nombre_edificio_biblioteca)){
            var edificioBibliotecaMarker = L.marker(edificioBibliotecaCoordinates).addTo(map);
            markers.push(edificioBibliotecaMarker);
            edificioBibliotecaMarker.bindPopup(`
                <h5>Edificio biblioteca</h5>
                <img src="src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
                <p style="text-align: center;">Se puede caminar.</p>
                <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_cafeteria )){
            var cafeteriacaMarker = L.marker(cafeteriaCoordinates).addTo(map);
            markers.push(cafeteriacaMarker);
            cafeteriacaMarker.bindPopup(`
            <h6>Cafeteria</h6>
            <p style="text-align: center;">aca se come mi papa</p>
                <img src="src/Cafeteria.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_AmbienteTicCoordinates )){
            var ambienteticMarker = L.marker(AmbienteTicCoordinates).addTo(map);
            markers.push(ambienteticMarker);
            ambienteticMarker.bindPopup(`
            <h5>Ambiente tic</h5>
            <img src="src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if (compararValor(valor, nombre_zona_barismo)) {
            var barismoaMarker = L.marker(zonaBarismoCoordinates).addTo(map);
            markers.push(barismoaMarker);
            barismoaMarker.bindPopup(`
            <h5>Edificio biblioteca</h5>
            <img src="src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_SalonesMecacina1 )){
            var mecanica1Marker = L.marker(SalonesMecacina1Coordinates).addTo(map);
            markers.push(mecanica1Marker);
            mecanica1Marker.bindPopup(`
            <h5>Mecanica 1</h5>
            <img src="src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_SalonesMecacina2 )){
            var mecanica2Marker = L.marker(SalonesMecacina2Coordinates).addTo(map);
            markers.push(mecanica2Marker);
            mecanica2Marker.bindPopup(`
            <h5>Mecanica 2</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_pasillo )){
            var pasilloMarker = L.marker(pasilloCoordinates).addTo(map);
            markers.push(pasilloMarker);
            pasilloMarker.bindPopup(`
            <h5>pasillo</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_LabAnalisisConstruccion )){
            var laboratorioMarker = L.marker(labAnalisisConstruccionCoordinates).addTo(map);
            markers.push(laboratorioMarker);
            laboratorioMarker.bindPopup(`
            <h5>laboratorio</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_SalaInstructoresCoordinates )){
            var instructoresMarker = L.marker(SalaInstructoresCoordinates).addTo(map);
            markers.push(instructoresMarker);
            instructoresMarker.bindPopup(`
            <h5>sala de instructores</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_LaboratorioCalidadAireCoordinates )){
            var laboratoriosMarker = L.marker(LaboratorioCalidadAireCoordinates).addTo(map);
            markers.push(laboratoriosMarker);
            laboratoriosMarker.bindPopup(`
            <h5>laboratios calidad aire .-.</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_AmbienteTrainingEnveromentCoordinates )){
            var trainingMarker = L.marker(AmbienteTrainingEnveromentCoordinates).addTo(map);
            markers.push(trainingMarker);
            trainingMarker.bindPopup(`
            <h5>Ambiente Training Enveroment</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_SalonTopografiaCoordinates )){
            var SalonTopografiaMarker = L.marker(SalonTopografiaCoordinates).addTo(map);
            markers.push(SalonTopografiaMarker);
            SalonTopografiaMarker.bindPopup(`
            <h5>Salon topografia</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_Ambiente201CedrumCoordinates )){
            var ambienteMarker = L.marker(Ambiente201CedrumCoordinates).addTo(map);
            markers.push(ambienteMarker);
            ambienteMarker.bindPopup(`
            <h5>Ambiente 201</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_pasilloSegundaPlantaCafeteriaCoordinates )){
            var segundaPlantaMarker = L.marker(pasilloSegundaPlantaCafeteriaCoordinates).addTo(map);
            markers.push(segundaPlantaMarker);
            segundaPlantaMarker.bindPopup(`
            <h5>segunda planta</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor,  nombre_CordinacionAcademicaCoordinates )){
            var coordinacionMarker = L.marker(CordinacionAcademicaCoordinates).addTo(map);
            markers.push(coordinacionMarker);
            coordinacionMarker.bindPopup(`
            <h5>coordinacion academica</h5>
            <img src="../src/oficina.gif" alt="" width="200" height="100" style="display: block; margin: 0 auto;">
            <p style="text-align: center;">Se puede caminar.</p>
            <a hrf="">Visualizar áreas de este edificio</a>
            `).openPopup();
            verificador = true;
        }if(compararValor(valor, nombre_baño )){
            var bañoaMarker = L.marker(bañoCoordinates).addTo(map);
            markers.push(bañoaMarker);
            bañoaMarker.bindPopup(`
            <h6>Baño</h6>
            <p style="text-align: center;">aca se come mi papa</p>
                <img src="../src/Cafeteria.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
            `).openPopup();
            verificador = true;


        }if(valor ==""){
            alert("Por favor rellene el campo");
        }else if(verificador == false){
            alert("no se encontro ubicacion, porfavor intentelo nuevamente");
        }                                     
    });


    function compararValor(valor, nombre_edificio_biblioteca) {
        var palabras = nombre_edificio_biblioteca.split(" ");

        var coincidenciaEncontrada = false;

        for (var i = 0; i < palabras.length; i++) {
            var palabra = palabras[i];
            if (valor.toLowerCase().includes(palabra.toLowerCase())) {
                coincidenciaEncontrada = true;
                break; 
            }
        }

        return coincidenciaEncontrada;
    }
});

