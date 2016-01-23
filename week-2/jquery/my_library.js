$(document).ready(function(){
	
	$("li").click(   function(){     alert('imclicked!');   } );
	console.log("oops");
	//hides the paragraph text on click
	$("p").click(function(){
		$("p").fadeOut(3000)
	})
	$("#home").fadeOut(3000);
	$("#about").slideUp(3000);
	$("#contract").animate({opacity:.5});
	$("#donate").animate({width:"300px",height:"50px",marginLeft:"150px"}, 6000);
	$("h1").css("background","yellow");
	// var my_anon_func = function(){alert("har!");}
	// my_anon_func();
})



