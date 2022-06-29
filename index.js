/**
 * inded.js
 */
console.log("Hello index.js");

const musicContainer1 = document.getElementById('music-container1');
const playBtn1 = document.getElementById('play1');
const prevBtn1 = document.getElementById('prev1');
const nextBtn1 = document.getElementById('next1');

const audio1 = document.getElementById('audio1');
// const title1 = document.getElementById('title1');
// const cover1 = document.getElementById('cover1');



const musicContainer2 = document.getElementById('music-container2');
const playBtn2 = document.getElementById('play2');
const prevBtn2 = document.getElementById('prev2');
const nextBtn2 = document.getElementById('next2');

const audio2 = document.getElementById('audio2');
// const title2 = document.getElementById('title2');
// const cover2 = document.getElementById('cover2');


// Song titles
const songs1 = ['hey', 'summer', 'ukulele'];
const songs2 = ['summer', 'hey', 'ukulele'];


// Keep track of song
let songIndex1 = 2;
let songIdnex2 = 1;

// Initially load song details into DOM
loadSong(songs1[songIndex1], songs2[songIdnex2]);

// Update song details
function loadSong(song1, song2) {
  
  audio1.src = `music/${song1}.mp3`;
  audio2.src = `music/${song2}.mp3`;
}

// Play song
function playSong(playerId) {
  let player = document.getElementById(playerId)
  let audio = player.querySelector('audio');
  let playBtn = player.querySelector('.play-btn');
  
  player.classList.add(player.find);
  console.log("clicked: " + playerId)
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  //musicContainer2.classList.add('play2');
  //console.log("clicked2");
  //playBtn2.querySelector('#p2').classList.remove('fa-play');
  //playBtn2.querySelector('#p2').classList.add('fa-pause');

  audio.play();
  //audio2.play();
}

// Pause song
function pauseSong() {
  musicContainer1.classList.remove('play1');
  playBtn1.querySelector('i.fas').classList.add('fa-play');
  playBtn1.querySelector('i.fas').classList.remove('fa-pause');


  musicContainer2.classList.remove('play2');
  playBtn2.querySelector('#p2').classList.add('fa-play');
  playBtn2.querySelector('#p2').classList.remove('fa-pause');

  audio1.pause();
  audio2.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Event listeners
playBtn1.addEventListener('click', () => {
  const isPlaying1 = musicContainer1.classList.contains('play1');

  if (isPlaying1) {
    pauseSong("music-container1");
  } else {
    playSong("music-container1");
  }


});

playBtn2.addEventListener('click', () => {
	const isPlaying2 = musicContainer2.classList.contains('play2');
  
	if (isPlaying2) {
	  pauseSong("music-container");
	} else {
	  playSong("music-container2");
	}
  
  
  });

// Change song
prevBtn1.addEventListener('click', prevSong);
nextBtn1.addEventListener('click', nextSong);

audio1.addEventListener('ended', nextSong);



