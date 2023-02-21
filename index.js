// ######### Steps to make a music player #########

// //when play song
// step_1 : select play button
// step_2 : play song
// step_3 : add a class on image to rotate when the song is playing

// //when pause song
// step_4 : change play icon to pause
// step_5 : image rotate stop

// //when change song
// step_6 : select next button
// step_7 : select title, artist
// step_8 : change song, image, title, artist

// step_9 : select previous button
// step_10 : select title, artist
// step_11 : change song, image, title, artist

const mainBtn = document.getElementById("play")
const music = document.querySelector("audio")
const img = document.querySelector("img")
const previous = document.getElementById("prev")
const next = document.getElementById('next')
const title = document.getElementById('title')
const artist = document.getElementById("artist")

const songs = [
    {
         name : "nirob_1",
         title : 'ANXIETY',
         artist : 'NETFLEX'
    },

    {
         name : 'nirob_2',
         title : 'Born a Rockstar',
         artist : 'NETFLEX'
    },

    {
        name : 'nirob_3',
        title : 'Sinister',
        artist : 'NETFLEX'
   }
]

let isPlaying = false

const playBtn = () =>{
    isPlaying = true
    music.play()
    mainBtn.classList.replace('fa-play', 'fa-pause')
    img.classList.add('anime') 
}

const pauseBtn = () =>{
    isPlaying = false
    music.pause()
    mainBtn.classList.replace('fa-pause', 'fa-play')
    img.classList.remove('anime') 
}

mainBtn.addEventListener('click', ()=>{
    if(isPlaying === true){
         pauseBtn()
    }else{
        playBtn()
    }
})

const loadSongs = (songs) =>{
    title.textContent = songs.title
    artist.textContent = songs.artist
    img.src = `img/${songs.name}.jpg`
    music.src = `music/${songs.name}.mp3`
}

let songIndex = 0

next.addEventListener('click', ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex])
    playBtn()
})

previous.addEventListener('click', ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length
    loadSongs(songs[songIndex])
    playBtn()
})