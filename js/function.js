window.onload = function(){
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648598 , -48.577423 ),
            scrollWheel:false,
            zoom:12,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp)
    }

    function addMarker(lat,long,icon,content){
        var latLng = {'lat':lat,'lng':long}
        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        })

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffSet: new google.maps.Size(0,20)
        })

        infoWindow.open(map,marker)
    }

    initialize();

    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;">Meu Endereço</p>';
    addMarker(-27.5956863,-48.5526779,'',conteudo);
}