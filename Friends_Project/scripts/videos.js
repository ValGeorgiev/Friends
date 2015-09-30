$(document).ready(function(){
    $("#actors").click(function(){
        $("#chooseActor").fadeToggle();
    });
    $("#seasons").mouseenter(function(){
        $("#chooseSeason").fadeToggle();
    });
    $(".videosContainer").fitVids();
    $('#page-selection').bootpag({
        total: 10
    }).on("page", function(event, num){
        $(".contents").html("Insert content");
    });

    var firstPage = $("#firstPage");
    var secondPage = $("#secondPage");
    var thirdPage = $("#thirdPage");
    var forthPage = $("#forthPage");
    var fifthPage = $("#fifthPage");
    var sixthPage = $("#sixthPage");
    $("#first").click(function(){
        firstPage.css("display", "block");
        secondPage.css("display", "none");
        thirdPage.css("display", "none");
        forthPage.css("display", "none");
        fifthPage.css("display", "none");
        sixthPage.css("display", "none");
    });
    $("#second").click(function(){
        firstPage.css("display", "none");
        secondPage.css("display", "block");
        thirdPage.css("display", "none");
        forthPage.css("display", "none");
        fifthPage.css("display", "none");
        sixthPage.css("display", "none");
    });
    $("#third").click(function(){
        firstPage.css("display", "none");
        secondPage.css("display", "none");
        thirdPage.css("display", "block");
        forthPage.css("display", "none");
        fifthPage.css("display", "none");
        sixthPage.css("display", "none");
    });
    $("#forth").click(function(){
        firstPage.css("display", "none");
        secondPage.css("display", "none");
        thirdPage.css("display", "none");
        forthPage.css("display", "block");
        fifthPage.css("display", "none");
        sixthPage.css("display", "none");
    });
    $("#fifth").click(function(){
        firstPage.css("display", "none");
        secondPage.css("display", "none");
        thirdPage.css("display", "none");
        forthPage.css("display", "none");
        fifthPage.css("display", "block");
        sixthPage.css("display", "none");
    });
    $("#sixth").click(function(){
        firstPage.css("display", "none");
        secondPage.css("display", "none");
        thirdPage.css("display", "none");
        forthPage.css("display", "none");
        fifthPage.css("display", "none");
        sixthPage.css("display", "block");
    });

});