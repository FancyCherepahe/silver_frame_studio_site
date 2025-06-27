const audio = new Audio('glitch-sound-333220.mp3');
audio.loop = true;
audio.volume = 0.5;
let isPlaying = true;
let random_color_text = document.getElementById("random_color_text");
function toggleAudio() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}