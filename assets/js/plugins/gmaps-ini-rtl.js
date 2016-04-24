// https://developers.google.com/maps/documentation/javascript/examples/
function initMap() {

    var nscmap = new google.maps.Map(document.getElementById('nscmap'), {
        zoom: 10,
        scrollwheel: false,
        center: {lat: -33.886209, lng: 151.157095},  // Norton Street Leichhardt Chiropractic & Health Centre.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
    });

    var nscinfowindow = new google.maps.InfoWindow;
    nscinfowindow.setContent('<b>Norton Street Leichhardt Chiropractic Health Centre</b>');

    var nscmarker = new google.maps.Marker({
        map: nscmap,
        clickable: false,
        position: {lat: -33.886209, lng: 151.157095}
    });

    var kccmap = new google.maps.Map(document.getElementById('kccmap'), {
        zoom: 16,
        scrollwheel: false,
        center: {lat: -33.933203, lng: 151.229963},  // Kingsford Chiropractic Clinic.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
    });

    var kccinfowindow = new google.maps.InfoWindow;
    kccinfowindow.setContent('<b>Kingsford Chiropractic Clinic</b>');

    var kccmarker = new google.maps.Marker({
        map: kccmap,
        clickable: false,
        position: {lat: -33.933203, lng: 151.229963}
    });


}
