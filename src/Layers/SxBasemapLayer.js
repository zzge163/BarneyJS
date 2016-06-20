(function (EsriLeaflet) {

    var tileProtocol = (window.location.protocol !== 'https:') ? 'http:' : 'https:';

    EsriLeaflet.Layers.SxBasemapLayer = L.TileLayer.extend({
        statics: {
            YOUMAP_TILES: {
                VectorMap: {
                    urlTemplate: tileProtocol + '//emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxbasemap/MapServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: { //图层对应的option
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                VectorMapLabel: {
                    urlTemplate: tileProtocol + '//emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxbasemaplabel/MapServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ImgMap: {
                    urlTemplate: tileProtocol + '//emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsximgmap/MapServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ImgMapLabel: {
                    urlTemplate: tileProtocol + '//emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsximglabel/MapServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ShadeMap: {
                    urlTemplate: tileProtocol + '//emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxshademap/MapServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ShadeMapLabel: {
                    urlTemplate: tileProtocol + '//emap.shasm.gov.cn/TDTbasemapAggeregator2/rest/services/tdtsxshademaplabel/MapServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                }
            },
            TIANDITU_TILES: {
                VectorMap: {
                    urlTemplate: tileProtocol + '//1.85.55.27:8080/ServiceSystem/services/rest/SxBaseMap_XX/{token}/TileServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: { //图层对应的option
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                VectorMapLabel: {
                    urlTemplate: tileProtocol + '//1.85.55.27:8080/ServiceSystem/services/rest/SxBaseMap_LB/{token}/TileServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ImgMap: {
                    urlTemplate: tileProtocol + '//1.85.55.27:8080/ServiceSystem/services/rest/SxImgMap/{token}/TileServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        zoomOffset: -6,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ImgMapLabel: {
                    urlTemplate: tileProtocol + '//1.85.55.27:8080/ServiceSystem/services/rest/SxImgLabelMap/{token}/TileServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        zoomOffset: -6,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ShadeMap: {
                    urlTemplate: tileProtocol + '//1.85.55.27:8080/ServiceSystem/services/rest/SxImgMap/{token}/TileServer/tile/{z}/{y}/{x}/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                },
                ShadeMapLabel: {
                    urlTemplate: tileProtocol + '//1.85.55.27:8080/ServiceSystem/services/rest/SxImgLabelMap/{token}/TileServer/tile/{z}/{y}/{x}',
                    attributionUrl: '',
                    options: {
                        hideLogo: true,
                        logoPosition: 'bottomright',
                        //zoomOffset: -1,
                        minZoom: 1,
                        maxZoom: 19,
                        attribution: "@审图号：陕S(2015)053号 数据来源：天地图 天地图陕西"
                    }
                }
            }
        },
        initialize: function (key, options) {
            var config;

            // merge passed options into the config options
            var firstOptions = L.Util.setOptions(this, options);

            // 不指定style则默认使用天地图类型的token
            if (firstOptions.style === undefined || firstOptions.style === "") {
                firstOptions.style = L.esri.sxKey().TIANDITU;
            }

            // 验证服务名，设置token
            if (firstOptions.style === L.esri.sxKey().TIANDITU) {
                // set the config variable with the appropriate config object
                if (typeof key === 'string' && EsriLeaflet.SxBasemapLayer.TIANDITU_TILES[key]) {
                    config = EsriLeaflet.SxBasemapLayer.TIANDITU_TILES[key];
                } else {
                    throw new Error('L.esri.SxBasemapLayer: 无效的参数. Use one of "VectorMap", "VectorMapLabel", "ImgMap", "ImgMapLabel", "ShadeMap" or "ShadeMapLabel"');
                }
                var data = {
                    x: "{x}",
                    y: "{y}",
                    z: "{z}",
                    token: firstOptions.token
                };
                config.urlTemplate = L.Util.template(config.urlTemplate, L.extend(data, this.options));
            } else if (firstOptions.style === L.esri.sxKey().YOUMAP) {
                // set the config variable with the appropriate config object
                if (typeof key === 'string' && EsriLeaflet.SxBasemapLayer.YOUMAP_TILES[key]) {
                    config = EsriLeaflet.SxBasemapLayer.YOUMAP_TILES[key];
                } else {
                    throw new Error('L.esri.SxBasemapLayer: 无效的参数. Use one of "VectorMap", "VectorMapLabel", "ImgMap", "ImgMapLabel", "ShadeMap" or "ShadeMapLabel"');
                }
                config.urlTemplate += ('?token=' + firstOptions.token);
            }

            // 删除自定义属性，避免引起leaflet框架报错
            //if (firstOptions.hasOwnProperty("token")) {
            //    delete firstOptions.token;
            //}
            //if (firstOptions.hasOwnProperty("style")) {
            //    delete firstOptions.style;
            //}

            // merge passed options into the config options
            var finalOptions = L.Util.extend(config.options, firstOptions);

            // call the initialize method on L.TileLayer to set everything up
            L.TileLayer.prototype.initialize.call(this, config.urlTemplate, finalOptions);

            this._logo = new EsriLeaflet.Controls.Logo({
                position: config.options.logoPosition
            });
        },
        onAdd: function (map) {
            if (!this.options.hideLogo && !map._hasEsriLogo) {
                this._logo.addTo(map);
                map._hasEsriLogo = true;
            }

            //if(this.options.pane && EsriLeaflet.Support.pointerEvents){
            //   this._initPane();
            //}

            L.TileLayer.prototype.onAdd.call(this, map);
        },
        onRemove: function (map) {
            // check to make sure the logo hasn't already been removed
            if (!map._hasEsriLogo && this._logo && this._logo._container) {
                map.removeControl(this._logo);
                map._hasEsriLogo = false;
            }

            L.TileLayer.prototype.onRemove.call(this, map);

            map.off('moveend', this._updateMapAttribution, this);
        }

    });

    EsriLeaflet.SxBasemapLayer = EsriLeaflet.Layers.SxBasemapLayer;

    EsriLeaflet.Layers.sxBasemapLayer = function (key, options) {
        return new EsriLeaflet.Layers.SxBasemapLayer(key, options);
    };

    EsriLeaflet.sxBasemapLayer = function (key, options) {
        return new EsriLeaflet.Layers.SxBasemapLayer(key, options);
    };

})(EsriLeaflet);