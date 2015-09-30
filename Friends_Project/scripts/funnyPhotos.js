$(document).ready(function(){
    $("#actors").click(function(){
        $("#chooseActor").fadeToggle();
    });
    $("#seasons").mouseenter(function(){
        $("#chooseSeason").fadeToggle();
    });
    var photos = 109;
    for(var i = 0; i <= photos; i++){
        $("#links").append('<a href="img/funnyPictures/friends' + i + '.jpg" title="Banana" data-gallery>' +
            '<img class="smallImages" src="img/funnyPictures/friends'+ i +  '.jpg" alt="Friends' + i + '"></a>');
    }
});