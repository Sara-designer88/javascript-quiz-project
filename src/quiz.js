class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    // 2. getQuestion()
    // should return the item from the questions array at the position of currentQuestionIndex
    getQuestion(){
  
        
    }
    
    // 3. moveToNextQuestion()
   //should increment the currentQuestionIndexby1
    moveToNextQuestion(){
      

    }

    // 4. shuffleQuestions()
    //should shuffle the items in the questions array.
    shuffleQuestions(){
     
    }

    // 5. checkAnswer(answer)
    //should increase correctAnswers by 1 when called with a correct answer for the current question
    checkAnswer(answer){
    
    }

    // 6. hasEnded()
    //should return false when currentQuestionIndex is less than the questions array length
    //should return true when currentQuestionIndex is equal to the questions array length
    hasEnded(){
   
    }

    averageDifficulty(){


    }
}