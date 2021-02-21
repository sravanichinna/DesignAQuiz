function Quiz(questions){
	this.score=0;
	this.questions=questions;
	this.questionIndex=0;
}

Quiz.prototype.getQuestionIndex=function(){
	return this.questions[this.questionIndex];
}
Quiz.prototype.guess=function(answer){
	if(this.getQuestionIndex().isCorrectAnswer(answer)){
	this.score++;
}
	this.questionIndex++;
}

Quiz.prototype.isEnded=function(){
	return this.questionIndex===this.question.length;
}

function question(text,choices,answer){
	this.text=text;
	this.choices=choice;
	this.answer=answer;
}
Question.prototype.isCorrectAnswer=function(choice){
	return this.answer===choice;
}

function populate(){
	if(quiz.isEnded()){
		showscores();
}
else{
	// show question
	var element = document.getElementById("question");
	element.innerHTML=quiz.getQuestionIndex().text;

  //show options
	var choices=quiz.getQuestionIndex().choices;
	for(var i=0;i<choices.length;i++){
	var element=document.getElementById("choice""+i);
	element.innerHTML=choice[i];
	guess("btn"+i,choice[i]);
	}
	show progress():
	}
};
function guess(id,guess){
	var button =document.getElementById(id);
	button.onclick=function(){
	quiz.guess(guess);
	populate();
	}
};
function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+i;
	var element ="Question" +currentQuestionNumber +"of"+quiz.question.length;
};
function showScores(){
	var guessOverHTML="<h1>Result</h1>";
	gameOverHTML+="<h2 id='score'> yoour scores:" +quiz.score+"</h2>";
	var element = document.getElementById("quiz")
	élement.innerHTML = gameOverHTML;
};

//create questions here

var questions=[

new Question=("Hyper Text Markup Language Stand For?",["JavaScript","XHTML","CSS","HTML"],"HTML"),
new Question=("Which Language is Used for Styling web page?",["HTML","JQuery","CSS","XHL"],"CSS"),
new Question=("Which is not a javaScript Framework?",["python Script","JQuery","Django","Nodejs"],"Django"),
new Question=("Which is used to connect to Database?" ,["PHP","HTML","JS","All"],"PHP"),
new Question=("Webdevtrick.com is about..?",["web design","Graphic design","SEO&Development","All"],"All")
];

// create quiz
	var quiz new Quiz(questions);

// display quiz
	populate();
