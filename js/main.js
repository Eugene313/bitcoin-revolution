$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.bitcoin');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
$('.count  p .data').append(strDate);
$('.count  p .counter').append('-06:09:10');
