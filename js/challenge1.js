$( "#subscribe" ).click(function() {
	var x = $("#emailField").toggle( "fast" ); /*document.queryselector replaced with $*/
	if (this.checked) {
		x.css("display", "block"); 
	}
	else{
		x.css("display", "none"); 
	}



	
	// action goes here
}); 

// $( "#subscribe" ).click(function() {
// 	$( "#emailField" ).toggle( "fast" ); 
//   }); 


// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
  // 	Advanced Option....
  // 	x.style.display == "block" ? 
		// x.style.display = "none" : 
		// x.style.display = "block"; 
// }

