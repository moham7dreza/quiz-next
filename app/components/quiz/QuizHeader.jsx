export const QuizHeader = ({showQuizResult, activeQuestionIndex, questionsLength}) => {
    return (
        <>
            <div>
                {
                    !showQuizResult ? (
                        <h2>آزمون : {activeQuestionIndex + 1}, از {questionsLength}</h2>
                    ) : null
                }
            </div>
        </>
    )
}