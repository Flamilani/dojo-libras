import React from 'react';
import certo from '../../assets/gifs/resposta_certa.gif';
import errado from '../../assets/gifs/resposta_errada.gif';

import './style.css';

const Answer = (props) => {
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li
            className=
            {
                props.correctAnswer === qAnswer ?
                'correct' : 
                props.clickedAnswer === qAnswer ? 
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ));

        return (
            <>
                <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                    {answers}
                </ul>
                <div>
                    {
                        props.correctAnswer ? <div className="correctAnswer">
                            <img className='imageSize' src={certo} alt="Resposta Certa" /> 
                            <span>Parabéns, você acertou!</span>
                           
                        </div> : 
                        props.clickedAnswer ? <div className="incorrectAnswer">
                             <img className='imageSize' src={errado} alt="Resposta Errada" /> 
                            <br />
                            <span>Ops, errou!</span>                  
                        </div> : ''
                    }
                </div>
            </>
        );
}

export default Answer;