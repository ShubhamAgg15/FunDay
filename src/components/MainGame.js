import './MainGame.scss';
import React, { useState } from 'react';
import QuestionSet from '../data.json';
import { setQuestionId, getQuestionId } from '../cookie-service';
import { ToastContainer, toast } from 'react-toastify';
import GameFinished from './GameFinished';
import QuestionAnswer from './QuestionAnswer';
import 'react-toastify/dist/ReactToastify.css';

const { questionSet } = QuestionSet;
const maxQuestionsCount = questionSet.length;

function GamePage() {
    const [currentQuestionId, setCurrentQuestionId] = useState(getQuestionId());
    return (
        currentQuestionId <= maxQuestionsCount ? 
            <div className="MainGame">
                <QuestionAnswer
                    currentQuestionId={currentQuestionId}
                    onValidate={(isValidated) => {
                        if (isValidated) {
                            toast('You are correct!!!', { className: 'success-toast' });
                        } else {
                            toast('Wrong answer, Try again!!!', { className: 'error-toast' });
                        }
                    }}
                    onNext={() => {
                        const nextQuestionId = parseInt(currentQuestionId, 10) + 1;
                        setCurrentQuestionId(nextQuestionId);
                        setQuestionId(nextQuestionId);
                    }}
                />
                <ToastContainer
                    position="top-center"
                    hideProgressBar
                    autoClose={3000}
                    newestOnTop={true}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                />
            </div>
            : <GameFinished />
    );
}

export default GamePage;