import './GameFinished.scss';
import { clearQuestionId } from '../cookie-service';

function GameFinished() {
    clearQuestionId();
    return (
        <div className='game-finished'>
            <h1>Finished Game</h1>
            <h3>Thank You!!!</h3>
        </div>
    );
}

export default GameFinished;
