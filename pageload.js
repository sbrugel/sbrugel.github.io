$().ready(function() {
	$("#nav").load("https://raw.githubusercontent.com/sbrugel/sbrugel.github.io/main/nav.html"); 
	$("#footer").load("https://raw.githubusercontent.com/sbrugel/sbrugel.github.io/main/footer.html"); 
	if ($(window).width() < 600) {
		$('html').css({'background-color': 'rgb(0,38,255,255)'});

	} else {
		var images = ["https://github.com/sbrugel/sbrugel.github.io/blob/main/img/main1.JPG?raw=true", "https://github.com/sbrugel/sbrugel.github.io/blob/main/img/main2.JPG?raw=true", "https://github.com/sbrugel/sbrugel.github.io/blob/main/img/main3.jpg?raw=true", "https://github.com/sbrugel/sbrugel.github.io/blob/main/img/main4.jpg?raw=true"];
		$('html').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')', '-webkit-background-size': 'cover;', '-moz-background-size': 'cover;', '-o-background-size': 'cover;', 'background-size': 'cover;', 'background-attachment':'fixed'});
	}
});