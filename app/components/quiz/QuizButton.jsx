export const QuizButton = ({canPassToNextQuestion, onNextQuestionSelected, activeQuestionIndex, questionsLength}) => {
    return (
        <>
            <div>
                <button disabled={!canPassToNextQuestion ? 'disabled' : ''}
                        onClick={onNextQuestionSelected}
                        className={canPassToNextQuestion ? 'cursor-pointer bg-green-700' : 'bg-gray-600'}
                >
                    {activeQuestionIndex === questionsLength - 1 ? 'پایان' : 'بعدی'}
                </button>
            </div>
        </>
    )
}