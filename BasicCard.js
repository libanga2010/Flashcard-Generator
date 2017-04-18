// Defining variables
var inquirer = require ("inquirer");
var fs = require ("fs");
var basicCardArray = [];

//Defining functin BasicCard
function BasicCard(front, back){
	this.front = front;
	this.back = back;
};

//push questions and answers to an array to compare against a users input and to know when the quiz has ended.

basicCardArray.push(new BasicCard(".... was the first President of the United States?", "george washington"), 
	new BasicCard("The best Coding BootCamp in the world is ....?", "gwcb"),
	new BasicCard("The most recent Super Bowl took place in the city of ....?", "houston"),
	new BasicCard("2 + 2 = ....?", "four"),
	new BasicCard("A Lemon is typically .... in color.", "yellow")
	);
//console.log(basicCardArray);
//console.log(basicCardArray.length);

var cardCount = 0;

// Defining function askQuestion
var askQuestion = function(){
	if (cardCount < basicCardArray.length){
//		console.log(cardCount);
//		console.log(basicCardArray.length);
		inquirer.prompt([
		{
			name:"question",
			message: basicCardArray[cardCount].front
		}
		]).then(function(answers){
			var useranswer = answers.question;
			var flashcardBack = basicCardArray[cardCount].back;

			if (useranswer.toLowerCase() === flashcardBack){
				console.log("Excellent! " + useranswer.toLowerCase() + " is correct!");
				cardCount++;
				askQuestion();
			}else{
				console.log("Oh too bad! " + basicCardArray[cardCount].back + " was the answer we were looking for");
				cardCount++;
				askQuestion();	
			}
				
		});
	}
};

// Calling back function askQuestion
askQuestion();
