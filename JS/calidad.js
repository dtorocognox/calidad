var images = ["img/00.png", "img/01.png", "img/02.png", "img/03.png", "img/04.png", "img/05.png" ];
var photos = ["https://social.cognox.com/profiles/photo.do?key=9d6d8ca6-1d34-47ed-845d-bd917c0e55f5&lastMod=1475270112406",
                "https://social.cognox.com/profiles/photo.do?key=967cff04-762f-459f-a336-301b0fc4c8ef&lastMod=1476903387463",
                "https://social.cognox.com/profiles/photo.do?key=6b64dca9-6096-45d8-94c6-c1e9fadea095&lastMod=1475673557022",
                "https://social.cognox.com/profiles/photo.do?key=51a930a3-e211-415e-8db5-779c3fad46be&lastMod=1476470846036",
                "https://social.cognox.com/profiles/photo.do?key=04d067ab-0af8-4c08-81be-5fcd160abf6d&lastMod=1476465147198",
                "https://social.cognox.com/profiles/photo.do?key=58e4cf48-7232-41d6-813f-2ae9db1f84f0&lastMod=1475272292033"
                ];

var underText1 = ["Carlos Giraldo", "Ana María Pizarro", "Estefania Palacio", "Lina López", "Diana Zuleta", "Luisa Quiroz"];
var underText2 = ["Jefe de Área", "Líder", "Procesos", "Microsoft", "IBM-PHP", "Diseño Gráfico"];

var $separator = $('#separator');
var $profiles = $('#profiles');
var $photos = new Array();

for(i=0; i<=6; i++){
    var $divTemp = $('<div>').css('display', 'inline-block');
    $photos[i] = $('<img>').attr('src', photos[i]).css({
        "border-radius" : "100%",
        "margin" : "20px"
    });
    $profiles.append($divTemp.append($photos[i]));
}


var $visible = $('#centerDiv > img').attr('src', images[0]);
var $C1 = $('#C1').attr("src","img/X2.png");
var $C2 = $('#C2').attr("src","img/X.png");
var $C3 = $('#C3').attr("src","img/X.png");

var $square1 = $('<img src="img/arrow1.png"/>');
var $square2 =  $('<img src="img/arrow2.png"/>');

var $colaboradores = $('#colaboradores');

var i = 1;


$C1.click(function () {
    $C1.attr("src",'img/X2.png');
    $C2.attr("src",'img/X.png');
    $C3.attr("src",'img/X.png');
    $visible.attr("src", images[0]).css({
        "height" : "400px",
        "width" : "640px",
        "margin-left": "50px"
    });
    $square1.css("display" , "none");
    $square2.css("display" , "none");
    $('body').animate({
        scrollTop: $separator.offset().top
    }, 600);
});

$C2.click(function () {
    $C1.attr("src",'img/X.png');
    $C2.attr("src",'img/X2.png');
    $C3.attr("src",'img/X.png');
    $visible.attr("src", images[1]).css({
        "height" : "400px",
        "width" : "95%",
        "margin-left": "50px"
    });
    $('#centerDiv').append($square1.css("display" , "initial"));
    $('#centerDiv').append($square2.css("display" , "initial"));
    $('body').animate({
        scrollTop: $separator.offset().top
    }, 600);
});

$C3.click(function () {
    $C1.attr("src",'img/X.png');
    $C2.attr("src",'img/X.png');
    $C3.attr("src",'img/X2.png');
    $('body').animate({
        scrollTop: $profiles.offset().top
    }, 600);
});

$square1.click( function () {

    if(i>1){
        i--;
        $visible.attr("src", images[i]).css("height", "500px");
    }
});

$square2.click( function () {

    if(i>=1 && i<5){
        i++;
        $visible.attr("src", images[i]).css("height", "500px");
    }
});

$colaboradores.click(function () {
    $('body').animate({
        scrollTop: $profiles.offset().top
    }, 600);
    $C1.attr("src",'img/X.png');
    $C2.attr("src",'img/X.png');
    $C3.attr("src",'img/X2.png');
});

$colaboradores.hover(function(){
    $(this).css('cursor', 'pointer');
});




// var $button = $('<input type="button" value="Test">');
// $profiles.append($button);
//
// $button.click(function() {
//     $('body').animate({
//         scrollTop: $('#separador').offset().top
//     }, 1000);
// });