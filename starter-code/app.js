window.onload = function () {
	players = {
		unicorn: {
			div: document.getElementById("unicorn"),
			name: "Unicorn"
			//audio: new Audio(media/example.wav),
		},
		godzilla: {
			div: document.getElementById("godzilla"),
			name: "Godzilla"
			//audio: new Audio(media/example.wav),
		}
};
	//startclucking();
	activateButtons();
};

var players = {};
/*()
function startClucking () {
	//play audio loop infinite 
	players.chicken.audio.addEventListener("ended", function() {
		this.currentTime = 0;
		this.play();
	}, false);
	// players.chicken.audio.play();
};


function activateButtons () {
	// toggle between button turns chick sound 0/f
	document.getElementById("audio").onclick = function () {
		!players.chicken.audio.paused ? players.chicken.audio.pause() : players.chicken.audio.play();
	};
};
*/
function startGame(players) {
	//start players on left
	players.unicorn.div.style.left = 0;
	players.godzilla.div.style.left = 0;

	//stop init anim
	document.getElementById("go").className = "";
	document.getElementsByTagName("img").className = "";

	///moveChic();

	document.onkeydown = function(key) {
		players.unicorn.positon = parseInt(players.unicorn.div.style.left, 10);
		players.godzilla.positon = parseInt(players.godzilla.div.style.left, 10);
		checkWinner();
		movePlayer(key)
		};
	};

	// move chicken func 

	function checkWinner(){
		if (players.unicorn.positon + players.unicorn.div.offsetWidth >= window.innerWidth - 40) {
			setWinState(players.unicorn);
		};
		if (players.godzilla.positon + players.godzilla.div.offsetWidth >= window.innerWidth - 40) {
			setWinState(players.godzilla);
		};
	};

function movePlayer(key) {
	switch(key.which) {
		case 90: //press z to make homer move move move
			var newUnicornPosition = players.unicorn.positon += 40;
			players.unicorn.player1.style.left = newUnicornPosition + "px";
			break;
		case 39: // press right arrow to make godzilla go
			var newGodzillaPosition = characters.godzilla.position += 40;
			players.godzilla.player2.style.left = newGodzillaPositon + "px";
			break;
	};
};


function setWinState(player){
	// stop players from moving
	document.onkeydown = null;
	// display winner and win image
	var img = document.createElement("img");
	img.setAttribute("id", "dinner");
	img.src = "imgages/wiiner.png";
	document.getElementById("container").appendChild(img);
	document.getElementsByTagName("h1")[0].innerText = player.name + " WINS!!!";
	player.audio.play();
}


















