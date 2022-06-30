/**
 * inded.js
 */
console.log("Hello index.js");


$('button.action-btn-big').click(function () {
  alert("you clicked play");      
});


$(document).ready(function(){
  const playing = false;

  $('button.action-btn-big').click(function(){
    if(playing == false){
      document.getElementById('audio1').play();
      document.getElementById('audio2').play();
    } else {
      document.getElementById('audio1').pause();
      document.getElementById('audio2').pause();
    }
  });
});




// $('button.action-btn-big').click(function(){
//   let paused = false;
//   if(this.paused == false){
//     document.getElementById('audio1').pause();
//     document.getElementById('audio2').pause();
//     alert('music paused');
//   } else {
//     document.getElementById('audio1').play();
//     document.getElementById('audio2').play();
//     // alert('music playing');
//   }
// })
