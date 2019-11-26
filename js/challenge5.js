console.log("here")
// var imgs = $('input[name=img]');
// var msg = "Hover over an image below."; 

$(function() {
	console.log('looping'); 
	$("img").mouseover(function() {

		$("#image").css("background-image", "url('"+$(this).attr("src")+"')"
			); 
		$('#image').html($(this).attr("alt")
			); 
	
	
		// $(this).css("background-color", "#8e68ff");
		// console.log('hovering'); 
	})
	// function(){
	$("img").mouseout(function() {
		// $(this).css("background-color", "");
		$("#image").css("background-image", ""); 
		$('#image').html("Hover over an image below."); 
	})
	
	$("img").focus(function(){
		// $("#image").css("background-image", "#8e68ff");
		$("#image").css("background-image", "url('"+$(this).attr("src")+"')"); 
		$('#image').html($(this).attr("alt")); 
	})
		
	$("img").blur(function(){
		$("#image").css("background-image", "");
		$('#image').html("Hover over an image below."); 
	})
	
	});

	// confused about difference between focus and hover? 
	// $("#image").focus(function(){
	// 	$(this).css("background-color", "#8e68ff");
	// });

	






// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
