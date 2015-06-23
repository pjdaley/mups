$fadetime = 150;
$slidetime = 300;

$(document).ready(function(){
	$(".inner,.panel-body").hide();
    $(".homebox").mouseenter(function(){
        $(this).addClass("borders");
        $(this).children("h2,img").fadeToggle($fadetime);
        $(this).children(".inner").delay($fadetime).fadeToggle($fadetime);
    });
    $(".homebox").mouseleave(function(){
        $(this).removeClass("borders");
        $(this).children("h2,img").delay($fadetime).fadeToggle($fadetime);
        $(this).children(".inner").fadeToggle($fadetime);
    });
    $(".panel").click(function(){
    	$(this).children(".panel-body").slideToggle($slidetime);
    });
});