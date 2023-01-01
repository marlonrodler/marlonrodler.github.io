import React from 'react';

import euImg from '../../images/eu.jpg';
import './styles.css';

export default function Card() {

    return (
        <div className="card-container">
            <div className="top">
                <div className="image-container">
                    <img src={euImg} alt="" />
                </div>
            </div>

            <div className="bottom">
                <h3>Marlon Rodler</h3>
                <h4>Web/Salesforce Developer</h4>
                <p>Fique por dentro de todos os meus Projetos!</p>
                <a href="https://marlonrodler.github.io/pokedex-react/" className="btn" target="_blank" rel="noreferrer">One</a>
                <a href="https://marlonrodler.github.io/typing-speed/" className="btn" target="_blank" rel="noreferrer">Two</a>
            </div>
        </div>
    );
}