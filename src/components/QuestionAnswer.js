import QuestionSet from '../data.json';
import './QuestionAnswer.scss';
import { useState, useEffect } from 'react';

const { questionSet } = QuestionSet;

function QuestionAnswer(props) {
    const { onValidate, onNext, currentQuestionId } = props;
    const [userInput, setUserInput] = useState('');
    const [isValidated, setIsValidated] = useState(false);
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState({});
    const { questionId, question, answer } = currentQuestionDetail;
    useEffect(() => {
        const quesObj = questionSet.find(({ questionId }) => currentQuestionId.toString() === questionId);
        setCurrentQuestionDetail(quesObj);
    }, [currentQuestionId]);

    return (
        <div className='question-answer'>
            <p className="question">
                Ques {questionId}: {question}
            </p>
            <span className='answer-text'>Ans:</span>
            <input
                name='userAnswer'
                className='answer-box'
                placeholder="Enter your answer"
                value={userInput}
                type='text'
                required
                onChange={({ target: { value }}) => setUserInput(value)}
            />
            <div className='buttons'>
                <button disabled={isValidated} onClick={
                    () => {
                        const isValidated = answer === userInput.trim();
                        setIsValidated(isValidated);
                        onValidate(isValidated);
                    }
                }>
                    Check
                </button>
                <button disabled={!isValidated} onClick={
                    () => {
                        setIsValidated(false);
                        setUserInput('');
                        onNext();
                    }
                }>
                    Next
                </button>
            </div>
        </div>
    );
}

export default QuestionAnswer;