var numSquares = 9
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var pickedColour = pickColour();
var messageDisplay = document.getElementById("outcome");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	numSquares = 3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if (colours[i]) {
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	numSquares = 9;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){	
	squares[i].style.backgroundColor = colours[i];
	squares[i].style.display = "block";
	}
});



resetButton.addEventListener("click", function(){
	messageDisplay.textContent = "";
	// generate new colours
	colours = generateRandomColours(numSquares);
	// say new colours when clickedColour
	resetButton.textContent = "New colours?";
	// reset h1 colour
	h1.style.backgroundColor = "steelblue";
	// pick new random colour
	pickedColour = pickColour();
	// change colour display
	colourDisplay.textContent = pickedColour;
	// change colour of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
	};
})

for (var i = 0; i < squares.length; i++){
	// add initial colours
	squares[i].style.backgroundColor = colours[i];
	// add click listnerers
	squares[i].addEventListener("click", function(){
		// get colour of picked square
		var clickedColour = this.style.backgroundColor;
		// compare the colour
		if(clickedColour === pickedColour){
			messageDisplay.textContent = "Correct";
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
			resetButton.textContent = "Play again?";
		}else{
			this.style.backgroundColor =  "#232323";
			messageDisplay.textContent = "Try again";
		}

	});
}

colourDisplay.textContent = pickedColour;

function changeColours(colour){
	for(var i = 0; i < colours.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour(){
	var random = Math.floor(Math.random()*colours.length);
	return colours[random];
}

function generateRandomColours(num){
	// make array
	var arr = []
	// add num random colours
	for(var i = 0; i < num; i++){
		// get random colour, push into array
		arr.push(randomColours());
	}
	// return array
	return arr;
}

function randomColours(){
	// pick a red 0 -255
	var r = Math.floor(Math.random() * 256);
	// pick a gree 0 -255
	var g = Math.floor(Math.random() * 256);
	// pick a blue 0 -255
	var b = Math.floor(Math.random() * 256);
	// return rgb
	return "rgb(" + r + ", " + g +  ", " + b + ")";
}

