
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Habilitados2019ITrim_1": {
            "type": "geojson",
            "data": json_Habilitados2019ITrim_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Habilitados2019ITrim_1_0",
            "type": "circle",
            "source": "Habilitados2019ITrim_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Concesionaria'], 'Calidda'], ['/', 7.5590551182, 2], ['==', ['get', 'Concesionaria'], 'Contugas'], ['/', 7.5590551182, 2], ['==', ['get', 'Concesionaria'], 'Quavii'], ['/', 7.5590551182, 2], 1], 'circle-color': ['case', ['==', ['get', 'Concesionaria'], 'Calidda'], '#fec980', ['==', ['get', 'Concesionaria'], 'Contugas'], '#c7e9ad', ['==', ['get', 'Concesionaria'], 'Quavii'], '#2b83ba', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'Concesionaria'], 'Calidda'], 1.0, ['==', ['get', 'Concesionaria'], 'Contugas'], 1.0, ['==', ['get', 'Concesionaria'], 'Quavii'], 1.0, 1], 'circle-stroke-width': ['case', ['==', ['get', 'Concesionaria'], 'Calidda'], 1, ['==', ['get', 'Concesionaria'], 'Contugas'], 1, ['==', ['get', 'Concesionaria'], 'Quavii'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'Concesionaria'], 'Calidda'], '#232323', ['==', ['get', 'Concesionaria'], 'Contugas'], '#232323', ['==', ['get', 'Concesionaria'], 'Quavii'], '#232323', '#000000']}
        }
],
}