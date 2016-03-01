// $('.single-item').slick();

$(document).ready(function(){
  $(".gallerymobile").slick({
    

  });
});

$(".previous").click(function(e){
	e.preventDefault();
	console.log("clicked");
	$(".gallerymobile").slick("slickPrev");
});

$(".next").click(function(e){
	e.preventDefault();
	console.log("clicked");
	$(".gallerymobile").slick("slickNext");
});

$('.gallery').mouseenter(function(){
    var image= $(this).find('img'),
        caption = $(this).find('.caption');
    
    caption.width(image.width());
    caption.height(image.height());
    caption.fadeTo("slow",1);
    image.fadeTo("slow",0.3);
    
}).mouseleave(function(){
     var image= $(this).find('img'),
        caption = $(this).find('.caption');
    
    caption.width(image.width());
    caption.height(image.height());
    caption.fadeTo("slow",0);
    image.fadeTo("slow",1);
});