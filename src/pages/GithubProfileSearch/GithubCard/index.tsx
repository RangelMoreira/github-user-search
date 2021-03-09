import React from 'react';
import InfoProfileCard from './InfoProfileCard';
import './styles.scss';

type Props ={
  public_repos?:number;
  followers?:number;
  following?:number;
  company?: String;
  blog?: String;
  location?:String;
  // created_at?: String;
  avatar_url?:string;
}

const GitgubCard = (prop: Props) =>{
  return(
    <div className="card">
      <div className="all-content">
        <img className="image" src={prop.avatar_url} alt=""/>
        {/* <div className="image">
          
        </div> */}
        <div className="content">
          <div className="aditional-info">
            <div className="aditional-info-item">Repositórios públicos: {prop.public_repos}</div>
            <div className="aditional-info-item">Seguidores: {prop.followers}</div>
            <div className="aditional-info-item">Seguindo: {prop.following}</div>
          </div>
          <div className="main-github-info">
            <h2 className="title-info">Informações</h2>
            <InfoProfileCard title={'empresa'} info={prop.company}/>
            <InfoProfileCard title={'Website/blog'} info={prop.blog}/>
            <InfoProfileCard title={'Localidade'} info={prop.location}/>
            <InfoProfileCard title={'Membro desde'} info="@ZupIT"/>
          </div>
          
        </div>
      </div>
      
      <button className="button">Ver perfil</button>

    </div>
  );
}

export default GitgubCard;