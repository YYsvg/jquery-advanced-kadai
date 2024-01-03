$(function(){

    $('.button-more').on('mouseover',function(){
        // ボタンにアニメーションをつける　半透明にする
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        }, 100);
    });

    $('.button-more').on('mouseout',function(){
        $(this).animate({
            opacity: 1.0,
            marginLeft:0
        });
    });

    // カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
});

