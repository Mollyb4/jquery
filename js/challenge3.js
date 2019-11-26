$('#ch3form').submit(function(){
  console.log('checking for submit'); 
  var fruit = $('input[name=fruit]:checked'); 
  var standing = $('input[name=standing]:checked'); 

  if (!standing.val()) {
  console.log()
  alert("You must pick a class standing!"); 
  return false; 
  }

  if (!fruit.val()) {
    console.log()
    alert("You must pick a fruit!"); 
    return false; 
  }
}); 




// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;





    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
  // }