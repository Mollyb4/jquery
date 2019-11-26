
var x = $("#addrerrormsg").toggle( "fast" );
var y = $("#nameerrormsg").toggle( "fast" );


$('#ch4form').submit(function( event ) {
    console.log("I work")
    // var validInput = true
    // event.preventDefault();
    // var name = $('input[name=fullname]');
    // var address = $('input[name=streetaddr]');
    
    // var addrlen = $( '#streetaddr' ).length();
    // var namelen = $( '#fullname' ).length(); 
    // var input = $(this);
    console.log('hello'); 

    // $('input[type=submit]').click(function () {
    // console.log('here'); 
    // if ($('#fullname'+val() === 0)) {
    //     console.log('#fullname'.length()); 
    //     x.css("display", "block");
    //         // return false; 
            
    // }


    // console.log($('input:text')+$('#fullname').val()); 
    // console.log($('#fullname').length()+$('#fullname').val()); 
    console.log(($('#fullname').val()).length); 

    // $('input[type=submit]').click(function () {
    console.log('here'); 
    if ($('#fullname').val().length == 0 ){
        console.log('worked!');
        // console.log('input[type=submit]'+val()); 
        $(y).css("display", "block");
        // validInput = false; 
        // return false; 
        event.preventDefault();
            
    }

    // else if ($('#fullname').val().length > 0 ) {
    else {
    // else {
        console.log("field is valid"); 
        $(y).hide();
        // validInput = false; 
        // return true; 
        // event.preventDefault();
    }

    console.log('here2'); 
    if ($('#streetaddr').val().length == 0 ){
        console.log('worked!');
        // console.log('input[type=submit]'+val()); 
        $(x).css("display", "block");
        // validInput = false; 
        // return false; 
        event.preventDefault();
            
    }

    else {
        console.log("field 2 is valid"); 
        $(x).hide();
        // validInput = true; 

    }
    

    
    



    
        

    // if (addrlen === 0) {
    //     // console.log()
    //     // alert("#addrerrormsg"); 
    //     y.css("display", "block");
    //     // return false; 
    //     // event.preventDefault();
    //     return false; 
    // }

    // else {
    //     console.log("field is valid") 
    //     // $("#ch4form").validate();
    //     return true;
    // }

});




// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
  
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }

//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none"; 
//     }

//     return validInput;
// }