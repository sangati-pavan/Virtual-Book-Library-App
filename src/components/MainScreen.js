import React, {useState} from 'react'
import {QRCode} from 'qrcode.react' // Use named import here
import './MainScreen.css'

const MainScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [players, setPlayers] = useState([])
  const [correctPlayer, setCorrectPlayer] = useState(null)

  // Sample questions and answers
  const questions = [
    {
      questionText: 'What is the capital of France?',
      options: ['A. Berlin', 'B. Madrid', 'C. Paris', 'D. Rome'],
      correctAnswer: 'C',
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      options: ['A. Earth', 'B. Mars', 'C. Venus', 'D. Jupiter'],
      correctAnswer: 'B',
    },
    {
      questionText: 'Who developed the theory of relativity?',
      options: ['A. Isaac Newton', 'B. Albert Einstein', 'C. Galileo Galilei', 'D. Nikola Tesla'],
      correctAnswer: 'B',
    },
    {
      questionText: 'Which element has the chemical symbol "O"?',
      options: ['A. Oxygen', 'B. Gold', 'C. Iron', 'D. Hydrogen'],
      correctAnswer: 'A',
    },
    {
      questionText: 'Which planet is the largest in our solar system?',
      options: ['A. Earth', 'B. Mars', 'C. Jupiter', 'D. Saturn'],
      correctAnswer: 'C',
    }  
  ]

  // Handle player join (simulate)
  const handlePlayerJoin = playerName => {
    setPlayers([...players, {name: playerName}])
  }

  // Handle answer submission
  const handleAnswerSubmit = (playerName, answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setCorrectPlayer(playerName)
      setTimeout(() => {
        setCurrentQuestion(prev => (prev + 1) % questions.length) // Move to the next question
        setCorrectPlayer(null)
      }, 3000)
    }
  }

  return (
    <div className="main-screen">
      <h2>Question: {questions[currentQuestion].questionText}</h2>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <QRCode value="http://localhost:3000" />
      {/* QRCode for player join */}
      <div className="players">
        <h3>Players Joined:</h3>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
        </ul>
      </div>
      {correctPlayer && <h3>Congratulations, {correctPlayer}!</h3>}
    </div>
  )
}

export default MainScreen
