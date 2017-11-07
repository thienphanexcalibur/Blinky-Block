/*global window,document,console*/
var x = window.innerWidth;
var y = window.innerHeight;
$(document).ready(function () {
    var box = $('#touch-box-container');
    box.css('height', (Math.random()) * y);
    box.css('width', (Math.random()) * x);

    //    $('button').on('mouseover', function () {
    //        box.animate({
    //            width: (Math.random())*x,
    //            height: (Math.random())*y
    //        });
    //    });
    var pop = setInterval(function () {
        box.css('height', (Math.random()) * y);
        box.css('width', (Math.random()) * x);
    }, 650);
    $('button').click(function () {
        clearInterval(pop);
        $('body').html('<h1 style="color:black;">You won</h1>');
        $('body').css('background-color', 'white');
    });



});