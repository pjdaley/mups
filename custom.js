$fadetime = 100;
$slidetime = 300;

$(document).ready(function(){
	$(".inner,.panel-body,.glyphicon-chevron-down").hide();
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
  	$(".panel").mouseenter(function(){
  		$(this).find(".glyphicon-chevron-down").show();
  	});
  	$(".panel").mouseleave(function(){
  		$(this).find(".glyphicon-chevron-down").hide();
  	});
    $(".panel").click(function(){
    	$(this).children(".panel-body").slideToggle($slidetime);
    });
    $(".contactbox").mouseleave(function(){
    	$(this).addClass("light-borders");
    	$(this).removeClass("purple-box");
    });
    $(".contactbox").mouseenter(function(){
    	$(this).removeClass("light-borders");
    	$(this).addClass("purple-box");
    });
});

/*double link javascript
document.getElementById("department").onclick = function() {
    window.open("http://www.someothersite.com/");
}*/

// twiter button script
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

