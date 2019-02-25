$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.bitcoin');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

var d = new Date();
var strDate = '<i class="far fa-calendar-alt"></i>' + ' '+ d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
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
    var timer = ' ' + '<i class="fas fa-stopwatch"></i>' + ' ' + minutes + ' : '+ seconds + ' : ' + mseconds;
    $('.count  p .counter').html(timer);
}
setInterval(count,9);

$('.laptop button').click(function(){
    $('.left').css({
        'opacity':'0'
    });
    setTimeout(function(){
        $('.left').css({
            'width':'0',
            'height': '30%'
        });
    },700)
    $('.first').css({
        'background':'none',
        'background-color':'#000000'
    })
});

$(window).on("scroll", function() {
    if (window.pageYOffset > 200) {
        $('.logo img').css({
            'height': '50px'
        });
        $('.nav-bar').css({
            'background':'#000000',
            'padding':'5px'
    });
        }
        if (window.pageYOffset < 200) {
            $('.logo img').css({
                'height': '60px',
            });
            $('.nav-bar').css({
                'background': 'none',
                'padding':'1rem'
            });
        }
    
});


//API random people
    var peopleRandom = function () {
    let country3 = 'https://uinames.com/api/?ext';
    var xhr = new XMLHttpRequest();

    xhr.open('GET', country3, false);

    xhr.send();

    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        var people = JSON.parse(xhr.responseText);
        
    }
    let firstChart = '<img class="people-photo" src="';
    let secontChart = '" alt="" width="57" height="57">';
    let peoplePhoto = people.photo;
    let fullPhoto = firstChart + peoplePhoto + secontChart;

    let firstName = '<span class="people-name">';
    let secontName = '</span><span class="people-name">just made</span>';
    let peopleName = people.name;
    let peopleSurname = people.surname.charAt(0)
    let fullName = firstName + peopleName + ' ' + peopleSurname + '. ' + secontName;

    let firstProfit = '<span class="people-profit">$';
    let secontProfit = '</span>';
    let randomProfit = Math.floor(Math.random() * (100 - 999)) + 999;
    let fullProfit = firstProfit + randomProfit + secontProfit;
    let peoples = $('.people');
    if(peoples.length > 3 ){
        $(peoples[0]).slideUp(1000)
        setTimeout(function(){
            $(peoples[0]).remove()
        },3000)
    }
        $('.people-wrap').append('<div class="people">'+ fullPhoto + fullName  +fullProfit + '</div>');
    };
    peopleRandom();
    setInterval(peopleRandom,5000);
    


