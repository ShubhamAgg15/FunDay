import { Route, Routes } from 'react-router-dom';
import GamePage from './components/MainGame';
import HomePage from './components/HomePage';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='game' element={<GamePage />} />
      </Routes>
    </>
  );    
}

export default App;
