$(document).ready(function(){
    $("#h1").hover(function() {
        $("#h1").css("opacity","0.2");
        $("#une").show();
    },
    function(){
        $("#h1").css("opacity","1");
        $("#une").hide();
    });
    $("#h2").hover(function() {
        $("#h2").css("opacity","0.2");
        $("#deux").show();
    },
    function(){
        $("#h2").css("opacity","1");
        $("#deux").hide();
    });
    $("#h3").hover(function() {
        $("#h3").css("opacity","0.2");
        $("#trois").show();
    },
    function(){
        $("#h3").css("opacity","1");
        $("#trois").hide();
    });
    $("#h4").hover(function() {
        $("#h4").css("opacity","0.2");
        $("#quatre").show();
    },
    function(){
        $("#h4").css("opacity","1");
        $("#quatre").hide();
    });

});