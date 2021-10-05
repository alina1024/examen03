const boom_btn = document.getElementById("boom-btn")
const clap_btn = document.getElementById("clap-btn")
const hihat_btn = document.getElementById("hihat-btn")
const kick_btn = document.getElementById("kick-btn")
const openhat_btn = document.getElementById("openhat-btn")
const ride_btn = document.getElementById("ride-btn")
const snare_btn = document.getElementById("snare-btn")
const tink_btn = document.getElementById("tink-btn")
const tom_btn = document.getElementById("tom-btn")

let isplaying = false;

const sonidos = [ 
    {
        id:1, 
        title: "A",
        audio:"audio/boom.mp3",
    },
    {
        id:2,
        title: "S",
        audio:"audio/clap.mp3",
    },
    {
        id:3,
        title: "D",
        audio:"audio/hihat.mp3",
    },
    {
        id:4,
        title: "F",
        audio:"audio/kick.mp3",
    },
    {
        id:5,
        title: "G",
        audio:"audio/openhat.mp3",
    },
    {
        id:6,
        title: "H",
        audio:"audio/ride.mp3",
    },
    {
        id:7,
        title: "J",
        audio:"audio/snare.mp3",
    },
    {
        id:8,
        title: "K",
        audio:"audio/tink.mp3",
    },
    {
        id:9,
        title: "L",
        audio:"audio/tom.mp3",
    },

]

boom_btn.addEventListener('click',() => {
    audio.play(sonidos);
});
clap_btn.addEventListener('click',() => {
    audio.play();
});
hihat_btn.addEventListener('click',() => {
    audio.play();
});
kick_btn.addEventListener('click',() => {
    audio.play();
});
openhat_btn.addEventListener('click',() => {
    audio.play();
});
ride_btn.addEventListener('click',() => {
    audio.play();
});
snare_btn.addEventListener('click',() => {
    audio.play();
});
tink_btn.addEventListener('click',() => {
    audio.play();
});
tom_btn.addEventListener('click',() => {
    audio.play();
});
