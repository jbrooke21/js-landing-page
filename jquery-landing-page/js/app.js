$ (document).ready (function() {
	new WOW().init();

	$(window).on("scroll", function() {
	    var scrollDistance = $(window).scrollTop();

	    if ($(window).scrollTop() >=50) {
	    	$("#mainNav").removeClass("affix-top").addClass("affix");
	    } else {
	    	$("#mainNav").removeClass("affix").addClass("affix-top");
	    }
	});

	$(document).on("click", ".page-scroll", function(){
	 event.preventDefault();
		var target = $(this).attr("href");
		$("body").animate({
	    	scrollTop: $(target).offset().top
		});
	});

	//I did it this way and this worked as well, is there a benefit to doing it tis way instead?
	// $(".page-scroll").click(function(){
	    
	//event.preventDefault();
	 
	// 	$("html, body").animate({
	//         scrollTop: $( $(this).attr("href") ).offset().top
	//     }, 1000);
	//     return false;
	// });

	// $("body").scrollspy({ target: "#mainNav" });

});