import React from 'react';
import  './styles.scss';
type Props ={
  title?: string;
  info?: String;
  created?:Date;
}

const InfoProfileCard = ({title, info,created}:Props) =>(
  <div className="info-github">
    <span className="strong-text-info">{title}</span>
    <span className="no-strong-text-info">{info}{created}</span>
  </div>
)

export default InfoProfileCard;