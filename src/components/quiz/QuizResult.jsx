export const QuizResult = ({questions, score}) => {
    return (
        <>
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
        </>
    )
}