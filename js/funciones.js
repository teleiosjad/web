/*-----------------------------------
                Menu
------------------------------------*/

posicionarMenu();
$(window).scroll(function() {    
    posicionarMenu();
});
function posicionarMenu() {
    var altura_del_header = $('.header').outerHeight(true);
    var altura_del_menu = $('.menu').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header){
        // $('.menu').addClass('fixed');
        $('.logo-blanco').css('opacity', '0').css('transition', '0.5s').css('margin-top', '15px');
        $('.logo-normal').css('opacity', '1').css('transition', '0.5s').css('margin-top', '15px');
        $('.nav-bar').css('background-color', 'white').css('transition', '0.5s').css('border-bottom', '1px solid rgba(128, 128, 128, 0.2)').css('height', '80px');
        $('nav ul.menu-pc').css('margin-top', '26px').css('color', 'black').css('transition', '0.5s');
        $('nav ul.menu-pc a').css('color', 'black').css('transition', '0.5s');
        $('.icon-menu').css('color', 'black').css('padding-top', '30px').css('transition', '0.5s');
       } else {
        // $('.menu').removeClass('fixed');
        $('.logo-blanco').css('opacity', '1').css('transition', '0.5s').css('margin-top', '42px');
        $('.logo-normal').css('opacity', '0').css('transition', '0.5s').css('margin-top', '42px');
        $('.nav-bar').css('background-color', 'rgba(255, 255, 255, 0)').css('transition', '0.5s').css('border-bottom', 'none');
        $('nav ul.menu-pc').css('margin-top', '26px').css('transition', '0.5s');
        $('nav ul.menu-pc a').css('color', 'white').css('transition', '0.5s');
        $('.icon-menu').css('color', 'white').css('padding-top', '30px').css('transition', '0.5s');
        
    }
}

/* -------------------------------------------------
                    Scroll down
--------------------------------------------------*/
$(function() {
    $('a[href="#scroll"]').on('click', function(e) {
        e.preventDefault();
        // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
                // $('html, body').animate({ scrollTop: '570px'}, 1000, 'linear');
                 $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -65}, 500, 'linear');
    });
});


/* -------------------------------------------------
            Smoth scroll to anchor
--------------------------------------------------*/
$(function() {
    $('.menu-pc a, .menu-responsive a').bind('click', function(event) {
       $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -65}, 500, 'swing');
        event.preventDefault();
    });
});


/* -------------------------------------------------
                    Api Map
--------------------------------------------------*/
function initMap() {
    var myLatLng = {lat: 18.491389, lng: -69.916972};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: myLatLng
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
}

/* -------------------------------------------------
                    Ir arriba
--------------------------------------------------*/
$(document).ready(function(){
 
    $('.ir-arriba, .logo').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

 
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
 
});

/* -------------------------------------------------
                  Menu Responsive
--------------------------------------------------*/
$(document).ready(function(){
    $('.icon-menu').click(function(){
        $('.menu-responsive').css('right', '0');
    });

     $('.c-icon-cross .icon-cross, .menu-responsive a').click(function(){
        $('.menu-responsive').css('right', '-290px');
    });
});





$( document ).ready( function() {

    $( '.sldr' ).each( function() {
        var th = $( this );
        th.sldr({
            focalClass    : 'focalPoint',
            offset        : th.width() / 2,
            sldrWidth     : 'responsive',
            nextSlide     : th.nextAll( '.sldr-nav.next:first' ),
            previousSlide : th.nextAll( '.sldr-nav.prev:first' ),
            selectors     : th.nextAll( '.selectors:first' ).find( 'li' ),
            toggle        : th.nextAll( '.captions:first' ).find( 'div' ),
            sldrInit      : sliderInit,
            sldrStart     : slideStart,
            sldrComplete  : slideComplete,
            sldrLoaded    : sliderLoaded,
            sldrAuto      : true,
            sldrTime      : 5000,
            hasChange     : true
        });
    });

});

function sliderInit( args ) {

}

/**
 * When individual slides are loaded
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function slideLoaded( args ) {

}

/**
 * When the full slider is loaded, after the DOM is manipulated
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function sliderLoaded( args ) {

}

/**
 * Before the slides change focal points
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function slideStart( args ) {

}

/**
 * After the slides are done changing focal points
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function slideComplete( args ) {

}        

  $(document).ready(function(){
            $('#submit').click(function(){
            var name = $('#nombre').val();
            var email = $('#correo').val();
            var message = $('#comentario').val();
            var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
             if(name ==''){

             }else if(email==''){

             }else if(!re.test(email)){
               $('#email').focus();
             }else if(message==''){

             }else{
             $.ajax({
               type:'POST',
               url:'message.php',
               data:{name:name, email:email, message:message},
               beforeSend:function(){
                $('#myModal').modal('show');
               },
               success:function(){
               
                 alert('se ha enviado');
                 $('#nombre').val('');
                 $('#correo').val('');
                 $('#comentario').val('');
               }
             });
            }
            });
 });