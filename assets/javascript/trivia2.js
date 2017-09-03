(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  setTimeout(timeUp, 1000*300);

  function timeUp () {
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    $("#time-left").text(1000*300);
    console.log ("time is up");
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var currentQuestion = 0;
  var myQuestions = [
    {
      question: "How does Harry breathe underwater during the second task of the Triwizard Tournament?",
        
        answers: {
          a: ' he transfigures into a shark ',
          b: ' he kisses a mermaid ',
          c: ' he eats gillyweed ',
          d: ' he performs the bubble-head charm '
        },
        correctAnswer: 'c'
      },
      {
        question: "Which one of these is not one of the unforgivable curses?",
        
        answers: {
          a: ' cruciatus curse ',
          b: ' sectumsempra ',
           c: ' imperius curse ',
          d: ' avada kedavra '
         },
        correctAnswer: 'b'
      },  
      {
        question: "Who guards the entrance to the Gryffindor common room?",
        
        answers: {
          a: ' the grey lady ',
          b: ' the fat friar ',
          c: ' the bloody baron ', 
          d: ' the fat lady '
        },
        correctAnswer: 'd'
      },
      {
        question: "What does O.W.L. stand for?",
       
        answers: {
          a: ' ordinary wizarding level ',
          b: ' official wizarding level ',
          c: ' outstanding wizard learning ',
          d: ' offical wizard loser '
        },
        correctAnswer: 'a'
      },
      {
        question: "What do you say to make the Marauder's Map show the map?",
        
        answers: {
          a: ' open seaseme ',
          b: ' i solemly swear that i am up to no good ',
          c: ' hocus pocus ',
          d: ' show me hogwarts '
        },
        correctAnswer: 'b'
      },
      {
        question: "How many Weasley siblings are there?",
        
        answers: {
          a: ' 5 ',
          b: ' 7 ',
          c: ' 4 ',
          d: ' 6 '
        },
        correctAnswer: 'b'
      },
      {
        question: "Which is not a form of wizarding currency?",
        
        answers: {
          a: ' sickles ',
          b: ' knuts ',
          c: ' doxies ',
          d: ' galleons '
        },
        correctAnswer: 'c'
      },
      {
        question: "What positon does Harry play in Quidditch?",
        
        answers: {
          a: ' seeker ',
          b: ' chaser ',
          c: ' beater ',
          d: ' keeper '
        },
        correctAnswer: 'a'
      },
      {
        question: "What magical creature can transform into a person's worst fear?",
        
        answers: {
          a: ' doxy ',
          b: ' bowtruckle ',
          c: ' flobberworm ',
          d: ' boggart '
        },
        correctAnswer: 'd'
      },
      {
        question: "What is the name of the three headed dog in Harry Potter and the Sorcerers Stone?",
        
        answers: {
          a: ' fluffy ',
          b: ' fuzzy ',
          c: ' cuddles ',
          d: ' hairy '
        },
        correctAnswer: 'a'
      }
    ];


  
  buildQuiz();

  
  submitButton.addEventListener("click", showResults);
})();