import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () =>(
  <div className="main-div">
    <div>

      <h1 className="main-title">
        Desafio do capítulo 3, Bootcamp DevSuperior
      </h1>
      
      <div className="content">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/><br/>        
        Favor observar as instruções passadas no capítulo sobre a elaboração 
        deste projeto. <br/><br/>
        Este design foi adaptado a partir de Ant Design System for Figma, de 
        Mateusz Wierzbicki: <a className="link" href="antforfigma@gmail.com">antforfigma@gmail.com</a> <br/><br/>
      </div>

      <Link className="button-start" to="/profile-search">Começar</Link>

    </div>
  </div>
);

export default Home;