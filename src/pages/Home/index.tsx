import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';

const Home = () => (
    <div>
        <h1 className="home-title">Desafio do Capítulo 3, <br />
            Bootcamp DevSuperior</h1> <br />
        <h6 className="home-description">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /><br />
            Favor observar as instruções passadas no capítulo sobre a <br />
            elaboração deste projeto. <br /><br />
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />
            Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com" className="mail-text">antforfigma@gmail.com</a> <br />
        </h6> <br />
        <div className="div-btn">
            <Link to="/search">
                <ButtonIcon text="Começar" />
            </Link>
        </div>
    </div>
);

export default Home;