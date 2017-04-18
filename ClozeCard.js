//* Defining variables

var inquirer = require("inquirer");
var clozeCardArray = [];
var cardCount = 0;

// Defining ClozeCard function
function ClozeCard(text, cloze){
		this.text = text;
		this.cloze = cloze;
		this.partialText = this.text.replace(this.cloze, '...');

		};

clozeCardArray.push(new ClozeCard("George Washington was the first President of the United States?", "George Washington"), new ClozeCard("The best Coding BootCamp in the world is ....?", "gwcb"), new ClozeCard("The most recent Super Bowl took place in the city of Houston?", "Houston"), new ClozeCard("2 + 2 = 4 ?", "four"), new ClozeCard("A lemon is typically yellow in color.", "yellow")
	);

//console.log(clozeCardArray);

//* Defining function askQuestion
var askQuestion = function(){
	if (cardCount < clozeCardArray.length){
		inquirer.prompt([
		{
			name:"question",
			message: clozeCardArray[cardCount].partialText
		}
		]).then(function(answers){
			var useranswer = answers.question;
			var flashcardCloze = clozeCardArray[cardCount].cloze;

			if(useranswer.toLowerCase() === flashcardCloze.toLowerCase()){
				console.log("Yes, " + clozeCardArray[cardCount].text);
				cardCount++;
				askQuestion();
			}else{
				console.log("Oh too bad! " + clozeCardArray[cardCount].text);
				cardCount++;
				askQuestion();
			}

		});
	}
};

//Calling back function askQuestion
askQuestion();