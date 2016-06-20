(function (factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(require('leaflet'));
    } else {
        window.providers = factory(window.L);
    }
})(function (L) {
    var providers = {};

    providers['VectorMap'] = {
        map: {
            title: '地图',
            icon: 'icons/baseSnap.png',
            layer: L.tileLayer('http://emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxbasemap/MapServer/tile/{z}/{y}/{x}', {
                //zoomOffset: -1,
                minZoom: 1,
                maxZoom: 19,
                attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
            })
        },
        label: {
            title: '显示注记',
            icon: 'icons/baseSnap.png',
            layer: L.tileLayer('http://emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxbasemaplabel/MapServer/tile/{z}/{y}/{x}', {
                //zoomOffset: -1,
                minZoom: 1,
                maxZoom: 19,
                attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
            })
        }
    };

    providers['ImgMap'] = {
        map: {
            title: '影像',
            icon: 'icons/imageSnap.png',
            layer: L.tileLayer('http://emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsximgmap/MapServer/tile/{z}/{y}/{x}', {
                //zoomOffset: -1,
                minZoom: 1,
                maxZoom: 19,
                attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
            })
        },
        label: {
            title: '显示注记',
            icon: 'icons/imageSnap.png',
            layer: L.tileLayer('http://emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsximglabel/MapServer/tile/{z}/{y}/{x}', {
                //zoomOffset: -1,
                minZoom: 1,
                maxZoom: 19,
                attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
            })
        },
        app: {
            title: '影像信息',
            icon: 'icons/imageSnap.png',
            layer: L.tileLayer('http://emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsximglabel/MapServer/tile/{z}/{y}/{x}', {
                //zoomOffset: -1,
                minZoom: 1,
                maxZoom: 19,
                attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
            })
        }
    };

    providers['ShadeMap'] = {
        map: {
            title: '地形',
            icon: 'icons/shadeSnap.png',
            layer: L.tileLayer('http://emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxshademap/MapServer/tile/{z}/{y}/{x}', {
                //zoomOffset: -1,
                minZoom: 1,
                maxZoom: 19,
                attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
            })
        },
        label: {
            title: '显示注记',
            icon: 'icons/shadeSnap.png',
            layer: L.tileLayer('http://emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxshademaplabel/MapServer/tile/{z}/{y}/{x}', {
                //zoomOffset: -1,
                minZoom: 1,
                maxZoom: 19,
                attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
            })
        }
    };

    return providers;
});