$('#sidebar2').affix({
    offset: {
        top: 600
    }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 50;

$body.scrollspy({
    target: '#leftCol',
    offset: navHeight
});