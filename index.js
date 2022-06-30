/**
 * inded.js
 */
console.log("Hello index.js");


$(document).ready(function(){
  let playing = false;

  $('button.action-btn-big').click(function(){
  
    if(playing == false){
      document.getElementById('audio1').play();
      document.getElementById('audio2').play();
      playing=true;
      

    } else {
      playing = false;
      document.getElementById('audio1').pause();
      document.getElementById('audio2').pause();
     
    }
  });
});


