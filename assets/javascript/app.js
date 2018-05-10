
setTimeout(timeUp, 1000 * 15);

function timeUp() {
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
  }
  



$("start-button").on("click","button");

function Quiz(questions, quizContainer, resultsContainer, submitButton){

    var myQuestions = [
        {
            question: "What year did the first Kodak Brownie camera come out??",
            answers: {
                a: '1910',
                b: '1900',
                c: '1800'
            },
            correctAnswer: 'b'
        },
        {
            question: "HOW much money did the film for the first Kodak Brownie cost?",
            answers: {
                a: '1.00',
                b: '2.00',
                c: '3.00'
            },
            correctAnswer: 'a'
        }
    ];

}
