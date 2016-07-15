$('#sidebar').affix({
    offset: {
        top: 600
    }
});

var $body   = $(document.body);
var navHeight = $('.#myCarousel').outerHeight(true) + 200;

$body.scrollspy({
    target: '#sec1',
    offset: navHeight
});