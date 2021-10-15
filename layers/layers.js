var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ciclovias_1 = new ol.format.GeoJSON();
var features_Ciclovias_1 = format_Ciclovias_1.readFeatures(json_Ciclovias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciclovias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ciclovias_1.addFeatures(features_Ciclovias_1);
var lyr_Ciclovias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ciclovias_1, 
                style: style_Ciclovias_1,
                interactive: true,
                title: '<img src="styles/legend/Ciclovias_1.png" /> Ciclovias'
            });
var format_PolgonosECOPARQ_2 = new ol.format.GeoJSON();
var features_PolgonosECOPARQ_2 = format_PolgonosECOPARQ_2.readFeatures(json_PolgonosECOPARQ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolgonosECOPARQ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolgonosECOPARQ_2.addFeatures(features_PolgonosECOPARQ_2);
var lyr_PolgonosECOPARQ_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolgonosECOPARQ_2, 
                style: style_PolgonosECOPARQ_2,
                interactive: true,
                title: '<img src="styles/legend/PolgonosECOPARQ_2.png" /> Polígonos ECOPARQ'
            });
var format_SistemasdeTransporteEstructuradoLineas_3 = new ol.format.GeoJSON();
var features_SistemasdeTransporteEstructuradoLineas_3 = format_SistemasdeTransporteEstructuradoLineas_3.readFeatures(json_SistemasdeTransporteEstructuradoLineas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasdeTransporteEstructuradoLineas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemasdeTransporteEstructuradoLineas_3.addFeatures(features_SistemasdeTransporteEstructuradoLineas_3);
var lyr_SistemasdeTransporteEstructuradoLineas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SistemasdeTransporteEstructuradoLineas_3, 
                style: style_SistemasdeTransporteEstructuradoLineas_3,
                interactive: true,
    title: 'Sistemas de Transporte Estructurado (Lineas)<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_0.png" /> Ferrocarril Suburbano<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_1.png" /> Tren Ligero<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_2.png" /> Cablebús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_3.png" /> Cablebús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_4.png" /> Metro Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_5.png" /> Metro Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_6.png" /> Metro Línea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_7.png" /> Metro Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_8.png" /> Metro Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_9.png" /> Metro Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_10.png" /> Metro Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_11.png" /> Metro Línea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_12.png" /> Metro Línea 9<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_13.png" /> Metro Línea 12<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_14.png" /> Metro Línea A<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_15.png" /> Metro Línea B<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_16.png" /> Metrobús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_17.png" /> Metrobús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_18.png" /> Metrobús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_19.png" /> Metrobús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_20.png" /> Metrobús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_21.png" /> Metrobús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_22.png" /> Metrobús Línea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_23.png" /> Trolebús Línea 1 "Corredor Cero Emisiones Eje Central"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_24.png" /> Trolebús Línea 2 "Corredor Cero Emisiones Eje 2 - 2A Sur"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_25.png" /> Trolebús Lí­nea 3 "Corredor Cero Emisiones Eje 7 - 7A Sur"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_26.png" /> Trolebús Línea 4 "Metro Blv. Puerto Aéreo - Metro El Rosario"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_27.png" /> Trolebús Lí­nea 5 "San Felipe de Jesús - Metro Hidalgo"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_28.png" /> Trolebús Lí­nea 6 "Metro El Rosario - Metro Chapultepec"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_29.png" /> Trolebús Línea 7 "Lomas Estrella - Ciudad Universitaria"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_30.png" /> Trolebús Línea 8 "Circuito Politécnico"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_31.png" /> Trolebús Línea 9 "Iztacalco - Villa de Cortés"<br />'
        });
var format_SistemasdeTransporteEstructuradoEstaciones_4 = new ol.format.GeoJSON();
var features_SistemasdeTransporteEstructuradoEstaciones_4 = format_SistemasdeTransporteEstructuradoEstaciones_4.readFeatures(json_SistemasdeTransporteEstructuradoEstaciones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasdeTransporteEstructuradoEstaciones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemasdeTransporteEstructuradoEstaciones_4.addFeatures(features_SistemasdeTransporteEstructuradoEstaciones_4);
var lyr_SistemasdeTransporteEstructuradoEstaciones_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SistemasdeTransporteEstructuradoEstaciones_4, 
                style: style_SistemasdeTransporteEstructuradoEstaciones_4,
                interactive: true,
    title: 'Sistemas de Transporte Estructurado (Estaciones)<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_0.png" /> Ferrocarril Suburbano<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_1.png" /> Tren Ligero<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_2.png" /> Cablebús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_3.png" /> Cablebús Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_4.png" /> Metro Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_5.png" /> Metro Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_6.png" /> Metro Línea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_7.png" /> Metro Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_8.png" /> Metro Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_9.png" /> Metro Lí­nea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_10.png" /> Metro Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_11.png" /> Metro Lí­nea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_12.png" /> Metro Lí­nea 9<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_13.png" /> Metro Lí­nea 12<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_14.png" /> Metro Lí­nea A<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_15.png" /> Metro Lí­nea B<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_16.png" /> Metrobús Lí­nea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_17.png" /> Metrobús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_18.png" /> Metrobús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_19.png" /> Metrobús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_20.png" /> Metrobús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_21.png" /> Metrobús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_22.png" /> Metrobús Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_23.png" /> Trolebús Lí­nea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_24.png" /> Trolebús Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_25.png" /> Trolebús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_26.png" /> Trolebús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_27.png" /> Trolebús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_28.png" /> Trolebús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_29.png" /> Trolebús Línea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_30.png" /> Trolebús Línea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_4_31.png" /> Trolebús Lí­nea 9<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ciclovias_1.setVisible(true);lyr_PolgonosECOPARQ_2.setVisible(true);lyr_SistemasdeTransporteEstructuradoLineas_3.setVisible(true);lyr_SistemasdeTransporteEstructuradoEstaciones_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ciclovias_1,lyr_PolgonosECOPARQ_2,lyr_SistemasdeTransporteEstructuradoLineas_3,lyr_SistemasdeTransporteEstructuradoEstaciones_4];
lyr_Ciclovias_1.set('fieldAliases', {'Id': 'Id', 'NUMERO': 'NUMERO', 'NOMBRE': 'NOMBRE', 'TRAMO': 'TRAMO', 'KM': 'KM', 'INFRAESTRU': 'INFRAESTRU', });
lyr_PolgonosECOPARQ_2.set('fieldAliases', {'cajonsvehi': 'cajonsvehi', 'nombre': 'nombre', 'numparq': 'numparq', 'cartodb_id': 'cartodb_id', 'cajonsmoto': 'cajonsmoto', 'cajonsdisc': 'cajonsdisc', 'staecobici': 'staecobici', 'fuente': 'fuente', 'web': 'web', });
lyr_SistemasdeTransporteEstructuradoLineas_3.set('fieldAliases', {'termial': 'termial', 'objectid_1': 'objectid_1', 'ruta': 'ruta', 'agencia': 'agencia', 'linea': 'linea', 'estaciones': 'estaciones', 'longitud': 'longitud', 'cartodb_id': 'cartodb_id', 'correspond': 'correspond', 'estdepaso': 'estdepaso', 'estsubte': 'estsubte', 'estsuper': 'estsuper', 'etselevads': 'etselevads', 'lineascorr': 'lineascorr', 'cobertura': 'cobertura', 'fuente': 'fuente', });
lyr_SistemasdeTransporteEstructuradoEstaciones_4.set('fieldAliases', {'corrslinea': 'corrslinea', 'ruta': 'ruta', 'agencia': 'agencia', 'linea': 'linea', 'estacion': 'estacion', 'cartodb_id': 'cartodb_id', 'tipostcion': 'tipostcion', 'caract': 'caract', 'pertenecie': 'pertenecie', 'intrmodal': 'intrmodal', 'fuente': 'fuente', 'url_linea': 'url_linea', 'url_estaci': 'url_estaci', });
lyr_Ciclovias_1.set('fieldImages', {'Id': 'TextEdit', 'NUMERO': 'TextEdit', 'NOMBRE': 'TextEdit', 'TRAMO': 'TextEdit', 'KM': 'TextEdit', 'INFRAESTRU': 'TextEdit', });
lyr_PolgonosECOPARQ_2.set('fieldImages', {'cajonsvehi': 'TextEdit', 'nombre': 'TextEdit', 'numparq': 'TextEdit', 'cartodb_id': 'TextEdit', 'cajonsmoto': 'TextEdit', 'cajonsdisc': 'TextEdit', 'staecobici': 'TextEdit', 'fuente': 'TextEdit', 'web': 'TextEdit', });
lyr_SistemasdeTransporteEstructuradoLineas_3.set('fieldImages', {'termial': 'TextEdit', 'objectid_1': 'TextEdit', 'ruta': 'TextEdit', 'agencia': 'TextEdit', 'linea': 'TextEdit', 'estaciones': 'TextEdit', 'longitud': 'TextEdit', 'cartodb_id': 'TextEdit', 'correspond': 'TextEdit', 'estdepaso': 'TextEdit', 'estsubte': 'TextEdit', 'estsuper': 'TextEdit', 'etselevads': 'TextEdit', 'lineascorr': 'TextEdit', 'cobertura': 'TextEdit', 'fuente': 'TextEdit', });
lyr_SistemasdeTransporteEstructuradoEstaciones_4.set('fieldImages', {'corrslinea': 'TextEdit', 'ruta': 'TextEdit', 'agencia': 'TextEdit', 'linea': 'TextEdit', 'estacion': 'TextEdit', 'cartodb_id': 'TextEdit', 'tipostcion': 'TextEdit', 'caract': 'TextEdit', 'pertenecie': 'TextEdit', 'intrmodal': 'TextEdit', 'fuente': 'TextEdit', 'url_linea': 'TextEdit', 'url_estaci': 'TextEdit', });
lyr_Ciclovias_1.set('fieldLabels', {'Id': 'no label', 'NUMERO': 'no label', 'NOMBRE': 'no label', 'TRAMO': 'no label', 'KM': 'no label', 'INFRAESTRU': 'no label', });
lyr_PolgonosECOPARQ_2.set('fieldLabels', {'cajonsvehi': 'no label', 'nombre': 'no label', 'numparq': 'no label', 'cartodb_id': 'no label', 'cajonsmoto': 'no label', 'cajonsdisc': 'no label', 'staecobici': 'no label', 'fuente': 'no label', 'web': 'no label', });
lyr_SistemasdeTransporteEstructuradoLineas_3.set('fieldLabels', {'termial': 'no label', 'objectid_1': 'no label', 'ruta': 'no label', 'agencia': 'no label', 'linea': 'no label', 'estaciones': 'no label', 'longitud': 'no label', 'cartodb_id': 'no label', 'correspond': 'no label', 'estdepaso': 'no label', 'estsubte': 'no label', 'estsuper': 'no label', 'etselevads': 'no label', 'lineascorr': 'no label', 'cobertura': 'no label', 'fuente': 'no label', });
lyr_SistemasdeTransporteEstructuradoEstaciones_4.set('fieldLabels', {'corrslinea': 'no label', 'ruta': 'no label', 'agencia': 'no label', 'linea': 'no label', 'estacion': 'no label', 'cartodb_id': 'no label', 'tipostcion': 'no label', 'caract': 'no label', 'pertenecie': 'no label', 'intrmodal': 'no label', 'fuente': 'no label', 'url_linea': 'no label', 'url_estaci': 'no label', });
lyr_SistemasdeTransporteEstructuradoEstaciones_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});