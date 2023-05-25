import React from 'react';
// import { FaSignLanguage } from 'react-icons/fa';
/* import ReactTooltip from 'react-tooltip'; */

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
                        props.correctAnswer ? <div className="correctAnswer">Resposta correta 
                      {/*   <ReactTooltip html={true} id="dia" place="right" effect="solid" /> */}
{/*                         <FaSignLanguage data-tip="<img className='imageSize' src='https://umuarama.ifpr.edu.br/wp-content/uploads/2021/03/ellen-mascote.gif' />" data-for="dia" /> */}
                        </div> : 
                        props.clickedAnswer ? <div className="incorrectAnswer">Resposta incorreta {/* <FaSignLanguage /> */}</div> : ''
                    }
                </div>
            </>
        );
}

export default Answer;