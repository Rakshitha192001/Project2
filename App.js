
import './App.css';
import { Route,Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import QuestionPage from './Components/QuestionPage';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route path="/QuestionPage" element={<QuestionPage />} />
    </Routes>
  );
}

export default App;
