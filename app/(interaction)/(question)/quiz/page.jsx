'use client'

import {quiz} from "../../../data";
import {useState} from "react";

export default function Quiz() {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [canPassToNextQuestion, setCanPassToNextQuestion] = useState(false)
    const [showQuizResult, setShowQuizResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState()

    const {questions} = quiz
    console.log(questions)

    const activeQuestion = questions[activeQuestionIndex]

    const {
        question,
        answers,
        correctAnswer
    } = activeQuestion

    return (
        <>
            {
                !showQuizResult ? (
                    <div className='flex-center'>
                        <h3>{question}</h3>
                        {
                            answers.map((answer, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedAnswerIndex(index)
                                        setCanPassToNextQuestion(true)
                                    }}
                                >
                                    {answer}
                                </button>
                            ))
                        }
                    </div>
                ) : (
                    <section>

                    </section>
                )
            }
        </>
    )
}