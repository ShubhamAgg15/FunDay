import { Link } from 'react-router-dom';
import './HomePage.scss';

const instructions = [
    'There is no time limit for any question',
    'Answers are case sensitive',
    'Do not refresh the browser',
    'Click Check button to validate the answer',
    'Next button will be disabled until current question is answered correctly',
    'Click Next button to go to next question',
];

  function HomePage() {
    return (
        <div className="home-page">
            <h4 className="heading">
                Avalara Fun Day
            </h4>
            <p className="instructions">Please read the instructions carefully:</p>
            <ul className="game-rules">
                {
                instructions.map((instruction, index) => 
                    <li key={index}>{instruction}</li>
                )
                }
            </ul>
            <Link className='start-game' to='/game'>Start Game</Link>
        </div>
    );
}

export default HomePage;