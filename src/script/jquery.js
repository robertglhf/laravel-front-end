$(document).ready(function(){

    var button = $('.m-button');
    var mNav = $('mobile--nav');
    button.click(function(){
      console.log('shit');
      mNav.css({'display' : 'flex'})
    });

    //random bg img
    var images = ['hero2.png']
    $('.hero-img').css({'background-image': 'url(images/' + images[Math.floor(Math.random()* images.length)]+ ')'});

    //ajax tabs
    $("#container li a").click(function() {

        $("#ajax-content").empty().append("");
        $("#container li a").removeClass('current');
        $(this).addClass('current');

        $.ajax({ url: this.href , success: function(html) {
            $("#ajax-content").empty().append(html);
            console.log(html);
            }
        });
    return false;
    });

    // <div id='loading'>Loading...</div>

    // $("#ajax-content").empty().append("<div id='loading'><img src='images/loading.gif' alt='Loading' /></div>");
    $.ajax({ url: 'fish.html', success: function(html) {
        $("#ajax-content").empty().append(html);
        }
    });

    //tabs selected
    //
    // $('a').click(function(){
    //     $('a').parent().addClass('selected-item').siblings().removeClass('selected-item');
    // });

    $('a').click(function(){
      $('ul li').removeClass('selected-item');
      $('this').addClass('selected-item');
    })

    if ($('.offers ul li').is('.selected-item') || $('.offers ul li').hasClass('.selected-item')) {
        $('.showcase--fish').css({
            'display' : 'flex'
        })
    }


});

//nav bg

$(window).scroll(function () {
    var pScroll = $(this).scrollTop();

    if (pScroll >= 50 ) {
        $('.dsktp').css({
            'background-color' : 'white',
        });
        $('.dsktp ul li a').css({
             'color' : 'black'
        });
    }
    if (pScroll < 50) {
        $('.dsktp').css({
            'background-color' : 'white'
        });
        $('.dsktp ul li a').css({
             'color' : 'black'
        });
    }

//navbs

    //parallax

    $('.parallax').css({
        'transform' : 'translate(0px,'+pScroll/65 +'%)'
    })

});
