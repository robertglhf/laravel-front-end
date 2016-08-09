$(document).ready(function(){

    $('li').click(function(){
        $(this).addClass('selected-item').siblings().removeClass('selected-item');
    });

    if ($('.offers ul li').is('.selected-item') || $('.offers ul li').hasClass('.selected-item')) {
        $('.showcase--fish').css({
            'display' : 'flex'
        })
    }

    // $('.showcase img')
    //         .mouseenter( function() {
    //             $(this).css({
    //                 'border' : '1px solid black'
    //             })
    //         })
    //         .mouseleave( function(){
    //                 $(this).css({
    //                     'border' : '0px solid black'
    //             })
    //         })
});


$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 50 ) {
        $('.dsktp').css({
            'background-color' : 'white',
        });
        $('.dsktp ul li a').css({
             'color' : 'black'
        });
    }
    if (scroll < 50) {
        $('.dsktp').css({
            'background-color' : ''
        });
        $('.dsktp ul li a').css({
             'color' : 'white'
        });
    }

    //parallax

    $('.parallax').css({
        'transform' : 'translate(0px,'+scroll/65 +'%)'
    })


});




