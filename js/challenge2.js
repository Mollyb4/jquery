// Getting start for challenge2
// $(document).ready(function() {
	// didn't like this above statement, why?

// $("#useBilling").click(function() {
// 	if (this.checked){
// 		//Set value of home = to value of billing
// 		$( "#home").val($("#billing").val())
// 		//Disable home
// 		$( "#home").prop('disabled', true) 
// 	}


	// else {
	// 	$( "#home").val("")
    //     ( "#home").prop('disabled', false)
	// }

// }); 



$( "#useBilling").click(function() {
	// if ($( "useBilling").prop('checked')){
	if (this.checked){
	  console.log($("#billing").val());
	  $( "#home").val($("#billing").val());
	  $( "#home").prop("disabled", true); 
	  // above does value, dont use equal sign, use a method to say i would like to set the value of home to #billing
	}
	else{
	  $( "#home").val("");  
	  $( "#home").prop("disabled", false); 
	}
}); 

// $( "#useBilling").click(function() {
// 	var home = $('name=homeAdd'); 
// }




// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}