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
var format_RestaurantTrendsData_1 = new ol.format.GeoJSON();
var features_RestaurantTrendsData_1 = format_RestaurantTrendsData_1.readFeatures(json_RestaurantTrendsData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestaurantTrendsData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestaurantTrendsData_1.addFeatures(features_RestaurantTrendsData_1);
var lyr_RestaurantTrendsData_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RestaurantTrendsData_1, 
                style: style_RestaurantTrendsData_1,
                interactive: true,
    title: 'Restaurant Trends Data<br />\
    <img src="styles/legend/RestaurantTrendsData_1_0.png" /> A<br />\
    <img src="styles/legend/RestaurantTrendsData_1_1.png" /> A-<br />\
    <img src="styles/legend/RestaurantTrendsData_1_2.png" /> A+<br />\
    <img src="styles/legend/RestaurantTrendsData_1_3.png" /> B<br />\
    <img src="styles/legend/RestaurantTrendsData_1_4.png" /> B-<br />\
    <img src="styles/legend/RestaurantTrendsData_1_5.png" /> B+<br />'
        });
var format_IdentifiedSites_2 = new ol.format.GeoJSON();
var features_IdentifiedSites_2 = format_IdentifiedSites_2.readFeatures(json_IdentifiedSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdentifiedSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdentifiedSites_2.addFeatures(features_IdentifiedSites_2);
var lyr_IdentifiedSites_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IdentifiedSites_2, 
                style: style_IdentifiedSites_2,
                interactive: true,
                title: '<img src="styles/legend/IdentifiedSites_2.png" /> Identified Sites'
            });
var format_AdditionalIdentifiedSites_3 = new ol.format.GeoJSON();
var features_AdditionalIdentifiedSites_3 = format_AdditionalIdentifiedSites_3.readFeatures(json_AdditionalIdentifiedSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalIdentifiedSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalIdentifiedSites_3.addFeatures(features_AdditionalIdentifiedSites_3);
var lyr_AdditionalIdentifiedSites_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdditionalIdentifiedSites_3, 
                style: style_AdditionalIdentifiedSites_3,
                interactive: true,
    title: 'Additional Identified Sites<br />\
    <img src="styles/legend/AdditionalIdentifiedSites_3_0.png" /> Drive-Thru<br />\
    <img src="styles/legend/AdditionalIdentifiedSites_3_1.png" /> No Drive-Thru<br />'
        });
var format_TargetTradeAreas_4 = new ol.format.GeoJSON();
var features_TargetTradeAreas_4 = format_TargetTradeAreas_4.readFeatures(json_TargetTradeAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeAreas_4.addFeatures(features_TargetTradeAreas_4);
var lyr_TargetTradeAreas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TargetTradeAreas_4, 
                style: style_TargetTradeAreas_4,
                interactive: true,
                title: '<img src="styles/legend/TargetTradeAreas_4.png" /> Target Trade Areas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RestaurantTrendsData_1.setVisible(true);lyr_IdentifiedSites_2.setVisible(true);lyr_AdditionalIdentifiedSites_3.setVisible(true);lyr_TargetTradeAreas_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RestaurantTrendsData_1,lyr_IdentifiedSites_2,lyr_AdditionalIdentifiedSites_3,lyr_TargetTradeAreas_4];
lyr_RestaurantTrendsData_1.set('fieldAliases', {'CHAIN': 'CHAIN', 'GEOADDRESS': 'GEOADDRESS', 'GEOCITY': 'GEOCITY', 'GEOSTATE': 'GEOSTATE', 'GEOZIP': 'GEOZIP', 'GEOZIP4': 'GEOZIP4', 'COUNTY': 'COUNTY', 'DMA(MARKET)': 'DMA(MARKET)', 'SEGMENT': 'SEGMENT', 'SUBSEGMENT': 'SUBSEGMENT', 'CATEGORY': 'CATEGORY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'GEOQUALITY': 'GEOQUALITY', 'STORE_NO': 'STORE_NO', 'CHAIN_NO': 'CHAIN_NO', 'DMA_NO': 'DMA_NO', 'SEG_NO': 'SEG_NO', 'SUBSEG_NO': 'SUBSEG_NO', 'CAT_NO': 'CAT_NO', 'COUNTY_NO': 'COUNTY_NO', 'GEO_ST/CNTY_NO': 'GEO_ST/CNTY_NO', 'YR_BUILT': 'YR_BUILT', 'CO/FR': 'CO/FR', 'CO/FR_NO': 'CO/FR_NO', 'CURRENT_YRS': 'CURRENT_YRS', 'CNG(CURR_NATL_GRADE)': 'CNG(CURR_NATL_GRADE)', 'LABEL(CNG)': 'LABEL(CNG)', 'CNI(CURR_NATL_INDEX)': 'CNI(CURR_NATL_INDEX)', 'CURR_ANNUAL_SLS($000)': 'CURR_ANNUAL_SLS($000)', 'CMG(CURR_MKT_GRADE)': 'CMG(CURR_MKT_GRADE)', 'LABEL(CNG/CMG)': 'LABEL(CNG/CMG)', 'LABEL(CNG<PNG)': 'LABEL(CNG<PNG)', 'CMI(CURR_MKT_INDEX)': 'CMI(CURR_MKT_INDEX)', 'SURVEY_YR(LAST/C)': 'SURVEY_YR(LAST/C)', 'SURVEY_YR(NEXT/C)': 'SURVEY_YR(NEXT/C)', 'TTL_NO_SURVEYS(C)': 'TTL_NO_SURVEYS(C)', 'PAST_YRS': 'PAST_YRS', 'PNG(PAST_NATL_GRADE)': 'PNG(PAST_NATL_GRADE)', 'LABEL(PNG)': 'LABEL(PNG)', 'PNI(PAST_NATL_INDEX)': 'PNI(PAST_NATL_INDEX)', 'PAST_ANNUAL_SLS($000)': 'PAST_ANNUAL_SLS($000)', 'PMG(PAST_MKT_GRADE)': 'PMG(PAST_MKT_GRADE)', 'LABEL(PNG/PMG)': 'LABEL(PNG/PMG)', 'PMI(PAST_MKT_INDEX)': 'PMI(PAST_MKT_INDEX)', 'SURVEY_YR(LAST/P)': 'SURVEY_YR(LAST/P)', 'SURVEY_YR(NEXT/P)': 'SURVEY_YR(NEXT/P)', 'TTL_NO_SURVEYS(P)': 'TTL_NO_SURVEYS(P)', 'STATUS': 'STATUS', 'FACILITY_NAME': 'FACILITY_NAME', 'BUILD_DATE_MONTH': 'BUILD_DATE_MONTH', 'CLOSE_DATE_MONTH': 'CLOSE_DATE_MONTH', 'CLOSE_DATE_YEAR': 'CLOSE_DATE_YEAR', 'RELOCATE_MONTH': 'RELOCATE_MONTH', 'RELOCATE_YEAR': 'RELOCATE_YEAR', 'REOPEN_MONTH': 'REOPEN_MONTH', 'REOPEN_YEAR': 'REOPEN_YEAR', 'BUILDING_CODE': 'BUILDING_CODE', 'BUILDING_DESCRIPTION': 'BUILDING_DESCRIPTION', 'VENUE_CODE': 'VENUE_CODE', 'VENUE_DESCRIPTION': 'VENUE_DESCRIPTION', 'LOCATION_CODE': 'LOCATION_CODE', 'LOCATION_DESCRIPTION': 'LOCATION_DESCRIPTION', 'SUB_LOCATION_CODE': 'SUB_LOCATION_CODE', 'SUB_LOCATION_DESCRIPTION': 'SUB_LOCATION_DESCRIPTION', 'SERVICE_CODE': 'SERVICE_CODE', 'SERVICE_DESCRIPTION': 'SERVICE_DESCRIPTION', 'SUB_SERVICE_CODE': 'SUB_SERVICE_CODE', 'SUB_SERVICE_DESCRIPTION': 'SUB_SERVICE_DESCRIPTION', 'SALES_DRIVER_1_CD': 'SALES_DRIVER_1_CD', 'SALES_DRIVER_1_DESCRIPTION': 'SALES_DRIVER_1_DESCRIPTION', 'NO_BRANDS_SOLD': 'NO_BRANDS_SOLD', 'DUAL_BRAND_2_NO': 'DUAL_BRAND_2_NO', 'DUAL_BRAND_2': 'DUAL_BRAND_2', 'DUAL_BRAND_3_NO': 'DUAL_BRAND_3_NO', 'DUAL_BRAND_3': 'DUAL_BRAND_3', 'DUAL_BRAND_4_NO': 'DUAL_BRAND_4_NO', 'DUAL_BRAND_4': 'DUAL_BRAND_4', 'BRAND_RELATIONSHIP_CD': 'BRAND_RELATIONSHIP_CD', 'BRAND_RELATIONSHIP': 'BRAND_RELATIONSHIP', });
lyr_IdentifiedSites_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'city': 'city', });
lyr_AdditionalIdentifiedSites_3.set('fieldAliases', {'name': 'name', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'has_drive_': 'has_drive_', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy S': 'Accuracy S', 'Accuracy T': 'Accuracy T', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Numbe': 'Unit Numbe', 'City_1': 'City_1', 'State_1': 'State_1', 'County': 'County', 'Zip_1': 'Zip_1', 'Country': 'Country', 'Source': 'Source', 'category': 'category', });
lyr_TargetTradeAreas_4.set('fieldAliases', {'id': 'id', 'temp_id': 'temp_id', 'new_area': 'new_area', 'geo_id': 'geo_id', 'lat': 'lat', 'lon': 'lon', 'layer': 'layer', 'path': 'path', 'type': 'type', 'selected': 'selected', 'seed_id': 'seed_id', 'optimizati': 'optimizati', 'addres': 'addres', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', 'comment': 'comment', });
lyr_RestaurantTrendsData_1.set('fieldImages', {'CHAIN': 'TextEdit', 'GEOADDRESS': 'TextEdit', 'GEOCITY': 'TextEdit', 'GEOSTATE': 'TextEdit', 'GEOZIP': 'Range', 'GEOZIP4': 'Range', 'COUNTY': 'TextEdit', 'DMA(MARKET)': 'TextEdit', 'SEGMENT': 'TextEdit', 'SUBSEGMENT': 'TextEdit', 'CATEGORY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'GEOQUALITY': 'TextEdit', 'STORE_NO': 'Range', 'CHAIN_NO': 'Range', 'DMA_NO': 'Range', 'SEG_NO': 'Range', 'SUBSEG_NO': 'Range', 'CAT_NO': 'Range', 'COUNTY_NO': 'Range', 'GEO_ST/CNTY_NO': 'Range', 'YR_BUILT': 'Range', 'CO/FR': 'TextEdit', 'CO/FR_NO': 'CheckBox', 'CURRENT_YRS': 'TextEdit', 'CNG(CURR_NATL_GRADE)': 'TextEdit', 'LABEL(CNG)': 'TextEdit', 'CNI(CURR_NATL_INDEX)': 'Range', 'CURR_ANNUAL_SLS($000)': 'Range', 'CMG(CURR_MKT_GRADE)': 'TextEdit', 'LABEL(CNG/CMG)': 'TextEdit', 'LABEL(CNG<PNG)': 'TextEdit', 'CMI(CURR_MKT_INDEX)': 'Range', 'SURVEY_YR(LAST/C)': 'Range', 'SURVEY_YR(NEXT/C)': 'Range', 'TTL_NO_SURVEYS(C)': 'Range', 'PAST_YRS': 'TextEdit', 'PNG(PAST_NATL_GRADE)': 'TextEdit', 'LABEL(PNG)': 'TextEdit', 'PNI(PAST_NATL_INDEX)': 'Range', 'PAST_ANNUAL_SLS($000)': 'Range', 'PMG(PAST_MKT_GRADE)': 'TextEdit', 'LABEL(PNG/PMG)': 'TextEdit', 'PMI(PAST_MKT_INDEX)': 'Range', 'SURVEY_YR(LAST/P)': 'Range', 'SURVEY_YR(NEXT/P)': 'Range', 'TTL_NO_SURVEYS(P)': 'Range', 'STATUS': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'BUILD_DATE_MONTH': 'Range', 'CLOSE_DATE_MONTH': 'TextEdit', 'CLOSE_DATE_YEAR': 'TextEdit', 'RELOCATE_MONTH': 'Range', 'RELOCATE_YEAR': 'Range', 'REOPEN_MONTH': 'Range', 'REOPEN_YEAR': 'Range', 'BUILDING_CODE': 'TextEdit', 'BUILDING_DESCRIPTION': 'TextEdit', 'VENUE_CODE': 'TextEdit', 'VENUE_DESCRIPTION': 'TextEdit', 'LOCATION_CODE': 'TextEdit', 'LOCATION_DESCRIPTION': 'TextEdit', 'SUB_LOCATION_CODE': 'TextEdit', 'SUB_LOCATION_DESCRIPTION': 'TextEdit', 'SERVICE_CODE': 'TextEdit', 'SERVICE_DESCRIPTION': 'TextEdit', 'SUB_SERVICE_CODE': 'TextEdit', 'SUB_SERVICE_DESCRIPTION': 'TextEdit', 'SALES_DRIVER_1_CD': 'TextEdit', 'SALES_DRIVER_1_DESCRIPTION': 'TextEdit', 'NO_BRANDS_SOLD': 'Range', 'DUAL_BRAND_2_NO': 'Range', 'DUAL_BRAND_2': 'TextEdit', 'DUAL_BRAND_3_NO': 'TextEdit', 'DUAL_BRAND_3': 'TextEdit', 'DUAL_BRAND_4_NO': 'TextEdit', 'DUAL_BRAND_4': 'TextEdit', 'BRAND_RELATIONSHIP_CD': 'TextEdit', 'BRAND_RELATIONSHIP': 'TextEdit', });
lyr_IdentifiedSites_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', });
lyr_AdditionalIdentifiedSites_3.set('fieldImages', {'name': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'has_drive_': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy S': 'TextEdit', 'Accuracy T': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Numbe': 'TextEdit', 'City_1': 'TextEdit', 'State_1': 'TextEdit', 'County': 'TextEdit', 'Zip_1': 'TextEdit', 'Country': 'TextEdit', 'Source': 'TextEdit', 'category': 'TextEdit', });
lyr_TargetTradeAreas_4.set('fieldImages', {'id': 'TextEdit', 'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'geo_id': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'type': 'TextEdit', 'selected': 'TextEdit', 'seed_id': 'TextEdit', 'optimizati': 'TextEdit', 'addres': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'cbsa_class': 'TextEdit', 'density_cl': 'TextEdit', 'comment': 'TextEdit', });
lyr_RestaurantTrendsData_1.set('fieldLabels', {'CHAIN': 'no label', 'GEOADDRESS': 'no label', 'GEOCITY': 'no label', 'GEOSTATE': 'no label', 'GEOZIP': 'no label', 'GEOZIP4': 'no label', 'COUNTY': 'no label', 'DMA(MARKET)': 'no label', 'SEGMENT': 'no label', 'SUBSEGMENT': 'no label', 'CATEGORY': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'GEOQUALITY': 'no label', 'STORE_NO': 'no label', 'CHAIN_NO': 'no label', 'DMA_NO': 'no label', 'SEG_NO': 'no label', 'SUBSEG_NO': 'no label', 'CAT_NO': 'no label', 'COUNTY_NO': 'no label', 'GEO_ST/CNTY_NO': 'no label', 'YR_BUILT': 'no label', 'CO/FR': 'no label', 'CO/FR_NO': 'no label', 'CURRENT_YRS': 'no label', 'CNG(CURR_NATL_GRADE)': 'no label', 'LABEL(CNG)': 'no label', 'CNI(CURR_NATL_INDEX)': 'no label', 'CURR_ANNUAL_SLS($000)': 'no label', 'CMG(CURR_MKT_GRADE)': 'no label', 'LABEL(CNG/CMG)': 'no label', 'LABEL(CNG<PNG)': 'no label', 'CMI(CURR_MKT_INDEX)': 'no label', 'SURVEY_YR(LAST/C)': 'no label', 'SURVEY_YR(NEXT/C)': 'no label', 'TTL_NO_SURVEYS(C)': 'no label', 'PAST_YRS': 'no label', 'PNG(PAST_NATL_GRADE)': 'no label', 'LABEL(PNG)': 'no label', 'PNI(PAST_NATL_INDEX)': 'no label', 'PAST_ANNUAL_SLS($000)': 'no label', 'PMG(PAST_MKT_GRADE)': 'no label', 'LABEL(PNG/PMG)': 'no label', 'PMI(PAST_MKT_INDEX)': 'no label', 'SURVEY_YR(LAST/P)': 'no label', 'SURVEY_YR(NEXT/P)': 'no label', 'TTL_NO_SURVEYS(P)': 'no label', 'STATUS': 'no label', 'FACILITY_NAME': 'no label', 'BUILD_DATE_MONTH': 'no label', 'CLOSE_DATE_MONTH': 'no label', 'CLOSE_DATE_YEAR': 'no label', 'RELOCATE_MONTH': 'no label', 'RELOCATE_YEAR': 'no label', 'REOPEN_MONTH': 'no label', 'REOPEN_YEAR': 'no label', 'BUILDING_CODE': 'no label', 'BUILDING_DESCRIPTION': 'no label', 'VENUE_CODE': 'no label', 'VENUE_DESCRIPTION': 'no label', 'LOCATION_CODE': 'no label', 'LOCATION_DESCRIPTION': 'no label', 'SUB_LOCATION_CODE': 'no label', 'SUB_LOCATION_DESCRIPTION': 'no label', 'SERVICE_CODE': 'no label', 'SERVICE_DESCRIPTION': 'no label', 'SUB_SERVICE_CODE': 'no label', 'SUB_SERVICE_DESCRIPTION': 'no label', 'SALES_DRIVER_1_CD': 'no label', 'SALES_DRIVER_1_DESCRIPTION': 'no label', 'NO_BRANDS_SOLD': 'no label', 'DUAL_BRAND_2_NO': 'no label', 'DUAL_BRAND_2': 'no label', 'DUAL_BRAND_3_NO': 'no label', 'DUAL_BRAND_3': 'no label', 'DUAL_BRAND_4_NO': 'no label', 'DUAL_BRAND_4': 'no label', 'BRAND_RELATIONSHIP_CD': 'no label', 'BRAND_RELATIONSHIP': 'no label', });
lyr_IdentifiedSites_2.set('fieldLabels', {'id': 'no label', 'name': 'inline label', 'city': 'no label', });
lyr_AdditionalIdentifiedSites_3.set('fieldLabels', {'name': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'has_drive_': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Accuracy S': 'no label', 'Accuracy T': 'no label', 'Number': 'no label', 'Street': 'no label', 'Unit Type': 'no label', 'Unit Numbe': 'no label', 'City_1': 'no label', 'State_1': 'no label', 'County': 'no label', 'Zip_1': 'no label', 'Country': 'no label', 'Source': 'no label', 'category': 'no label', });
lyr_TargetTradeAreas_4.set('fieldLabels', {'id': 'no label', 'temp_id': 'no label', 'new_area': 'no label', 'geo_id': 'no label', 'lat': 'no label', 'lon': 'no label', 'layer': 'no label', 'path': 'no label', 'type': 'no label', 'selected': 'no label', 'seed_id': 'no label', 'optimizati': 'no label', 'addres': 'no label', 'city': 'no label', 'state': 'no label', 'cbsa_class': 'no label', 'density_cl': 'no label', 'comment': 'no label', });
lyr_TargetTradeAreas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});