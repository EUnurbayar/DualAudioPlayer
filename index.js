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
  const paused = false;
  $('button.action-btn-big').click(function(){
    if(playing ==true){
      document.getElementById('audio1').pause();
      document.getElementById('audio2').pause();
    } else {
      document.getElementById('audio1').play();
      document.getElementById('audio2').play();
    }
  });
});



$(document).ready(function(){
  const paused = false;
  $('button.action-btn-big').click(function(){
    if(playing ==true){
      document.getElementById('audio1').pause();
      document.getElementById('audio2').pause();
    } else {
      document.getElementById('audio1').play();
      document.getElementById('audio2').play();
    }
  });
})

