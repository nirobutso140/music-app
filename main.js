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

//formula of next and previous song
// songIndex = 0
//next : (songIndex + 1) % songs.length;
//previous: (songIndex - 1 + songs.length) % songs.length 



const play = document.getElementById('play')
const music = document.querySelector('audio')
const img = document.querySelector('img')
const previous = document.getElementById('prev')
const next = document.getElementById('next')
const title = document.getElementById('title')
const artist = document.getElementById('artist')


let isPlaying = false

const playMusic = () =>{
    isPlaying = true
    music.play()
    play.classList.replace('fa-play', 'fa-pause')
    img.classList.add('anime')  
}

const pauseMusic = () =>{
    isPlaying = false
    music.pause()
    play.classList.replace('fa-pause', 'fa-play')
    img.classList.remove('anime') 
}

play.addEventListener('click', ()=>{
      if(isPlaying === true){
        pauseMusic()
      }else{
        playMusic()
      }
})


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

const loadSongs = (songs) =>{
    title.textContent = songs.title
    artist.textContent = songs.artist
    music.src = `music/${songs.name}.mp3`
    img.src = `img/${songs.name}.jpg`
}


let songIndex = 0
next.addEventListener('click', ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex])
    playMusic()
})

previous.addEventListener('click', ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length 
    loadSongs(songs[songIndex])
    playMusic()
})







