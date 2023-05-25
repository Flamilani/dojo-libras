/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react"
import { Link } from 'react-router-dom';
import './style.css';

const QuizStartApp = () => {
    return (
        <Fragment>
                <div className="formGroup quizCard">
                    <Link className="btnPlayAgain" to="/quiz">
                        Iniciar Quiz
                    </Link> 
                </div>
        </Fragment>
    )
}

export default QuizStartApp; 