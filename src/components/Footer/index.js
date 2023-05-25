import React from 'react';
import { FaReact } from 'react-icons/fa';
import logo from './../../assets/imgs/linkedIn_icone.png';
import './style.css';

function Footer(props) {
    return (
        <footer className={props.styles}>
            Dojo de Libras - 2023 - Feito em ReactJS <FaReact />
             <span>Desenvolvido por Flavio Milani <a href="https://www.linkedin.com/in/flavio-milani/" target="_blank" rel="noreferrer">
                    <img className="icone" src={logo} alt="LinkedIn Flavio Milani" />
                </a>
            </span>
        </footer>
    )
}

export default Footer; 