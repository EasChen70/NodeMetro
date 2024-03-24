let map;
let marker;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    let center = { lat: 41.81974411010742, lng: -71.39521026611328 };
    let zoom = 17;

    map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: zoom,
    });

    marker = new google.maps.Marker({
        map: map,
        position: center,
        title: "Metro Nails",
    });
  }

  initMap()