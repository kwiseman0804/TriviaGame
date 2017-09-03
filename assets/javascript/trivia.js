function generateQuiz (question, quizContainer, resultsContainer, submitButton){

		var quizContainer = document.getElementById("quiz");
		$("#quiz").text(generateQuiz());
		var resultsContainer = document.getElementById("results");
		var submitButton = document.getElementById("submit");

	function showQuestions (questions, quizContainer){
		var myQuestions = [
			{
				question: "How does Harry breathe underwater during the second task of the Triwizard Tournament?",
				answers: {
					a: 'he transfigures into a shark',
					b: 'he kisses a mermaid',
					c: 'he eats gillyweed',
					d: 'he performs the bubble-head charm'
				},
				correctAnswer: 'c'
			},
			{
				question: "Which one of these is not one of the unforgivable curses?",
				answers: {
					a: 'cruciatus curse',
					b: 'sectumsempra',
					c: 'imperius curse',
					d: 'avada kedavra'
				},
				correctAnswer: 'b'
			},	
			{
				question: "Who guards the entrance to the Gryffindor common room?",
				answers: {
					a: 'the grey lady',
					b: 'the fat friar',
					c: 'the bloody baron', 
					d: 'the fat lady'
				},
				correctAnswer: 'd'
			},
			{
				question: "What does O.W.L. stand for?",
				answers: {
					a: 'ordinary wizarding level',
					b: 'official wizarding level',
					c: 'outstanding wizard learning',
					d: 'offical wizard loser'
				},
				correctAnswer: 'a'
			},
			{
				question: "What do you say to make the Marauder's Map show the map?",
				answers: {
					a: 'open seaseme',
					b: 'i solemly swear that i am up to no good',
					c: 'hocus pocus',
					d: 'show me hogwarts'
				},
				correctAnswer: 'b'
			},
			{
				question: "How many Weasley siblings are there?",
				answers: {
					a: '5',
					b: '7',
					c: '4',
					d: '6'
				},
				correctAnswer: 'b'
			},
			{
				question: "Which is not a form of wizarding currency?",
				answers: {
					a: 'sickles',
					b: 'knuts',
					c: 'doxies',
					d: 'galleons'
				},
				correctAnswer: 'c'
			},
			{
				question: "What positon does Harry play in Quidditch?",
				answers: {
					a: 'seeker',
					b: 'chaser',
					c: 'beater',
					d: 'keeper'
				},
				correctAnswer: 'a'
			},
			{
				question: "What magical creature can transform into a person's worst fear?",
				answers: {
					a: 'doxy',
					b: 'bowtruckle',
					c: 'flobberworm',
					d: 'boggart'
				},
				correctAnswer: 'd'
			},
			{
				question: "What is the name of the three headed dog in Harry Potter and the Sorcerers Stone?",
				answers: {
					a: 'fluffy',
					b: 'fuzzy',
					c: 'cuddles',
					d: 'hairy'
				},
				correctAnswer: 'a'
			}
		];

	function showResults (questions, quizContainer, resultsContainer){

	}

	function showQuestions (questions, quizContainer){
		var output = [];
		var answers;

		for (var i=0; i < questions.length; i++)  { 
			answers = [];

			for (letter in questions [i].answers) {
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
							+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);

			}

			output.push(
				'<div class= "questions">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
				);
		}

		quizContainer.innterHMTL = output.join('');

	}
	

		submitButton.onclick = function (){

	
		showResults(questions, quizContainer, resultsContainer);{
	}
		var answerContainers = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		for (var i=0; i < questions.length; i++){
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			if (userAnswer===questions[i].correctAnswer){
				numCorrect++;

				answerContainers[i].style.color = 'lightgreen';
			}

			else{
				answerContainers[i].style.color = 'red';
			}
		}


	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;


		


}
}
}



