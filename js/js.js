function fondu()
{
	var header = document.querySelector("header");   
	var opacite = 0;
	var id = setInterval(frame, 15);
	function frame() {
	  if (opacite == 100) {
		clearInterval(id);
	  } else {
		opacite++; 
		header.style.opacity = opacite/100;
	  }
	}
}

function changerLangue()
{
	document.querySelectorAll(".EN").forEach(el => {
		el.style.display = "none";
	});

	var FR;

	document.querySelector(".changerLangue").addEventListener("mousedown", function () {
		if (FR == false) {
			FR = true;
			document.querySelectorAll(".EN").forEach(el => {
				el.style.display = "none";
			});
			document.querySelectorAll(".FR").forEach(el => {
				el.style.display = "block";
			});
			document.querySelector(".changerLangue").textContent = "EN";

			
		}
		else {
			FR = false;
			document.querySelectorAll(".EN").forEach(el => {
				el.style.display = "block";
			});
			document.querySelectorAll(".FR").forEach(el => {
				el.style.display = "none";
			});
			document.querySelector(".changerLangue").textContent = "FR";
		}
	});
}

function btnsAfficher()
{
	document.querySelector(".vide").addEventListener("mousedown", function () {
		document.querySelector(".vide").style.display = "none";
	});
}

function btnsVideo()
{
	document.querySelector(".vide").addEventListener("mousedown", function(){
		fermerFenetresVideos();
	});

	document.querySelector(".video6").addEventListener("mousedown", function () {
		afficherVideo(6);
	});

	document.querySelector(".video5").addEventListener("mousedown", function () {
		afficherVideo(5);
	});

	document.querySelector(".video4").addEventListener("mousedown", function () {
		afficherVideo(4);
	});

	document.querySelector(".video3").addEventListener("mousedown", function () {
		afficherVideo(3);
	});

	document.querySelector(".video2").addEventListener("mousedown", function () {
		afficherVideo(2);
	});
	document.querySelector(".video1").addEventListener("mousedown", function () {
		afficherVideo(1);
	});
	document.querySelector(".video0").addEventListener("mousedown", function () {
		afficherVideo(0);
	});
}

function afficherVideo(n)
{
	document.querySelector(".vide").style.display = "block";
	document.querySelector(".fenetreVideo"+n).style.display = "block";
	document.querySelector(".fenetreVideo" + n).getElementsByTagName("iframe")[0].src = recevoirUrl(n);
}

function fermerFenetresVideos()
{
	document.querySelector(".vide").style.display = "none";

	for (i = 0; i <= 6; i++) {
		const videoElement = document.querySelector(".fenetreVideo" + i);
		if (videoElement) {
			videoElement.style.display = "none";
			const iframe = videoElement.getElementsByTagName("iframe")[0];
			if (iframe) {
				iframe.src = "";
			}
		}
	}
	
}

function recevoirUrl(i)
{
	var url;

	switch (i) {
		case 0:
			url = "https://www.youtube.com/embed/gG7uCskUOrA?rel=0";
			return url;
		case 1:
			url = "https://www.youtube.com/embed/k1-TrAvp_xs?rel=0";
			return url;
		case 2:
			url = "https://www.youtube.com/embed/uW6ivJWbgcQ?rel=0";
			return url;
	}
}
