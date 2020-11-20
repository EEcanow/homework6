var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("Slow Down" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
	console.log("Speed Up" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5) {
		video.currentTime += 5;
	}
	else{
		console.log("Start from beginning");
		video.currentTime = 0;
	}
	video.play()
	console.log("Skip Ahead" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
		this.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		console.log("Muted");
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = (document.querySelector("#volumeSlider").value)/100;
	console.log((document.querySelector("#volumeSlider").value)/100);
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log(document.querySelector("#volume").innerHTML);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});
