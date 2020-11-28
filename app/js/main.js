$(function () {

    $('.specialties__inner').slick({
        arrows: false,
        dots: true,
        dotsClass: "my-dots",
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.private__galery').magnificPopup({
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

})