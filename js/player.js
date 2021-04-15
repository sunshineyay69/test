let playButtonSize = 494.942;
let pauseButtonSize = 298.667;

let songList = [
    "DJ Дождик - Почему же",
    "Imminence - Erase",
    "Быдлоцикл - Разобранная",
    "Грязь - Я ненавижу людей",
    "Devianprod - callmewithyou",
    "Trivium - Through Blood And Dirt And Bone",
    "MACAN - Кино",
    "Prime Circle - Evidence",
    "Alx Beats - Everything Would Be Fine",
    "Forever Waiting - Lost in Silence"
];
let currentSongIndex = getRandomSongIndex();

function setSong() {
    songName.style.fontSize = `${playerBlock.clientWidth * 0.9 / songList[currentSongIndex].length}px`;
    songName.innerText = songList[currentSongIndex];

    player.src = `media/audio/${songList[currentSongIndex]}.mp3`;
}

function changeSong(next) {
    if (next) {
        if (currentSongIndex === songList.length - 1) {
            currentSongIndex = 0;
        }
        else {
            currentSongIndex++;
        }
    }
    else {
        if (currentSongIndex === 0) {
            currentSongIndex = songList.length - 1;
        }
        else {
            currentSongIndex--;
        }
    }

    setSong();

    playSong();
}

function getRandomSongIndex() {
    return Math.floor(Math.random() * songList.length);
}

function playSong() {
    if (player.paused){
        player.play();

        // стили кнопки
        playButton.viewBox.baseVal.height = pauseButtonSize;
        playButton.viewBox.baseVal.width = pauseButtonSize;

        playButton.children[0].innerHTML =
            "<rect x=\"192\" y=\"0\" width=\"85.333\" height=\"298.667\"/>" +
            "<rect x=\"21.333\" y=\"0\" width=\"85.333\" height=\"298.667\"/>";
    }
    else {
        player.pause();

        // стили кнопки
        playButton.viewBox.baseVal.height = playButtonSize;
        playButton.viewBox.baseVal.width = playButtonSize;

        playButton.children[0].innerHTML =
            "<path d=\"m35.353 0 424.236 247.471-424.236 247.471z\"/>";
    }
}

setSong();

playButton.onclick = playSong;
player.addEventListener("ended", () => {changeSong(true);});
prev.addEventListener("click", () => {changeSong(false);});
next.addEventListener("click", () => {changeSong(true);});