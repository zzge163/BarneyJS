EsriLeaflet.Controls.Scale = L.Control.extend({
    options: {
        position: 'bottomleft',
        maxWidth: 100,
        metric: true,
        imperial: true,
        updateWhenIdle: false
    },

    onAdd: function (map) {
        this._map = map;

        var className = 'leaflet-control-scale',
            container = L.DomUtil.create('div', className),
            options = this.options;

        this._addScales(options, className, container);

        map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        map.whenReady(this._update, this);

        return container;
    },

    onRemove: function (map) {
        map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
    },

    _addScales: function (options, className, container) {
        var innerLineDiv;
        if (options.metric) {
            this._mScaleText = L.DomUtil.create('div', className + '-text-up', container);

            innerLineDiv = L.DomUtil.create('div','',container);
            this._mScale = L.DomUtil.create('div', className + '-line', innerLineDiv);
        }
        if (options.imperial) {
            if (innerLineDiv === undefined) {
                this._iScaleText = L.DomUtil.create('div', className + '-text-up', container);

                innerLineDiv = L.DomUtil.create('div','',container);
                this._iScale = L.DomUtil.create('div', className + '-line', innerLineDiv);
            } else {
                this._iScale = L.DomUtil.create('div', className + '-line', innerLineDiv);
                this._iScaleText = L.DomUtil.create('div', className + '-text-down', container);
            }
        }

    },

    _update: function () {
        var bounds = this._map.getBounds(),
            centerLat = bounds.getCenter().lat,
            halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
            dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,

            size = this._map.getSize(),
            options = this.options,
            maxMeters = 0;

        if (size.x > 0) {
            maxMeters = dist * (options.maxWidth / size.x);
        }

        this._updateScales(options, maxMeters);
    },

    _updateScales: function (options, maxMeters) {
        if (options.metric && maxMeters) {
            this._updateMetric(maxMeters);
        }

        if (options.imperial && maxMeters) {
            this._updateImperial(maxMeters);
        }
    },

    _updateMetric: function (maxMeters) {
        var meters = this._getRoundNum(maxMeters);

        this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
        this._mScaleText.innerHTML = meters < 1000 ? meters + ' 米' : (meters / 1000) + ' 千米';
        //var mLength = meters < 1000 ? meters + ' 米' : (meters / 1000) + ' 千米';
        //this._mScale.innerHTML = '<div style="font-size: 11px;height:11px; margin-top: -10px;">' + mLength + '</div>';
    },

    _updateImperial: function (maxMeters) {
        var maxFeet = maxMeters * 3.2808399,
            scale = this._iScaleText,
            maxMiles, miles, feet;

        if (maxFeet > 5280) {
            maxMiles = maxFeet / 5280;
            miles = this._getRoundNum(maxMiles);

            scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
            scale.innerHTML = miles + ' 英里';

        } else {
            feet = this._getRoundNum(maxFeet);

            scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
            scale.innerHTML = feet + ' 英尺';
        }
    },

    _getScaleWidth: function (ratio) {
        return Math.round(this.options.maxWidth * ratio) - 10;
    },

    _getRoundNum: function (num) {
        var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
            d = num / pow10;

        d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;

        return pow10 * d;
    }
});

L.esri.Scale = L.esri.Controls.Scale;

L.esri.Controls.scale = function (options) {
    return new L.esri.Controls.Scale(options);
};

L.esri.scale = function (options) {
    return new L.esri.Controls.Scale(options);
};
