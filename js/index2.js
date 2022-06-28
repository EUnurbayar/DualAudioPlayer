console.log("hello audio player");

window.onload = function(){

    let myAudio1 = document.getElementById('player1');
    let play = document.getElementById('play');
    let pause = document.getElementById('pause');
  
    // associate functions with the 'onclick' events
    play.onclick = playAudio1;
    pause.onclick = pauseAudio1;
  
    function playAudio1() {
      myAudio1.play();
    }
  
    function pauseAudio1() {
      myAudio1.pause();
    }
  }
  
