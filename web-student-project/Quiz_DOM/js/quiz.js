var cur_question = 0; 
var your_choice = [];
var cur_choice = "";

window.onload =  function() {
	document.getElementById('retry').style.display = "none";
	cur_question = 0; 
	display_content();
}

function display_content() {
	if (cur_question >= 0 && cur_question < quizz.length) {
		cur_choice = "";
		document.getElementById("content_question").innerText = quizz[cur_question].question;
		document.getElementById("choiceA").innerText = quizz[cur_question].choiceA;
		document.getElementById("choiceB").innerText = quizz[cur_question].choiceB;
		document.getElementById("choiceC").innerText = quizz[cur_question].choiceC;
		document.getElementById("choiceD").innerText = quizz[cur_question].choiceD;
		var buttons = document.getElementsByClassName("btn");
		for (var i=0; i<buttons.length; i++) {
			buttons[i].style.background = "linear-gradient(to bottom, #3366ff 0%, #ffffff 100%)";
		}
	}
}

function next() {
	your_choice.push(cur_choice);
	console.log(your_choice);
	cur_question++;
	if (cur_question >= quizz.length) calculateScore();
	else {
		display_content();
	}
}

function choice(button) {
	var buttons = document.getElementsByClassName("btn");
	for (var i=0; i<buttons.length; i++) {
		buttons[i].style.background = "linear-gradient(to bottom, #3366ff 0%, #ffffff 100%)";
	}
	button.style.background = "linear-gradient(to bottom, rgba(255,0,0,0), green)";
	cur_choice = button.value;
}

function calculateScore() {
	var score = 0;
	for (var i=0; i<quizz.length; i++) {
		if (quizz[i].answer == your_choice[i]) score++;
	}
	console.log(score);
	if (score == quizz.length) window.location.href = "result.html";
	else {
		document.getElementById('retry').style.display = "block";
		document.getElementById('content').style.display = "none";
		document.getElementById('info').innerText = score+"/"+quizz.length + "\nOOP! Better luck next time. Try your best."
	}
}

function retry() {
	window.location.href = "quiz.html";
}

