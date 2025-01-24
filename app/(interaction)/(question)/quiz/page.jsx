'use client'

import {quiz} from "../../../data";
import {useState} from "react";
import {reset} from "next/dist/lib/picocolors";

export default function Quiz() {

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

    const {questions} = quiz
    // console.log(questions)

    const activeQuestion = questions[activeQuestionIndex]

    const {
        question,
        answers,
        correctAnswer
    } = activeQuestion

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
        } else {
            // console.log(showQuizResult)
            setActiveQuestionIndex(0)
            setShowQuizResult(true)
        }
        setCanPassToNextQuestion(false)
    }

    return (
        <>
            <h1>صفحه آزمون</h1>
            <div>
                {
                    !showQuizResult ? (
                        <h2>آزمون : {activeQuestionIndex + 1}, از {questions.length}</h2>
                    ) : null
                }
            </div>
            <div>
                {
                    !showQuizResult ? (
                        <div className='flex-center flex-col'>
                            <h3>{question}</h3>
                            <div className='flex flex-col mt-4'>
                                {
                                    answers.map((answer, index) => (
                                        <button
                                            key={index}
                                            onClick={() => onAnswerSelected(answer, index)}
                                            className={selectedAnswerIndex === index ? 'bg-red-600' : ''}
                                        >
                                            {answer}
                                        </button>
                                    ))
                                }
                                <button disabled={!canPassToNextQuestion ? 'disabled' : ''}
                                        onClick={onNextQuestionSelected}
                                        className={canPassToNextQuestion ? 'cursor-pointer bg-green-700' : 'bg-gray-600'}
                                >
                                    {activeQuestionIndex === questions.length - 1 ? 'پایان' : 'بعدی'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <section>
                            <h3>نتایج</h3>
                            <h4>به طور کلی {(score.score / 25) * 100}% سوالات جواب داده شده است.</h4>
                            <p>کل سوالات : {questions.length}</p>
                            <p>سوالات درست : {score.correctAnswers}</p>
                            <p>سوالات غلط : {score.wrongAnswers}</p>

                            <button onClick={() => window.location.reload()}>
                                شروع مجدد آزمون
                            </button>
                        </section>
                    )
                }
            </div>
        </>
    )
}