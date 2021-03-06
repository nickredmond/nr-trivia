var currentQuestion = null;
var questionBank = null;
var answers = [];

function getSelectedAnswer() {
	var selectedAnswer = document.querySelector("input[name='nr-question']:checked");
	var answer = null;
	if (selectedAnswer) {
		var answerId = selectedAnswer.getAttribute("nr-answer");
		answer = document.getElementById(answerId).innerHTML;
	}
	
	return answer;
}

function getQuestion() {
	currentQuestion = questionBank.shift();
}

function getQuestionNumber() {
	return Math.abs(questionBank.length - QUIZ_LENGTH);
}

function queryQuestionsWithDifficulty(questions, difficulty, amount) {
	var allQuestions = questions.filter(function(question) {
		return question["difficulty"] === difficulty
	});
	var result = [];
	for (var i = 0; i < amount; i++) {
		var index = Math.floor(Math.random() * allQuestions.length);
		result.push(allQuestions.splice(index, 1)[0]);
	}

	return result;
}

function getFirstQuestion() {
	var questions = jQuery.extend(true, [], QUESTIONS);
	var easyQuestions = queryQuestionsWithDifficulty(questions, "easy", 8);
	var mediumQuestions = queryQuestionsWithDifficulty(questions, "medium", 7);
	var hardQuestions = queryQuestionsWithDifficulty(questions, "hard", 6);
	var expertQuestions = queryQuestionsWithDifficulty(questions, "expert", 4);
	questionBank = [].concat(easyQuestions, mediumQuestions, hardQuestions, expertQuestions);

	getQuestion();
}

function startTest(quizName) {
	// getFirstQuestion();
	// fillQuestion();
	$.getJSON("/" + quizName)
		.done(function(data){
			console.log("data: " + JSON.stringify(data));
		})
		.fail(function(error){
			if (error["status"] === 404) {
				document.getElementById("quiz-not-found-label").innerHTML = quizName;
				document.getElementById("not-found-alert").style.display = "block";
			}
		});

	document.getElementById("homepage-area").style.display = "none";
	document.getElementById("finished-area").style.display = "none";
	document.getElementById("question-area").style.display = "block";
}
function createQuiz() {
	window.location.href = "/create-quiz";
}

function finishTest() {
	$.post("/grade-quiz", JSON.stringify({ "answers": answers }), function(data) {
		var mastery = data.mastery_score;
		var masteryRank = document.getElementById("mastery-rank");

		var progressBar = document.getElementById("percent-progress");
		progressBar.setAttribute("aria-valuenow", mastery);
		progressBar.style.width = mastery + "%";

		document.getElementById("percent-correct-label").innerHTML = mastery.toString();

		var progressClassname = "progress-bar progress-bar-striped active";
		var masteryClassname = "label";
		var rank = "";
		
		if (mastery >= 80) {
			progressClassname += " progress-bar-success";
			masteryClassname += " label-success";
			rank = "Companion";
		}
		else if (mastery >= 50) {
			progressClassname += " progress-bar-warning";
			masteryClassname += " label-warning";
			rank = "Friend";
		}
		else {
			progressClassname += " progress-bar-danger";
			masteryClassname += " label-danger";
			rank = "Associate";
		}
		progressBar.className = progressClassname;
		masteryRank.className = masteryClassname;
		masteryRank.innerHTML = rank + " of Nick";

		answers = [];
		document.getElementById("question-area").style.display = "none";
		document.getElementById("finished-area").style.display = "block";
		window.scrollTo(0, 0);
	});
 }

function fillQuestion() {
	document.getElementById("question-title").innerHTML = "Question #" + getQuestionNumber();
	document.getElementById("question-text").innerHTML = currentQuestion["question_text"];
	document.getElementById("possible-answer-1").innerHTML = currentQuestion["possible_answers"][0];
	document.getElementById("possible-answer-2").innerHTML = currentQuestion["possible_answers"][1];
	document.getElementById("possible-answer-3").innerHTML = currentQuestion["possible_answers"][2];
	document.getElementById("possible-answer-4").innerHTML = currentQuestion["possible_answers"][3];
}

function getNextQuestion(answer) {
	var key = currentQuestion["question_id"];
	var value = currentQuestion["possible_answers"].indexOf(answer);
	answers.push({ "key": key, "value": value });

	if (getQuestionNumber() >= QUIZ_LENGTH) {
		finishTest();
	}
	else {
		getQuestion();
		fillQuestion();
	}
}

function onAnswerSubmit() {
	var answer = getSelectedAnswer();

	if (answer) {
		document.getElementById("no-answer-alert").style.display = "none";
		getNextQuestion(answer);
	}
	else {
		document.getElementById("no-answer-alert").style.display = "block";
	}
}