var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New Speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New Speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;

	if (video.duration <= video.currentTime){
	 	video.currentTime = 0;
		console.log("Playing from Beginning");}

	else{
		console.log("Skipped to " + video.currentTime);}

	video.play();

});

document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted == false){
	 video.muted = true;
	  document.getElementById("mute").innerHTML= "Unmute";
		console.log("Mute");}

	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmute");}


});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Before: " + video.volume);
	video.volume = this.value / 100;
	console.log("After: " + video.volume);
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("Grayscale");

});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("Color");

});
