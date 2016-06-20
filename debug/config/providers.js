(function(factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(require('leaflet'));
    } else {
        window.providers = factory(window.L);
    }
})(function(L) {
    var providers = {};

    providers['OpenStreetMap_Mapnik'] = {
        title: 'osm',
        icon: 'icons/openstreetmap_mapnik.png',
        layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 19
        })
    };

    providers['OpenStreetMap_BlackAndWhite'] = {
        title: 'osm bw',
        icon: 'icons/openstreetmap_blackandwhite.png',
        layer: L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 18
        })
    };

    providers['OpenStreetMap_DE'] = {
        title: 'osm de',
        icon: 'icons/openstreetmap_de.png',
        layer: L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 18
        })
    };

    return providers;
});