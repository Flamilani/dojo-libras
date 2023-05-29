import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import Answer from './Answer';
import { Breadcrumb } from '../../components/Breadcrumb';
import { StateQuestions } from '../../shared/constants/state-questions.constant';
import aprovado from '../../assets/gifs/aprovado.gif';
import baixo_resultado from '../../assets/gifs/baixo_resultado.gif';

import './style.css';

export default class Quiz extends Component {

    // initiating the local state
    state = StateQuestions;

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render() {
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;

        let scoreResult;
        if (((score / Object.keys(questions).length) * 100) === 100) {
            scoreResult = <div><img className='imageStart' src={aprovado} alt="Aprovado" /><p>Parabéns, acertou tudo!</p></div>;          
        } else {
            scoreResult = <div><img className='imageStart' src={baixo_resultado} alt="Baixo Resultado" /><p>Não se anima, tenta praticar mais na próxima vez.</p></div>;       
        } 
        return (
            <aside className="quiz">
                <Breadcrumb title="Quiz" styles="sectionTop" link="/"></Breadcrumb>
                <div className="Content">
                    {step <= Object.keys(questions).length ?
                        (<>
                            <div className="stepsTop">{step} / {Object.keys(questions).length}</div>
                            <Question
                                question={questions[step]}
                            />
                            <Answer
                                answer={answers[step]}
                                step={step}
                                checkAnswer={this.checkAnswer}
                                correctAnswer={correctAnswer}
                                clickedAnswer={clickedAnswer}
                            />
                            <button
                                className="NextStep"
                                disabled={
                                    clickedAnswer && Object.keys(questions).length >= step
                                        ? false : true
                                }
                                onClick={() => this.nextStep(step)}>Próximo</button>
                        </>) : (
                            <div className="finalPage">
                                <h1 className="titleFinal">{scoreResult}</h1>
                                <p className="scoreFinal">Sua pontuação: {parseFloat((score / Object.keys(questions).length) * 100).toFixed(0)}</p>
                                <br />
                                <Link className="btnPlayAgain" to="/">
                                    Jogar novamente
                                </Link>
                            </div>
                        )
                    }
                </div>
            </aside>
        );
    }
}