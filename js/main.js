$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.bitcoin');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });