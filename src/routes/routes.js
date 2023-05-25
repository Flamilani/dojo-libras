import { Route, Routes } from 'react-router-dom';
import Quiz from '../pages/QuizApp/Quiz';
import QuizStartApp from '../pages/QuizApp';

function RouteApp() {
    return (
        <Routes>
            <Route
                path="/"
                element={<QuizStartApp />}
            ></Route>
            <Route
                path="/quiz"
                element={<Quiz />}
            >
            </Route>
        </Routes>
    )
}

export default RouteApp; 