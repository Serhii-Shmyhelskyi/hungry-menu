$(function () {

    $('.private__gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list-2').slideToggle();
    });

})

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.4454189, lng: 30.4774513 };
    const uluru2 = { lat: 50.5098645, lng: 30.4062864 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
    const marker2 = new google.maps.Marker({
        position: uluru2,
        map: map,
    });
}

var mySwiper = new Swiper('.specialties__container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})