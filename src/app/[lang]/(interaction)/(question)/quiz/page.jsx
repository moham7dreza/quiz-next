'use client'

import {quiz} from "data";
import {useState} from "react";
import {QuizAnswers, QuizButton, QuizHeader, QuizResult,} from "components";

export default function Quiz({dictionary, lang}) {
    // console.log(lang)
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [canPassToNextQuestion, setCanPassToNextQuestion] = useState(false)
    const [showQuizResult, setShowQuizResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState()
    const [isSelectedAnswerCorrect, setIsSelectedAnswerCorrect] = useState();
    const [score, setScore] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const questions = lang === 'en-US' ? quiz.questionsEn : quiz.questionsFa
    // console.log(questions)

    // const [currentQuestion, setCurrentQuestionIndex] = useState('')
    // const [answers, setAnswers] = useState([])
    // const [correctAnswer, setCorrectAnswer] = useState('')

    // useEffect(() => {
    //     getData()
    //     console.log(2)
    // }, [score]);

    const {
        question: currentQuestion,
        answers,
        correctAnswer,
    } = questions[activeQuestionIndex]

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        setCanPassToNextQuestion(true)
        setIsSelectedAnswerCorrect(answer === correctAnswer)
    }

    const onNextQuestionSelected = () => {
        // console.log(isSelectedAnswerCorrect)
        setSelectedAnswerIndex(null)
        setScore((prevState) => isSelectedAnswerCorrect ?
            {...prevState, score: prevState.score + 5, correctAnswers: prevState.correctAnswers + 1} :
            {...prevState, wrongAnswers: prevState.wrongAnswers + 1})
        // console.log(showQuizResult, score)
        if (activeQuestionIndex !== questions.length - 1) {
            // console.log(activeQuestionIndex)
            setActiveQuestionIndex(prevState => prevState + 1)
            // setCurrentQuestionIndex('')
            // setAnswers([])
            // setCorrectAnswer('')
        } else {
            // console.log(showQuizResult)
            setActiveQuestionIndex(0)
            setShowQuizResult(true)
        }
        setCanPassToNextQuestion(false)
    }

    // const getData = () => {
    //     const activeQuestion = questions[activeQuestionIndex]
    //     setCurrentQuestionIndex(activeQuestion.question)
    //     setAnswers(activeQuestion.answers)
    //     setCorrectAnswer(activeQuestion.correctAnswer)
    // }

    // const timeDelay = async () => {
    //     const delay = 1 + Math.floor(Math.random() * 5)
    //
    //     await timeout(delay * 1000) // ms
    // }
    //
    // const timeout = (delay) => new Promise(time => setTimeout(time, delay))

    return (
        <>
            <h1>صفحه آزمون</h1>
            <QuizHeader activeQuestionIndex={activeQuestionIndex} questionsLength={questions.length}
                        showQuizResult={showQuizResult}/>
            <div>
                {
                    !showQuizResult ? (
                        <div className='flex-center flex-col'>
                            <h3>{currentQuestion}</h3>
                            <QuizAnswers answers={answers} onAnswerSelected={onAnswerSelected}
                                         selectedAnswerIndex={selectedAnswerIndex}/>
                            <QuizButton questionsLength={questions.length} activeQuestionIndex={activeQuestionIndex}
                                        canPassToNextQuestion={canPassToNextQuestion}
                                        onNextQuestionSelected={onNextQuestionSelected}/>
                        </div>
                    ) : (
                        <QuizResult questions={questions} score={score}/>
                    )
                }
            </div>
        </>
    )
}