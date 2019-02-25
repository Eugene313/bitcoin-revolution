$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.bitcoin');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
$('.count  p .data').append(strDate);
var minutes = '0'+6;
var seconds = 30;
var mseconds = 99;
var count= function(){
    mseconds--
    if (mseconds < 0 || mseconds === 0){
        seconds--;
        if (seconds < 10 ){
            seconds = '0'+ (seconds);
        }
        mseconds+=99
        if(seconds < 0 || seconds === 0 || seconds === '00'){
            minutes = '0'+ (minutes - 1);
            seconds = 59;
        }
    }
    var timer = ' ' + minutes + ' : '+ seconds + ' : ' + mseconds ;
    $('.count  p .counter').html(timer);
}
setInterval(count,9);

$('.laptop button').click(function(){
    $('.left').css({
        'opacity':'0'
    });
    setTimeout(function(){
        $('.left').css({
            'width':'0'
        });
    },700)
    $('.first').css({
        'background':'none',
        'background-color':'#000000'
    })
})

