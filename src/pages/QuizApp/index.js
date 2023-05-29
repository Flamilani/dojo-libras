/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react"
import { Link } from 'react-router-dom';
import inicial from '../../assets/gifs/inicial.gif';
import './style.css';

const QuizStartApp = () => {
    return (
        <Fragment>
                <div className="formGroup quizCard">
                <img className='imageStart' src={inicial} alt="Inicial" /> 
                    <Link className="btnPlayAgain" to="/quiz">
                        Iniciar Quiz
                    </Link> 
                </div>
        </Fragment>
    )
}

export default QuizStartApp; 