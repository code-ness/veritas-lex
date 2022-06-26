// The ymaps.ready() function will be called when
// all the API components are loaded and the DOM tree is generated.
ymaps.ready(init);
function init(){ 
    var myMap = new ymaps.Map("map", {
      center: [39.64651716, 66.93],
      zoom: 17
    }),
    myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // geometry type - point
      coordinates: [39.64651716, 66.92870835] // координаты точки
    }
  });
  myMap.geoObjects.add(myGeoObject); 
}
