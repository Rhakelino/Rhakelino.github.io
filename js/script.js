//event pada saat link di klik
$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan = $(this).attr('href')
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50

    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});

$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

});
 


     //parallax
     $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if(wScroll > $('.portfolio').offset().top -250 ) {
            $('.portfolio .thumbnail').each(function(i){
                setTimeout(function(){
                    $('.portfolio .thumbnail').eq(i).addClass('muncul');
                }, 300 * i)

            })

            
        }

     })
















