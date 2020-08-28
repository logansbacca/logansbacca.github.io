
  let quizContent = document.getElementById("quiz");
  let resultContent = document.getElementById("result");
  let jonCount = 0;
  let daenerysCount= 0;
  let aryaCount= 0;
  let cerseiCount = 0;
  let character = "";
  let imgSrc = "";
  const questions = [{
      question: "What movie do you like the most?",
      answers: {
        a: "Brave Heart",
        b: "How To Train Your Dragon",
        c: "Hunger Games",
        d: "Despicable me"
      },
    },
    {
      question: "What's your favorite color?",
      answers: {
        a: "Black",
        b: "Silver",
        c: "Purple",
        d: "Red"
      },
    },
    {
      question: "Pick a song:",
      answers: {
        a: "Eye of the Tiger",
        b: "Girl on Fire",
        c: "We Will Rock You",
        d: "I just can't wait to be king (The Lion King)"
      },
    },
    {
      question: "What's your Favortie Season?",
      answers: {
        a: "Spring",
        b: "Summer",
        c: "Winter",
        d: "Fall"
      },
    }
  ];

  function start(){
    document.getElementById("content").classList.add("show");
    document.getElementById("start-bt").classList.add("hide");
  }

  function initQuiz() {
    let html = [];
    questions.forEach(
      function(currentQuestion, questionNumber) {
        let answers = [];
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );

        }
        html.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        )
      }

    );
    quizContent.innerHTML= html.join("")


  }

  function showResult(){

       const answerContainers = quizContent.querySelectorAll('.answers');

       let numCorrect = 0;

       questions.forEach( (currentQuestion, questionNumber) => {

         const answerContainer = answerContainers[questionNumber];
         const selector = `input[name=question${questionNumber}]:checked`;
         const userAnswer = (answerContainer.querySelector(selector) || {}).value;

         if(userAnswer=="a"){
           jonCount++;
         }
         else if (userAnswer=="b"){
           daenerysCount++;
         }
         else if (userAnswer== "c") {
           aryaCount++;
         }
         else {
           cerseiCount++;
         }

       });
       if(jonCount>=daenerysCount) {
         if (jonCount>= aryaCount) {
           if(jonCount>= cerseiCount){
             character = "Jon Snow";
             imgSrc="jon.jpeg"
           }
         }
       }
        if(aryaCount>=daenerysCount) {
         if (aryaCount>= jonCount) {
           if(aryaCount>= cerseiCount){
             character = "Arya Stark";
             imgSrc="a.png"
           }
         }
       }
       if (daenerysCount>= jonCount) {
         if (daenerysCount>= aryaCount) {
           if(daenerysCount>= cerseiCount){
             character = "Daenerys Targaryen";
             imgSrc="d.jpg"
           }
         }
       }
       if(cerseiCount>=daenerysCount) {
        if (cerseiCount>= jonCount) {
          if(cerseiCount>= aryaCount){
            character = "Cersei";
            imgSrc="da.jpg"
          }
        }
      }

      resultContent.innerHTML = "Your Character Is " + character + "<img class='character' src='assets/images/"+ imgSrc+ "'/>";
     document.getElementById("quiz-content").classList.add("hide");
   }
  initQuiz();
