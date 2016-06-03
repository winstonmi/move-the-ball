$(document).ready(function(){

$( "#red" ).click(function Red() {
    console.log("Red Clicked");
    $(".circle").css('background-color', 'red');
})
$( "#green" ).click(function Green() {
    console.log("Green Clicked");
    $(".circle").css('background-color', 'green');
})
$( "#white" ).click(function White() {
    console.log("White Clicked");
    $(".circle").css('background-color', 'white');
})
$( "#hide" ).click(function Hide() {
    console.log("Hide Clicked");
    $(".circle").hide();
})
$( "#show" ).click(function Show() {
    console.log("Show Clicked");
    $(".circle").show();
})
$( "#right" ).click(function Right() {
    console.log("Right Clicked");
    $(".circle").animate({'left': '+=30px'});
})
$( "#left" ).click(function Left() {
    console.log("Left Clicked");
    $(".circle").animate({'left': '-=30px'});
})
$( "#up" ).click(function Up() {
    console.log("Up Clicked");
    $('.circle').animate({'marginTop' : "-=30px"});
})
$( "#down" ).click(function Down() {
    console.log("Down Clicked");
    $('.circle').animate({'marginTop' : "+=30px"});
});

});
