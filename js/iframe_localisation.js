var mapUrl = document.getElementById("carto");


function success(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;

  mapUrl.src = 'https://carto.droitauvelo.org/#17/' + latitude + '/' + longitude + '/grise-veloroute-magasins_sport-velocistes-abris_velo-antennes_adav-location_velo-sos_velo-points_durs-amenagements_cyclables-zones_travaux-vls';
}

function error() {
    mapUrl.src = 'https://carto.droitauvelo.org/#17/50.6368133/3.0616651/grise-veloroute-magasins_sport-velocistes-abris_velo-antennes_adav-location_velo-sos_velo-points_durs-amenagements_cyclables-zones_travaux-vls';
}

navigator.geolocation.getCurrentPosition(success, error);
