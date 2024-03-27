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

    var projection_SatelliteStreets_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_SatelliteStreets_1 = projection_SatelliteStreets_1.getExtent();
    var size_SatelliteStreets_1 = ol.extent.getWidth(projectionExtent_SatelliteStreets_1) / 256;
    var resolutions_SatelliteStreets_1 = new Array(14);
    var matrixIds_SatelliteStreets_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_SatelliteStreets_1[z] = size_SatelliteStreets_1 / Math.pow(2, z);
        matrixIds_SatelliteStreets_1[z] = z;
    }
    var lyr_SatelliteStreets_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://api.mapbox.com/styles/v1/iselasoria/cliuu268o00gf01q4ajckewr4/wmts?access_token=pk.eyJ1IjoiaXNlbGFzb3JpYSIsImEiOiJjbGl1dG81djIwMXQwM2xua3JjeW41M3ZjIn0.zLgXnQN9vz8LSI8Eg6Ud9g",
    attributions: ' ',
                                "layer": "cliuu268o00gf01q4ajckewr4",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_SatelliteStreets_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_SatelliteStreets_1),
                resolutions: resolutions_SatelliteStreets_1,
                matrixIds: matrixIds_SatelliteStreets_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Satellite Streets",
                            opacity: 1.0,
                            
                            
                          });
var format_BrokerSites_2 = new ol.format.GeoJSON();
var features_BrokerSites_2 = format_BrokerSites_2.readFeatures(json_BrokerSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrokerSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrokerSites_2.addFeatures(features_BrokerSites_2);
var lyr_BrokerSites_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BrokerSites_2, 
                style: style_BrokerSites_2,
                interactive: true,
                title: '<img src="styles/legend/BrokerSites_2.png" /> Broker Sites'
            });
var format_RestaurantTrendsData_3 = new ol.format.GeoJSON();
var features_RestaurantTrendsData_3 = format_RestaurantTrendsData_3.readFeatures(json_RestaurantTrendsData_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestaurantTrendsData_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestaurantTrendsData_3.addFeatures(features_RestaurantTrendsData_3);
var lyr_RestaurantTrendsData_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RestaurantTrendsData_3, 
                style: style_RestaurantTrendsData_3,
                interactive: true,
    title: 'Restaurant Trends Data<br />\
    <img src="styles/legend/RestaurantTrendsData_3_0.png" /> A<br />\
    <img src="styles/legend/RestaurantTrendsData_3_1.png" /> A-<br />\
    <img src="styles/legend/RestaurantTrendsData_3_2.png" /> A+<br />\
    <img src="styles/legend/RestaurantTrendsData_3_3.png" /> B<br />\
    <img src="styles/legend/RestaurantTrendsData_3_4.png" /> B-<br />\
    <img src="styles/legend/RestaurantTrendsData_3_5.png" /> B+<br />'
        });
var format_CBTLIdentifiedTradeArea_4 = new ol.format.GeoJSON();
var features_CBTLIdentifiedTradeArea_4 = format_CBTLIdentifiedTradeArea_4.readFeatures(json_CBTLIdentifiedTradeArea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTLIdentifiedTradeArea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTLIdentifiedTradeArea_4.addFeatures(features_CBTLIdentifiedTradeArea_4);
var lyr_CBTLIdentifiedTradeArea_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTLIdentifiedTradeArea_4, 
                style: style_CBTLIdentifiedTradeArea_4,
                interactive: true,
                title: '<img src="styles/legend/CBTLIdentifiedTradeArea_4.png" /> CBTL-Identified Trade Area'
            });
var format_TangoIdentifiedTradeArea_5 = new ol.format.GeoJSON();
var features_TangoIdentifiedTradeArea_5 = format_TangoIdentifiedTradeArea_5.readFeatures(json_TangoIdentifiedTradeArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TangoIdentifiedTradeArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TangoIdentifiedTradeArea_5.addFeatures(features_TangoIdentifiedTradeArea_5);
var lyr_TangoIdentifiedTradeArea_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TangoIdentifiedTradeArea_5, 
                style: style_TangoIdentifiedTradeArea_5,
                interactive: true,
                title: '<img src="styles/legend/TangoIdentifiedTradeArea_5.png" /> Tango-Identified Trade Area'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SatelliteStreets_1.setVisible(true);lyr_BrokerSites_2.setVisible(true);lyr_RestaurantTrendsData_3.setVisible(true);lyr_CBTLIdentifiedTradeArea_4.setVisible(true);lyr_TangoIdentifiedTradeArea_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SatelliteStreets_1,lyr_BrokerSites_2,lyr_RestaurantTrendsData_3,lyr_CBTLIdentifiedTradeArea_4,lyr_TangoIdentifiedTradeArea_5];
lyr_BrokerSites_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'city': 'city', });
lyr_RestaurantTrendsData_3.set('fieldAliases', {'CHAIN': 'CHAIN', 'GEOADDRESS': 'GEOADDRESS', 'GEOCITY': 'GEOCITY', 'GEOSTATE': 'GEOSTATE', 'GEOZIP': 'GEOZIP', 'GEOZIP4': 'GEOZIP4', 'COUNTY': 'COUNTY', 'DMA(MARKET)': 'DMA(MARKET)', 'SEGMENT': 'SEGMENT', 'SUBSEGMENT': 'SUBSEGMENT', 'CATEGORY': 'CATEGORY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'GEOQUALITY': 'GEOQUALITY', 'STORE_NO': 'STORE_NO', 'CHAIN_NO': 'CHAIN_NO', 'DMA_NO': 'DMA_NO', 'SEG_NO': 'SEG_NO', 'SUBSEG_NO': 'SUBSEG_NO', 'CAT_NO': 'CAT_NO', 'COUNTY_NO': 'COUNTY_NO', 'GEO_ST/CNTY_NO': 'GEO_ST/CNTY_NO', 'YR_BUILT': 'YR_BUILT', 'CO/FR': 'CO/FR', 'CO/FR_NO': 'CO/FR_NO', 'CURRENT_YRS': 'CURRENT_YRS', 'CNG(CURR_NATL_GRADE)': 'CNG(CURR_NATL_GRADE)', 'LABEL(CNG)': 'LABEL(CNG)', 'CNI(CURR_NATL_INDEX)': 'CNI(CURR_NATL_INDEX)', 'CURR_ANNUAL_SLS($000)': 'CURR_ANNUAL_SLS($000)', 'CMG(CURR_MKT_GRADE)': 'CMG(CURR_MKT_GRADE)', 'LABEL(CNG/CMG)': 'LABEL(CNG/CMG)', 'LABEL(CNG<PNG)': 'LABEL(CNG<PNG)', 'CMI(CURR_MKT_INDEX)': 'CMI(CURR_MKT_INDEX)', 'SURVEY_YR(LAST/C)': 'SURVEY_YR(LAST/C)', 'SURVEY_YR(NEXT/C)': 'SURVEY_YR(NEXT/C)', 'TTL_NO_SURVEYS(C)': 'TTL_NO_SURVEYS(C)', 'PAST_YRS': 'PAST_YRS', 'PNG(PAST_NATL_GRADE)': 'PNG(PAST_NATL_GRADE)', 'LABEL(PNG)': 'LABEL(PNG)', 'PNI(PAST_NATL_INDEX)': 'PNI(PAST_NATL_INDEX)', 'PAST_ANNUAL_SLS($000)': 'PAST_ANNUAL_SLS($000)', 'PMG(PAST_MKT_GRADE)': 'PMG(PAST_MKT_GRADE)', 'LABEL(PNG/PMG)': 'LABEL(PNG/PMG)', 'PMI(PAST_MKT_INDEX)': 'PMI(PAST_MKT_INDEX)', 'SURVEY_YR(LAST/P)': 'SURVEY_YR(LAST/P)', 'SURVEY_YR(NEXT/P)': 'SURVEY_YR(NEXT/P)', 'TTL_NO_SURVEYS(P)': 'TTL_NO_SURVEYS(P)', 'STATUS': 'STATUS', 'FACILITY_NAME': 'FACILITY_NAME', 'BUILD_DATE_MONTH': 'BUILD_DATE_MONTH', 'CLOSE_DATE_MONTH': 'CLOSE_DATE_MONTH', 'CLOSE_DATE_YEAR': 'CLOSE_DATE_YEAR', 'RELOCATE_MONTH': 'RELOCATE_MONTH', 'RELOCATE_YEAR': 'RELOCATE_YEAR', 'REOPEN_MONTH': 'REOPEN_MONTH', 'REOPEN_YEAR': 'REOPEN_YEAR', 'BUILDING_CODE': 'BUILDING_CODE', 'BUILDING_DESCRIPTION': 'BUILDING_DESCRIPTION', 'VENUE_CODE': 'VENUE_CODE', 'VENUE_DESCRIPTION': 'VENUE_DESCRIPTION', 'LOCATION_CODE': 'LOCATION_CODE', 'LOCATION_DESCRIPTION': 'LOCATION_DESCRIPTION', 'SUB_LOCATION_CODE': 'SUB_LOCATION_CODE', 'SUB_LOCATION_DESCRIPTION': 'SUB_LOCATION_DESCRIPTION', 'SERVICE_CODE': 'SERVICE_CODE', 'SERVICE_DESCRIPTION': 'SERVICE_DESCRIPTION', 'SUB_SERVICE_CODE': 'SUB_SERVICE_CODE', 'SUB_SERVICE_DESCRIPTION': 'SUB_SERVICE_DESCRIPTION', 'SALES_DRIVER_1_CD': 'SALES_DRIVER_1_CD', 'SALES_DRIVER_1_DESCRIPTION': 'SALES_DRIVER_1_DESCRIPTION', 'NO_BRANDS_SOLD': 'NO_BRANDS_SOLD', 'DUAL_BRAND_2_NO': 'DUAL_BRAND_2_NO', 'DUAL_BRAND_2': 'DUAL_BRAND_2', 'DUAL_BRAND_3_NO': 'DUAL_BRAND_3_NO', 'DUAL_BRAND_3': 'DUAL_BRAND_3', 'DUAL_BRAND_4_NO': 'DUAL_BRAND_4_NO', 'DUAL_BRAND_4': 'DUAL_BRAND_4', 'BRAND_RELATIONSHIP_CD': 'BRAND_RELATIONSHIP_CD', 'BRAND_RELATIONSHIP': 'BRAND_RELATIONSHIP', });
lyr_CBTLIdentifiedTradeArea_4.set('fieldAliases', {'id': 'id', 'temp_id': 'temp_id', 'new_area': 'new_area', 'geo_id': 'geo_id', 'lat': 'lat', 'lon': 'lon', 'layer': 'layer', 'path': 'path', 'type': 'type', });
lyr_TangoIdentifiedTradeArea_5.set('fieldAliases', {'selected': 'selected', 'seed_id': 'seed_id', 'optimizati': 'optimizati', 'addres': 'addres', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', 'lat': 'lat', 'lon': 'lon', 'comment': 'comment', });
lyr_BrokerSites_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', });
lyr_RestaurantTrendsData_3.set('fieldImages', {'CHAIN': 'TextEdit', 'GEOADDRESS': 'TextEdit', 'GEOCITY': 'TextEdit', 'GEOSTATE': 'TextEdit', 'GEOZIP': 'Range', 'GEOZIP4': 'Range', 'COUNTY': 'TextEdit', 'DMA(MARKET)': 'TextEdit', 'SEGMENT': 'TextEdit', 'SUBSEGMENT': 'TextEdit', 'CATEGORY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'GEOQUALITY': 'TextEdit', 'STORE_NO': 'Range', 'CHAIN_NO': 'Range', 'DMA_NO': 'Range', 'SEG_NO': 'Range', 'SUBSEG_NO': 'Range', 'CAT_NO': 'Range', 'COUNTY_NO': 'Range', 'GEO_ST/CNTY_NO': 'Range', 'YR_BUILT': 'Range', 'CO/FR': 'TextEdit', 'CO/FR_NO': 'CheckBox', 'CURRENT_YRS': 'TextEdit', 'CNG(CURR_NATL_GRADE)': 'TextEdit', 'LABEL(CNG)': 'TextEdit', 'CNI(CURR_NATL_INDEX)': 'Range', 'CURR_ANNUAL_SLS($000)': 'Range', 'CMG(CURR_MKT_GRADE)': 'TextEdit', 'LABEL(CNG/CMG)': 'TextEdit', 'LABEL(CNG<PNG)': 'TextEdit', 'CMI(CURR_MKT_INDEX)': 'Range', 'SURVEY_YR(LAST/C)': 'Range', 'SURVEY_YR(NEXT/C)': 'Range', 'TTL_NO_SURVEYS(C)': 'Range', 'PAST_YRS': 'TextEdit', 'PNG(PAST_NATL_GRADE)': 'TextEdit', 'LABEL(PNG)': 'TextEdit', 'PNI(PAST_NATL_INDEX)': 'Range', 'PAST_ANNUAL_SLS($000)': 'Range', 'PMG(PAST_MKT_GRADE)': 'TextEdit', 'LABEL(PNG/PMG)': 'TextEdit', 'PMI(PAST_MKT_INDEX)': 'Range', 'SURVEY_YR(LAST/P)': 'Range', 'SURVEY_YR(NEXT/P)': 'Range', 'TTL_NO_SURVEYS(P)': 'Range', 'STATUS': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'BUILD_DATE_MONTH': 'Range', 'CLOSE_DATE_MONTH': 'TextEdit', 'CLOSE_DATE_YEAR': 'TextEdit', 'RELOCATE_MONTH': 'Range', 'RELOCATE_YEAR': 'Range', 'REOPEN_MONTH': 'Range', 'REOPEN_YEAR': 'Range', 'BUILDING_CODE': 'TextEdit', 'BUILDING_DESCRIPTION': 'TextEdit', 'VENUE_CODE': 'TextEdit', 'VENUE_DESCRIPTION': 'TextEdit', 'LOCATION_CODE': 'TextEdit', 'LOCATION_DESCRIPTION': 'TextEdit', 'SUB_LOCATION_CODE': 'TextEdit', 'SUB_LOCATION_DESCRIPTION': 'TextEdit', 'SERVICE_CODE': 'TextEdit', 'SERVICE_DESCRIPTION': 'TextEdit', 'SUB_SERVICE_CODE': 'TextEdit', 'SUB_SERVICE_DESCRIPTION': 'TextEdit', 'SALES_DRIVER_1_CD': 'TextEdit', 'SALES_DRIVER_1_DESCRIPTION': 'TextEdit', 'NO_BRANDS_SOLD': 'Range', 'DUAL_BRAND_2_NO': 'Range', 'DUAL_BRAND_2': 'TextEdit', 'DUAL_BRAND_3_NO': 'TextEdit', 'DUAL_BRAND_3': 'TextEdit', 'DUAL_BRAND_4_NO': 'TextEdit', 'DUAL_BRAND_4': 'TextEdit', 'BRAND_RELATIONSHIP_CD': 'TextEdit', 'BRAND_RELATIONSHIP': 'TextEdit', });
lyr_CBTLIdentifiedTradeArea_4.set('fieldImages', {'id': 'TextEdit', 'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'geo_id': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'type': 'TextEdit', });
lyr_TangoIdentifiedTradeArea_5.set('fieldImages', {'selected': 'TextEdit', 'seed_id': 'TextEdit', 'optimizati': 'TextEdit', 'addres': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'cbsa_class': 'TextEdit', 'density_cl': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'comment': 'TextEdit', });
lyr_BrokerSites_2.set('fieldLabels', {'id': 'no label', 'name': 'inline label', 'city': 'no label', });
lyr_RestaurantTrendsData_3.set('fieldLabels', {'CHAIN': 'no label', 'GEOADDRESS': 'no label', 'GEOCITY': 'no label', 'GEOSTATE': 'no label', 'GEOZIP': 'no label', 'GEOZIP4': 'no label', 'COUNTY': 'no label', 'DMA(MARKET)': 'no label', 'SEGMENT': 'no label', 'SUBSEGMENT': 'no label', 'CATEGORY': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'GEOQUALITY': 'no label', 'STORE_NO': 'no label', 'CHAIN_NO': 'no label', 'DMA_NO': 'no label', 'SEG_NO': 'no label', 'SUBSEG_NO': 'no label', 'CAT_NO': 'no label', 'COUNTY_NO': 'no label', 'GEO_ST/CNTY_NO': 'no label', 'YR_BUILT': 'no label', 'CO/FR': 'no label', 'CO/FR_NO': 'no label', 'CURRENT_YRS': 'no label', 'CNG(CURR_NATL_GRADE)': 'no label', 'LABEL(CNG)': 'no label', 'CNI(CURR_NATL_INDEX)': 'no label', 'CURR_ANNUAL_SLS($000)': 'no label', 'CMG(CURR_MKT_GRADE)': 'no label', 'LABEL(CNG/CMG)': 'no label', 'LABEL(CNG<PNG)': 'no label', 'CMI(CURR_MKT_INDEX)': 'no label', 'SURVEY_YR(LAST/C)': 'no label', 'SURVEY_YR(NEXT/C)': 'no label', 'TTL_NO_SURVEYS(C)': 'no label', 'PAST_YRS': 'no label', 'PNG(PAST_NATL_GRADE)': 'no label', 'LABEL(PNG)': 'no label', 'PNI(PAST_NATL_INDEX)': 'no label', 'PAST_ANNUAL_SLS($000)': 'no label', 'PMG(PAST_MKT_GRADE)': 'no label', 'LABEL(PNG/PMG)': 'no label', 'PMI(PAST_MKT_INDEX)': 'no label', 'SURVEY_YR(LAST/P)': 'no label', 'SURVEY_YR(NEXT/P)': 'no label', 'TTL_NO_SURVEYS(P)': 'no label', 'STATUS': 'no label', 'FACILITY_NAME': 'no label', 'BUILD_DATE_MONTH': 'no label', 'CLOSE_DATE_MONTH': 'no label', 'CLOSE_DATE_YEAR': 'no label', 'RELOCATE_MONTH': 'no label', 'RELOCATE_YEAR': 'no label', 'REOPEN_MONTH': 'no label', 'REOPEN_YEAR': 'no label', 'BUILDING_CODE': 'no label', 'BUILDING_DESCRIPTION': 'no label', 'VENUE_CODE': 'no label', 'VENUE_DESCRIPTION': 'no label', 'LOCATION_CODE': 'no label', 'LOCATION_DESCRIPTION': 'no label', 'SUB_LOCATION_CODE': 'no label', 'SUB_LOCATION_DESCRIPTION': 'no label', 'SERVICE_CODE': 'no label', 'SERVICE_DESCRIPTION': 'no label', 'SUB_SERVICE_CODE': 'no label', 'SUB_SERVICE_DESCRIPTION': 'no label', 'SALES_DRIVER_1_CD': 'no label', 'SALES_DRIVER_1_DESCRIPTION': 'no label', 'NO_BRANDS_SOLD': 'no label', 'DUAL_BRAND_2_NO': 'no label', 'DUAL_BRAND_2': 'no label', 'DUAL_BRAND_3_NO': 'no label', 'DUAL_BRAND_3': 'no label', 'DUAL_BRAND_4_NO': 'no label', 'DUAL_BRAND_4': 'no label', 'BRAND_RELATIONSHIP_CD': 'no label', 'BRAND_RELATIONSHIP': 'no label', });
lyr_CBTLIdentifiedTradeArea_4.set('fieldLabels', {'id': 'no label', 'temp_id': 'no label', 'new_area': 'no label', 'geo_id': 'no label', 'lat': 'no label', 'lon': 'no label', 'layer': 'no label', 'path': 'no label', 'type': 'no label', });
lyr_TangoIdentifiedTradeArea_5.set('fieldLabels', {'selected': 'no label', 'seed_id': 'no label', 'optimizati': 'no label', 'addres': 'no label', 'city': 'no label', 'state': 'no label', 'cbsa_class': 'no label', 'density_cl': 'no label', 'lat': 'no label', 'lon': 'no label', 'comment': 'no label', });
lyr_TangoIdentifiedTradeArea_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});