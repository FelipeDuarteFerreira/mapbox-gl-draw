var Polygon = require('./polygon');

var Circle = function(ctx, geojson) {
  Polygon.call(this, ctx, geojson);
  const toGeoJSON = this.toGeoJSON.bind(this)
  this.toGeoJSON = function () {
    const geoJSON = toGeoJSON()
    return Object.assign({}, geoJSON, {
      properties: Object.assign({}, this.properties, {
        circle: true
      }),
      geometry: Object.assign({}, geoJSON.geometry, {
        center: this.center,
        radius: this.radius
      })
    })
  }
};

Circle.prototype = Object.create(Polygon.prototype);

module.exports = Circle;
