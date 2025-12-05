
const boxes = document.querySelectorAll(".box");

const volumeSlider = document.getElementById("volume");
const muteBtn = document.getElementById("mute-btn");

const sounds = {
    dog: new Audio("sounds/dog.mp3"),
    pop: new Audio("sounds/pop.mp3"),
    cat: new Audio("sounds/cat.mp3"),
    clap: new Audio("sounds/clap.mp3"),
    laugh: new Audio("sounds/laugh.mp3"),
    lion: new Audio("sounds/lion.mp3")
};


let currentVolume = 1;


function stopAllSounds() {
    for (let key in sounds) {
        sounds[key].pause();
        sounds[key].currentTime = 0; 
    }
}
boxes.forEach(box => {
    box.addEventListener("click", () => {
        const soundName = box.dataset.sound;

        stopAllSounds(); 

        sounds[soundName].volume = currentVolume;
        sounds[soundName].play();
    });
});

// Volume slider
volumeSlider.addEventListener("input", () => {
    currentVolume = volumeSlider.value / 100;

    for (let key in sounds) {
        sounds[key].volume = currentVolume;
    }
});

// Mute button
let isMuted = false;

muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;

    for (let key in sounds) {
        sounds[key].muted = isMuted;
    }

    muteBtn.textContent = isMuted ? "🔇" : "🔊";
});