const passOneEl = document.getElementById("passOne-el");
const passTwoEl = document.getElementById("passTwo-el");

let characters = [];

let password = false;

const generate = () => {
	if (!password) {
		characters = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"~",
			"`",
			"!",
			"@",
			"#",
			"$",
			"%",
			"^",
			"&",
			"*",
			"(",
			")",
			"_",
			"-",
			"+",
			"=",
			"{",
			"[",
			"}",
			"]",
			",",
			"|",
			":",
			";",
			"<",
			">",
			".",
			"?",
			"/",
		];
		renderPass();
		password = false;
	}
};

function copy(that) {
	var inp = document.createElement("input");
	document.body.appendChild(inp);
	inp.value = that.textContent;
	inp.select();
	document.execCommand("copy", false);
	inp.remove();
}

const renderPass = () => {
	passOneEl.innerText = "";
	for (let i = 0; i < 15; i++) {
		let randomNumber = getRandomNumber();
		passOneEl.style.display = "flex";
		passOneEl.innerText += characters[randomNumber];
		password = true;
	}

	passTwoEl.innerText = "";
	for (let i = 0; i < 15; i++) {
		let randomNumber2 = getRandomNumber();
		passTwoEl.innerText += characters[randomNumber2];
		passTwoEl.style.display = "flex";
		password = true;
	}
};

const getRandomNumber = () => {
	return Math.floor(Math.random() * characters.length);
};
