console.log("hello index.js");

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
const title2 = document.getElementById('title2');
const cover2 = document.getElementById('cover2');


// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
//   title.innerText = song;
  audio1.src = `music/${song}.mp3`;
  audio2.src = `music/${song}.mp3`;
}

// Play song
function playSong() {
  musicContainer1.classList.add('play1');
  playBtn1.querySelector('i.fas').classList.remove('fa-play');
  playBtn1.querySelector('i.fas').classList.add('fa-pause');

  musicContainer2.classList.add('play2');
//   playBtn2.querySelector('i.#p2').classList.remove('fa-play');
//   playBtn2.querySelector('i.#p2').classList.add('fa-pause');

  audio1.play();

  audio2.play();
}

// Pause song
function pauseSong() {
  musicContainer1.classList.remove('play');
  playBtn1.querySelector('i.fas').classList.add('fa-play');
  playBtn1.querySelector('i.fas').classList.remove('fa-pause');

  audio1.pause();

//   musicContainer2.classList.remove('play');
//   playBtn2.querySelector('i.#p2').classList.add('fa-play');
//   playBtn2.querySelector('i.#p2').classList.remove('fa-pause');

//   audio2.pause();
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
    pauseSong();
  } else {
    playSong();
  }

  const isPlaying2 = musicContainer1.classList.contains('play2');

  if (isPlaying2) {
    pauseSong();
  } else {
    playSong();
  }

});

// playBtn2.addEventListener('click', () => {
// 	const isPlaying2 = musicContainer2.classList.contains('play2');
  
// 	if (isPlaying2) {
// 	  pauseSong();
// 	} else {
// 	  playSong();
// 	}
  
  
//   });

// Change song
prevBtn1.addEventListener('click', prevSong);
nextBtn1.addEventListener('click', nextSong);

audio1.addEventListener('ended', nextSong);



