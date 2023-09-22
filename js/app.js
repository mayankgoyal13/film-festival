var mapOptions = {
    center: [43.641586, -79.388731],
    zoom: 15
}
var map = new L.map('map', mapOptions);
L.marker([43.641586, -79.388731]).addTo(map)
 .bindPopup('NETFLIX FILM FESTIVAL,ROGERS CENTER,TORONTO')
 .openPopup();
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);