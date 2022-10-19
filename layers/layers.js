var wms_layers = [];

var lyr_Hexagon15cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://discover.agrc.utah.gov/login/path/turtle-prague-shampoo-cherry/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "30cm_hexagon_utah",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Hexagon 15cm",
                            opacity: 0.842000,
                            
                            
                          });
              wms_layers.push([lyr_Hexagon15cm_0, 0]);
var format_PipesNew_1 = new ol.format.GeoJSON();
var features_PipesNew_1 = format_PipesNew_1.readFeatures(json_PipesNew_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipesNew_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipesNew_1.addFeatures(features_PipesNew_1);
var lyr_PipesNew_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PipesNew_1, 
                style: style_PipesNew_1,
                interactive: true,
                title: '<img src="styles/legend/PipesNew_1.png" /> PipesNew'
            });
var format_StructuresNew_2 = new ol.format.GeoJSON();
var features_StructuresNew_2 = format_StructuresNew_2.readFeatures(json_StructuresNew_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StructuresNew_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StructuresNew_2.addFeatures(features_StructuresNew_2);
var lyr_StructuresNew_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StructuresNew_2, 
                style: style_StructuresNew_2,
                interactive: true,
                title: '<img src="styles/legend/StructuresNew_2.png" /> StructuresNew'
            });

lyr_Hexagon15cm_0.setVisible(true);lyr_PipesNew_1.setVisible(true);lyr_StructuresNew_2.setVisible(true);
var layersList = [lyr_Hexagon15cm_0,lyr_PipesNew_1,lyr_StructuresNew_2];
lyr_PipesNew_1.set('fieldAliases', {'Autogenera': 'Autogenera', 'Name': 'Name', 'NetworkNam': 'NetworkNam', 'InsideDiam': 'InsideDiam', 'OutsideDia': 'OutsideDia', 'Length': 'Length', 'Slope': 'Slope', 'StartInver': 'StartInver', 'EndInvert': 'EndInvert', 'StructureS': 'StructureS', 'StructureE': 'StructureE', 'PartSizeNa': 'PartSizeNa', });
lyr_StructuresNew_2.set('fieldAliases', {'Autogenera': 'Autogenera', 'Name': 'Name', 'NetworkNam': 'NetworkNam', 'RimElevati': 'RimElevati', 'PartSizeNa': 'PartSizeNa', });
lyr_PipesNew_1.set('fieldImages', {'Autogenera': 'TextEdit', 'Name': 'TextEdit', 'NetworkNam': 'TextEdit', 'InsideDiam': 'TextEdit', 'OutsideDia': 'TextEdit', 'Length': 'TextEdit', 'Slope': 'TextEdit', 'StartInver': 'TextEdit', 'EndInvert': 'TextEdit', 'StructureS': 'TextEdit', 'StructureE': 'TextEdit', 'PartSizeNa': 'TextEdit', });
lyr_StructuresNew_2.set('fieldImages', {'Autogenera': 'TextEdit', 'Name': 'TextEdit', 'NetworkNam': 'TextEdit', 'RimElevati': 'TextEdit', 'PartSizeNa': 'TextEdit', });
lyr_PipesNew_1.set('fieldLabels', {'Autogenera': 'no label', 'Name': 'inline label', 'NetworkNam': 'no label', 'InsideDiam': 'inline label', 'OutsideDia': 'no label', 'Length': 'inline label', 'Slope': 'inline label', 'StartInver': 'inline label', 'EndInvert': 'inline label', 'StructureS': 'inline label', 'StructureE': 'inline label', 'PartSizeNa': 'no label', });
lyr_StructuresNew_2.set('fieldLabels', {'Autogenera': 'no label', 'Name': 'inline label', 'NetworkNam': 'no label', 'RimElevati': 'inline label', 'PartSizeNa': 'no label', });
lyr_StructuresNew_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});