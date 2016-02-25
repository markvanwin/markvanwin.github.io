document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}

});

document.querySelector( ".line" )
  .addEventListener("click", function() {
    this.classList.toggle( "active" );
});

$(".nav a").click(function(e) {
  	e.preventDefault();
	var target= $(this).data("target");
	console.log(target);
	$("body").scrollTo(target, 400);
});

$("nav a").click(function(e) {
	e.preventDefault();
	var target= $(this).data("target");
	console.log(target);
	$("body").scrollTo(target, 400);
});