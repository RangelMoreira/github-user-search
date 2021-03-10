import React from 'react';
import InfoProfileCard from './InfoProfileCard';
import './styles.scss';

type Props ={
  userName?: String;
  public_repos?:number;
  followers?:number;
  following?:number;
  company?: String;
  blog?: String;
  location?:String;
  created_at?: Date;
  avatar_url?:string;
}

const GitgubCard = (prop: Props) =>{
  return(
    <div className="card">
      <div className="all-content">
        <img className="image" src={prop.avatar_url} alt=""/>
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
            <InfoProfileCard title={'Membro desde'} created={prop.created_at}/>
          </div>
          
        </div>
      </div>
      
      <a 
        href={`https://github.com/${prop.userName}`} 
        target="_blank" 
        rel="noreferrer" className="button-start"
      >
        Ver perfil
      </a>

    </div>
  );
}

export default GitgubCard;