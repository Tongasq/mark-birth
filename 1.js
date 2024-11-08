document.getElementById('playButton').addEventListener('click', function() {
    const audio = document.getElementById('myAudio');
    if (audio.paused) {
        audio.play();
        this.textContent = '暂停'; 
    } else {
        audio.pause();
        this.textContent = '播放'; 
    }
});
document.getElementById("myAudio").volume = 0.5;