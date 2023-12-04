var ciesBounds = L.latLngBounds(
    L.latLng(7.902450671902454, -72.50341732490553), // Esquina superior izquierda
    L.latLng(7.900213692791367, -72.50354070651599)  // Esquina inferior derecha
); var edificioBibliotecaCoordinates = [7.900852463877854, -72.50373002349993];

// Configurar el mapa con los límites máximos cies y rigidez máxima
var map = L.map('map', {
    // Establecer los límites máximos
    // Controlar la rigidez de los límites
    maxZoom: 20,                 // Establecer el nivel de zoom máximo
    minZoom: 17
}).setView([7.901674903783093, -72.5034065960689], 40);  // Establecer el nivel de zoom inicial

// Agregar una capa de mosaico (tile layer) de Google Maps en modo satélite
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

//pa resaltar cies
var CalzadoCoordinates = [
    [7.9024038547234765, -72.5033860300481], // Esquina superior izquierda
    [7.902260765007899, -72.50285894062517], // Esquina superior derecha
    [7.900296, -72.503424], // Esquina inferior derecha
    [7.900452, -72.503916]  // Esquina inferior izquierda
];


var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "coordinates": [
                            [
                                -72.50392305057474,
                                7.900433116094931
                            ],
                            [
                                -72.50344324823628,
                                7.900311225979593
                            ],
                            [
                                -72.50338731273001,
                                7.9005414628339
                            ],
                            [
                                -72.50355263322538,
                                7.900584555278826
                            ],
                            [
                                -72.5035712783934,
                                7.900537769195367
                            ],
                            [
                                -72.50363218594484,
                                7.900557468599786
                            ],
                            [
                                -72.50362969992223,
                                7.900585786491547
                            ],
                            [
                                -72.50379750643945,
                                7.900625185294885
                            ],
                            [
                                -72.50381615160819,
                                7.900546387685225
                            ],
                            [
                                -72.50388576023722,
                                7.9005685495139915
                            ],
                            [
                                -72.50392180756344,
                                7.900430653668579
                            ]
                        ],
                        "type": "LineString"
                    }
                }
            ]
        }
    ]
};


//edificio biblioteca
var edificioBiblioteca = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": { "nombre": "Zona 1" },
                    "geometry": {
                        "coordinates": [
                            [
                                -72.50373628339393,
                                7.900857673708487
                            ],
                            [
                                -72.50357039273958,
                                7.900815259462306
                            ],
                            [
                                -72.50362368075115,
                                7.900619211335922
                            ],
                            [
                                -72.50379084016778,
                                7.900665081579248
                            ],
                            [
                                -72.50373723496544,
                                7.900859872965455
                            ]
                        ],
                        "type": "LineString"
                    }
                }
            ]
        }
    ]
};





var CedrumGeneral = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "coordinates": [
                            [
                                -72.50338332465492,
                                7.902390137957269
                            ],
                            [
                                -72.50286843070442,
                                7.902239218266658
                            ],
                            [
                                -72.50341222176421,
                                7.900251236504857
                            ],
                            [
                                -72.5039376237542,
                                7.900415167300196
                            ],
                            [
                                -72.50338069764487,
                                7.902395342082983
                            ]
                        ],
                        "type": "LineString"
                    }
                }
            ]
        }

    ]
}
var edificios = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.5038343491456,
                            7.90048807218821
                        ],
                        [
                            -72.50386598683143,
                            7.900396504422076
                        ],
                        [
                            -72.50346795434362,
                            7.900286859652539
                        ],
                        [
                            -72.50344381332086,
                            7.900380757569835
                        ],
                        [
                            -72.50358881174502,
                            7.900424498826979
                        ],
                        [
                            -72.50360588710168,
                            7.900376091832513
                        ],
                        [
                            -72.50367242764949,
                            7.900397673594142
                        ],
                        [
                            -72.50365829632068,
                            7.9004384987684375
                        ],
                        [
                            -72.5038343491456,
                            7.90048807218821
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}

L.geoJSON(edificios, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h5>Edificio Administrativo</h5>
                <img src="../src/img/oficina.gif" alt="" style="display: block; margin: 0 auto; border-radius: 3px; width: 150px;">
                <p style="text-align: center;">en este edificio encontraras las oficinas directivas sena</p> <br>
        
                <br>
        
                <!-- Botón para abrir el modal -->
                <a href="#modal1">VIZUALIZAR</a>
             


                <div id="modal1" class="modalmask">
    <div class="modalbox movedown">
        <a href="#close" title="Close" class="close">X</a>
        <h4>EDIFICIO ADMINISTRATIVO</h4>
        <p>aca se encuentra el edificio administrativo del sena</p>
        <img src="../src/img/Admin.svg" alt="" style="display: block; margin: 0 auto; border-radius: 3px; width: 300px;">
    </div>
</div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);








var edificioBiblioteca = {
    "type": "FeatureCollection",
    "features": [

        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50373002349993,
                            7.900852463877854
                        ],
                        [
                            -72.50377978693056,
                            7.900648176988156
                        ],
                        [
                            -72.50358935415298,
                            7.900597105258413
                        ],
                        [
                            -72.50354162698112,
                            7.900805320761762
                        ],
                        [
                            -72.50373002349993,
                            7.900852463877854
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(edificioBiblioteca, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h5>Edificio biblioteca</h5>
                <img src="../src/img/oficina.gif" alt="" style="display: block; margin: 0 auto; border-radius: 3px; width: 150px;">
                <p style="text-align: center;">aca se encuentra la biblioteca</p> <br>
        
              
             
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);
var zonaBarismo = {
    "type": "FeatureCollection",
    "features": [

        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.5036575559759,
                            7.901034133372676
                        ],
                        [
                            -72.50370713400802,
                            7.900849489556975
                        ],
                        [
                            -72.50351873748595,
                            7.900794489255034
                        ],
                        [
                            -72.50346915945384,
                            7.900986990278611
                        ],
                        [
                            -72.5036575559759,
                            7.901034133372676
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}


var pasillo = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupId": "popupPasillo"
            },
            "geometry": {
                "coordinates": [
                    [
                        [-72.50329025988687, 7.901702738523582],
                        [-72.50346995263975, 7.900979521655316],
                        [-72.50343619714181, 7.900972932937748],
                        [-72.50323609113296, 7.901686305883246],
                        [-72.50329025988687, 7.901702738523582]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
};
var LabAnalisisConstruccion = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50301760013195,
                            7.902098778180047
                        ],
                        [
                            -72.50304923586629,
                            7.902012946600465
                        ],
                        [
                            -72.50296945879622,
                            7.901988423288628
                        ],
                        [
                            -72.50294470039499,
                            7.902079704497126
                        ],
                        [
                            -72.50301760013195,
                            7.902098778180047
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(LabAnalisisConstruccion, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Laboratorio de analisis de construccion</h6>
            <p style="text-align: center;">se puede ca-mi-nar.</p>
                <img src="src/oficina.gif" alt="Tu imagen GIF" width="150px" height="auto" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);



// Agrega el polígono al mapa
L.geoJSON(pasillo, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h5>pasillo de salones mecanica</h5>
            <p style="text-align: center;">se puede ca-mi-nar.</p>
                <img src="src/amongus-bailando.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);
var Cafeteria = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50327894047149,
                            7.902235735089803
                        ],
                        [
                            -72.50329670774613,
                            7.902170191505377
                        ],
                        [
                            -72.5031839243437,
                            7.902143301824395
                        ],
                        [
                            -72.50316526045904,
                            7.902210526017612
                        ],
                        [
                            -72.50327894047149,
                            7.902235735089803
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(Cafeteria, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupCafeteria = `
            <h6>Cafeteria</h6>
            <p style="text-align: center;">aca se come mi papa</p>
                <img src="src/Cafeteria.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupCafeteria);
    }
}).addTo(map);


var SalaInstructores = {
    "type": "FeatureCollection",
    "features": [

        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50332168308161,
                            7.902337017894737
                        ],
                        [
                            -72.50334717862837,
                            7.902250033824657
                        ],
                        [
                            -72.503250862119,
                            7.902227586319441
                        ],
                        [
                            -72.50322536657225,
                            7.902314570394225
                        ],
                        [
                            -72.50332168308161,
                            7.902337017894737
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(SalaInstructores, {
    style: function (feature) {
        return { color: 'purple' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Sala de Instructores</h6>
            <p style="text-align: center;">Ubicada en el segundo piso subiendo las escaleras a mano derecha</p>
                <img src="src/oficina.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var LaboratorioCalidadAire = {
    "type": "FeatureCollection",
    "features": [

        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50334980857788,
                            7.90224881820987
                        ],
                        [
                            -72.50337086184025,
                            7.902176444840492
                        ],
                        [
                            -72.5032730260921,
                            7.902156818161828
                        ],
                        [
                            -72.50324825754808,
                            7.902225511532308
                        ],
                        [
                            -72.50334980857788,
                            7.90224881820987
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]

}
L.geoJSON(LaboratorioCalidadAire, {
    style: function (feature) {
        return { color: 'purple' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Sala de Instructores</h6>
            <p style="text-align: center;">Ubicada en el segundo piso subiendo las escaleras a mano derecha</p>
                <img src="src/oficina.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var AmbienteTrainingEnveroment = {
    "type": "FeatureCollection",
    "features": [

        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50335600071385,
                            7.90217153817089
                        ],
                        [
                            -72.50337705397575,
                            7.90210652479486
                        ],
                        [
                            -72.50329160250013,
                            7.902084444776335
                        ],
                        [
                            -72.50327178766494,
                            7.902151911489909
                        ],
                        [
                            -72.50335600071385,
                            7.90217153817089
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(AmbienteTrainingEnveroment, {
    style: function (feature) {
        return { color: 'purple' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Ambiente Training Enveroment</h6>
            <p style="text-align: center;">Ubicada en el segundo piso subiendo las escaleras a mano derecha cuando cruzas el pasillo</p>
                <img src="src/oficina.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);
var SalonTopografia = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": [
                [
                    [
                        -72.50319783445784,
                        7.9020652509529725
                    ],
                    [
                        -72.50330343455457,
                        7.902086834537187
                    ],
                    [
                        -72.50332187266679,
                        7.902005481022599
                    ],
                    [
                        -72.50321962495408,
                        7.901982237158052
                    ],
                    [
                        -72.50319783445784,
                        7.9020652509529725
                    ]
                ]
            ],
            "type": "Polygon"
        }
    }
    ]
}
L.geoJSON(SalonTopografia, {
    style: function (feature) {
        return { color: 'purple' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Salon Topografia</h6>
            <p style="text-align: center;">Ubicada en el segundo piso subiendo las escaleras a mano derecha cuando cruzas el pasillo, aca se encuentran los topografos</p>
                <img src="src/salong.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);
L.geoJSON(Ambiente201Cedrum, {
    style: function (feature) {
        return { color: 'purple' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Ambiente 201</h6>
            <p style="text-align: center;">Ubicada en el segundo piso subiendo las escaleras a mano derecha cuando cruzas el pasillo, aca se encuentra el nodo de software y sistemas</p>
                <img src="src/oficina.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var Ambiente201Cedrum = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": [
                [
                    [
                        -72.50340384047642,
                        7.902183776507002
                    ],
                    [
                        -72.50345833127106,
                        7.9019899630160495
                    ],
                    [
                        -72.50341127103752,
                        7.901978923005032
                    ],
                    [
                        -72.50335430338716,
                        7.902172736498883
                    ],
                    [
                        -72.50340384047642,
                        7.902183776507002
                    ]
                ]
            ],
            "type": "Polygon"
        }
    }
    ]
}


var pasilloSegundaPlantaCafeteria = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": [
                [
                    [
                        -72.50325875569946,
                        7.902157945595619
                    ],
                    [
                        -72.50328102969885,
                        7.902097731839376
                    ],
                    [
                        -72.50305415970813,
                        7.902023575641863
                    ],
                    [
                        -72.50303188570942,
                        7.902099519511054
                    ],
                    [
                        -72.50325875569946,
                        7.902157945595619
                    ]
                ]
            ],
            "type": "Polygon"
        }
    }
    ]
}
L.geoJSON(pasilloSegundaPlantaCafeteria, {
    style: function (feature) {
        return { color: 'purple' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Pasillo segunda planta</h6>
            <p style="text-align: center;">este pasillo conecta varios salones</p>
                <img src="src/amongus-bailando.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var CordinacionAcademica = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": [
                [
                    [
                        -72.50335666816642,
                        7.901803333299782
                    ],
                    [
                        -72.5033715237582,
                        7.9017517799335195
                    ],
                    [
                        -72.50328899575425,
                        7.9017245317894265
                    ],
                    [
                        -72.50326973921995,
                        7.901777665663943
                    ],
                    [
                        -72.50335666816642,
                        7.901803333299782
                    ]
                ]
            ],
            "type": "Polygon"
        }
    }
    ]
}
L.geoJSON(CordinacionAcademica, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Cordinacion Academica</h6>
            <p style="text-align: center;">Aca se coordina la coordinacion academica</p>
                <img src="src/oficina.gif" alt="Tu imagen GIF" width="100" height="100" style="display: block; margin: 0 auto;">
            </div>
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var AmbienteTic = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50323122615211,
                            7.901743605491248
                        ],
                        [
                            -72.50324910721963,
                            7.901687746798686
                        ],
                        [
                            -72.50316795468228,
                            7.90166322346748
                        ],
                        [
                            -72.50315343899597,
                            7.90172423027542
                        ],
                        [
                            -72.50323122615211,
                            7.901743605491248
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(AmbienteTic, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Ambiente TIC</h6>
                <p style="text-align: center;">este salon es utilizado por salud privada entre otros</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

// Crear una capa geoJSON y ajustar el estilo del borde
var CedrumGeneralLayer = L.geoJSON(CedrumGeneral, {
    style: function (feature) {
        return {
            color: "blue", // Color del borde (rojo en este ejemplo)
            weight: 8 // Grosor del borde (ajusta este valor según tus necesidades)
        };
    }
}).addTo(map);


L.geoJSON(CedrumGeneral).addTo(map);


L.geoJSON(zonaBarismo).addTo(map);


var baño = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50323607010506,
                            7.901680967981008
                        ],
                        [
                            -72.503255948354,
                            7.901604397641137
                        ],
                        [
                            -72.5031764353564,
                            7.90157814495052
                        ],
                        [
                            -72.5031565571075,
                            7.901654715295024
                        ],
                        [
                            -72.50323607010506,
                            7.901680967981008
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(baño, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Baño</h6>
                <p style="text-align: center;">este es un baño usado por aprendizes e instructores</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);
var salonMecanica1 = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50340834826125,
                            7.90106402942078
                        ],
                        [
                            -72.50342967955575,
                            7.900963393963465
                        ],
                        [
                            -72.50325298400685,
                            7.900921827136969
                        ],
                        [
                            -72.503228688369,
                            7.901020274876288
                        ],
                        [
                            -72.50340834826125,
                            7.90106402942078
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(salonMecanica1, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de mecanica</h6>
                <p style="text-align: center;">en este salon asisten distintos cursos de mecanica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);
var salonMecanicaAutomotriz = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50338771436283,
                            7.901153726217544
                        ],
                        [
                            -72.50341201000136,
                            7.901059653964353
                        ],
                        [
                            -72.503228688369,
                            7.901015899421509
                        ],
                        [
                            -72.50321101881393,
                            7.901107783956419
                        ],
                        [
                            -72.50338771436283,
                            7.901153726217544
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(salonMecanicaAutomotriz, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de mecanica automotriz</h6>
                <p style="text-align: center;">en este salon asisten distintos cursos de mecanica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var salonMecanicaIndustrial = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.5033612100279,
                            7.901236859815555
                        ],
                        [
                            -72.50338108827681,
                            7.901147163034764
                        ],
                        [
                            -72.5032132275051,
                            7.901107783953677
                        ],
                        [
                            -72.50319334925621,
                            7.901199668469474
                        ],
                        [
                            -72.5033612100279,
                            7.901236859815555
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(salonMecanicaIndustrial, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de mecanica automotriz</h6>
                <p style="text-align: center;">en este salon asisten distintos cursos de mecanica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var transmicionDePotencia = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50358207946421,
                            7.901300303867089
                        ],
                        [
                            -72.50360975426568,
                            7.901212794833228
                        ],
                        [
                            -72.50342967956729,
                            7.901166852578797
                        ],
                        [
                            -72.50340538391532,
                            7.901254361623629
                        ],
                        [
                            -72.50358207946421,
                            7.901300303867089
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(transmicionDePotencia, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de Transmision de potencia</h6>
                <p style="text-align: center;">en este salon asisten distintos cursos de mecanica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var mecanizadoProductos = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50334250224749,
                            7.901326556582319
                        ],
                        [
                            -72.5033601718014,
                            7.901241235273446
                        ],
                        [
                            -72.50318126755802,
                            7.901195293022056
                        ],
                        [
                            -72.50316138930964,
                            7.901282802066419
                        ],
                        [
                            -72.50334250224749,
                            7.901326556582319
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(mecanizadoProductos, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de mecanizado de productos metalmecanicos</h6>
                <p style="text-align: center;">en este salon asisten distintos cursos de mecanica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var MantenimientosMotores = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50344876818933,
                            7.90107327292138
                        ],
                        [
                            -72.50362546373825,
                            7.901119215184977
                        ],
                        [
                            -72.50364755066376,
                            7.901022955202592
                        ],
                        [
                            -72.50347034338444,
                            7.9009813883834425
                        ],
                        [
                            -72.50344876818933,
                            7.90107327292138
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(MantenimientosMotores, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de mantenimientos de motores diesel</h6>
                <p style="text-align: center;">en este salon asisten distintos cursos de mecanica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var metalmecanicos2 = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50361289471057,
                            7.901214178363631
                        ],
                        [
                            -72.5036288980081,
                            7.901134921500315
                        ],
                        [
                            -72.50344752730162,
                            7.901079441687486
                        ],
                        [
                            -72.5034315240049,
                            7.9011613404565395
                        ],
                        [
                            -72.50361289471057,
                            7.901214178363631
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(metalmecanicos2, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de mecanizados metalmecanicos</h6>
                <p style="text-align: center;">en este salon asisten distintos cursos de mecanica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var Herramienteria = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50356906530061,
                            7.901398340474742
                        ],
                        [
                            -72.50358820003994,
                            7.901306263425724
                        ],
                        [
                            -72.50340456077598,
                            7.901250834389387
                        ],
                        [
                            -72.50338378125568,
                            7.901348600056764
                        ],
                        [
                            -72.50356906530061,
                            7.901398340474742
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(Herramienteria, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de Herramienteria</h6>
                <p style="text-align: center;">en este salon almacenan herramienta y tambien dictan cursos sobre el uso de estas</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var Telecomunicaciones = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50354689712265,
                            7.901483149042477
                        ],
                        [
                            -72.50357232229226,
                            7.9013915027555015
                        ],
                        [
                            -72.50338794443641,
                            7.901339804856846
                        ],
                        [
                            -72.50335947529497,
                            7.901433801053344
                        ],
                        [
                            -72.50354689712265,
                            7.901483149042477
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(Telecomunicaciones, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de Herramienteria</h6>
                <p style="text-align: center;">en este salon almacenan herramienta y tambien dictan cursos sobre el uso de estas</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);




var MantenimientoElectronico = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50330547846501,
                            7.901420643531225
                        ],
                        [
                            -72.50332681619616,
                            7.901341386708367
                        ],
                        [
                            -72.5031561143544,
                            7.901288548817192
                        ],
                        [
                            -72.50312944219213,
                            7.901370447544821
                        ],
                        [
                            -72.50330547846501,
                            7.901420643531225
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(MantenimientoElectronico, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de Mantenimientos Electronico y AutoMotriz</h6>
                <p style="text-align: center;">en este salon encontran los aprendizes de mantenimiento electronico y automotriz</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var InstalacionesResidenciales = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50328215989427,
                            7.901515354304266
                        ],
                        [
                            -72.50331149927295,
                            7.901420246135672
                        ],
                        [
                            -72.50313279578283,
                            7.90137269204358
                        ],
                        [
                            -72.50310345640416,
                            7.901467800223145
                        ],
                        [
                            -72.50328215989427,
                            7.901515354304266
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(InstalacionesResidenciales, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de Instalaciones Electricas Residenciales</h6>
                <p style="text-align: center;">en este salon encontran los aprendizes de mantenimiento electronico y automotriz</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var SupervisionRedes = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50352299222482,
                            7.901571699622991
                        ],
                        [
                            -72.50354432995434,
                            7.901492442828854
                        ],
                        [
                            -72.50337096089778,
                            7.901439604957389
                        ],
                        [
                            -72.50334428873468,
                            7.901524145548336
                        ],
                        [
                            -72.50352299222482,
                            7.901571699622991
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(SupervisionRedes, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de Supervision de redes</h6>
                <p style="text-align: center;">en este salon se encuentran los aprendices de deistribuicion de energia electrica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var Telecomunicaciones2 = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50331545755158,
                            7.901619253743888
                        ],
                        [
                            -72.50349416104086,
                            7.901666807807587
                        ],
                        [
                            -72.50351816598759,
                            7.901574341567709
                        ],
                        [
                            -72.5033394624975,
                            7.901526787493339
                        ],
                        [
                            -72.50331545755158,
                            7.901619253743888
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(Telecomunicaciones2, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Salon de Telecomunicaciones</h6>
                <p style="text-align: center;">en este salon se encuentran los aprendices de deistribuicion de energia electrica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

var Nose = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50326478044259,
                            7.9016007604952705
                        ],
                        [
                            -72.50328579907999,
                            7.901516219895257
                        ],
                        [
                            -72.50311008199249,
                            7.9014660239263605
                        ],
                        [
                            -72.50309141138528,
                            7.901553206423969
                        ],
                        [
                            -72.50326478044259,
                            7.9016007604952705
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(Nose, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Ni idea</h6>
                <p style="text-align: center;">en este salon se encuentran los aprendices de deistribuicion de energia electrica</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                </div>
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var CanchaCies = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -72.50345505278023,
                            7.900892204890113
                        ],
                        [
                            -72.50350961862915,
                            7.90066661370841
                        ],
                        [
                            -72.50336490050883,
                            7.900617265620781
                        ],
                        [
                            -72.50328661037899,
                            7.9008522564601975
                        ],
                        [
                            -72.50345505278023,
                            7.900892204890113
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}
L.geoJSON(CanchaCies, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
                <h6>Cancha de fulbo</h6>
                <p style="text-align: center;">aca hay pa fulbo</p>
                    <img src="../src/img/salong.gif" alt="Tu imagen GIF"  height="100" style="display: block;margin: 0 auto;width: 200px">
                
            `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);


var CafeteriaBarismo = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -72.50294709992995,
                            7.902222609511845
                        ],
                        [
                            -72.50295133521493,
                            7.9022224034213835
                        ],
                        [
                            -72.50295552971178,
                            7.902221787134764
                        ],
                        [
                            -72.50295964302519,
                            7.90222076658717
                        ],
                        [
                            -72.50296363554172,
                            7.902219351607033
                        ],
                        [
                            -72.5029674688112,
                            7.9022175558213865
                        ],
                        [
                            -72.50297110591718,
                            7.902215396524636
                        ],
                        [
                            -72.50297451183232,
                            7.902212894511994
                        ],
                        [
                            -72.5029776537558,
                            7.902210073879215
                        ],
                        [
                            -72.50298050142916,
                            7.902206961790544
                        ],
                        [
                            -72.50298302742777,
                            7.902203588217098
                        ],
                        [
                            -72.50298520742486,
                            7.902199985648241
                        ],
                        [
                            -72.50298702042589,
                            7.902196188778689
                        ],
                        [
                            -72.50298844897068,
                            7.902192234174374
                        ],
                        [
                            -72.50298947930158,
                            7.902188159920299
                        ],
                        [
                            -72.50299010149593,
                            7.902184005253763
                        ],
                        [
                            -72.50299030956168,
                            7.90217981018648
                        ],
                        [
                            -72.50299010149504,
                            7.902175615119239
                        ],
                        [
                            -72.50298947929987,
                            7.902171460452831
                        ],
                        [
                            -72.5029884489682,
                            7.90216738619896
                        ],
                        [
                            -72.50298702042272,
                            7.902163431594919
                        ],
                        [
                            -72.50298520742113,
                            7.902159634725705
                        ],
                        [
                            -72.50298302742361,
                            7.902156032157232
                        ],
                        [
                            -72.50298050142476,
                            7.902152658584201
                        ],
                        [
                            -72.50297765375133,
                            7.902149546495964
                        ],
                        [
                            -72.50297451182794,
                            7.902146725863617
                        ],
                        [
                            -72.50297110591306,
                            7.90214422385139
                        ],
                        [
                            -72.50296746880748,
                            7.902142064555025
                        ],
                        [
                            -72.50296363553855,
                            7.902140268769713
                        ],
                        [
                            -72.5029596430227,
                            7.902138853789851
                        ],
                        [
                            -72.50295552971006,
                            7.902137833242461
                        ],
                        [
                            -72.50295133521405,
                            7.902137216955971
                        ],
                        [
                            -72.50294709992995,
                            7.902137010865553
                        ],
                        [
                            -72.50294286464586,
                            7.902137216955971
                        ],
                        [
                            -72.50293867014986,
                            7.902137833242461
                        ],
                        [
                            -72.5029345568372,
                            7.902138853789851
                        ],
                        [
                            -72.50293056432137,
                            7.902140268769713
                        ],
                        [
                            -72.50292673105243,
                            7.902142064555025
                        ],
                        [
                            -72.50292309394685,
                            7.90214422385139
                        ],
                        [
                            -72.50291968803198,
                            7.902146725863617
                        ],
                        [
                            -72.5029165461086,
                            7.902149546495964
                        ],
                        [
                            -72.50291369843515,
                            7.902152658584201
                        ],
                        [
                            -72.50291117243628,
                            7.902156032157232
                        ],
                        [
                            -72.50290899243878,
                            7.902159634725705
                        ],
                        [
                            -72.50290717943719,
                            7.902163431594919
                        ],
                        [
                            -72.50290575089171,
                            7.90216738619896
                        ],
                        [
                            -72.50290472056005,
                            7.902171460452831
                        ],
                        [
                            -72.50290409836487,
                            7.902175615119239
                        ],
                        [
                            -72.50290389029823,
                            7.90217981018648
                        ],
                        [
                            -72.50290409836398,
                            7.902184005253763
                        ],
                        [
                            -72.50290472055833,
                            7.902188159920299
                        ],
                        [
                            -72.50290575088923,
                            7.902192234174374
                        ],
                        [
                            -72.50290717943402,
                            7.902196188778689
                        ],
                        [
                            -72.50290899243505,
                            7.902199985648241
                        ],
                        [
                            -72.50291117243215,
                            7.902203588217098
                        ],
                        [
                            -72.50291369843075,
                            7.902206961790544
                        ],
                        [
                            -72.50291654610412,
                            7.902210073879215
                        ],
                        [
                            -72.50291968802759,
                            7.902212894511994
                        ],
                        [
                            -72.50292309394271,
                            7.902215396524636
                        ],
                        [
                            -72.5029267310487,
                            7.9022175558213865
                        ],
                        [
                            -72.5029305643182,
                            7.902219351607033
                        ],
                        [
                            -72.50293455683472,
                            7.90222076658717
                        ],
                        [
                            -72.50293867014814,
                            7.902221787134764
                        ],
                        [
                            -72.502942864645,
                            7.9022224034213835
                        ],
                        [
                            -72.50294709992995,
                            7.902222609511845
                        ]
                    ]
                ]
            }
        }
    ]
}
L.geoJSON(CafeteriaBarismo, {
    style: function (feature) {
        return { color: 'blue' }; // Estilo del polígono
    },
    onEachFeature: function (feature, layer) {
        // Define el contenido del popup personalizado con texto e imagen
        var popupContent = `
            <h6>Cafetería de barismo</h6>
            <p style="text-align: center;">Aquí mantienen los estudiantes de barismo</p>
            <img src="../src/img/Cafeteria.gif" alt="Tu imagen GIF" height="100" style="display: block; margin: 0 auto; width: 200px">
            <br>
        
            <!-- Botón para abrir el modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
              Abrir Modal
            </button>
        `;

        layer.bindPopup(popupContent);
    }
}).addTo(map);

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Función para cerrar la modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cierra la modal si se hace clic fuera de ella
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





