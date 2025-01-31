import {Suspense} from "react";
import Loading from "../../app/(interaction)/(question)/quiz/loading";

export const QuizAnswers = ({answers, onAnswerSelected, selectedAnswerIndex}) => {
    return (
        <>
            <div className='flex flex-col mt-4'>
                {
                    // answers.length > 0 ?
                    answers.map((answer, index) => (
                        <button
                            key={index}
                            onClick={() => onAnswerSelected(answer, index)}
                            className={selectedAnswerIndex === index ? 'bg-red-600' : ''}
                        >
                            <Suspense fallback={<Loading count={1}/>}>
                                {/*<span>{timeDelay().then(() => answer)}</span>*/}
                                <span>{answer}</span>
                            </Suspense>
                        </button>
                    ))
                    // : <Loading count={answers.length}/>
                }
            </div>
        </>
    )
}