import React from 'react';
import  './styles.scss';
type Props ={
  title?: string;
  info?: String;
}

const InfoProfileCard = ({title, info}:Props) =>(
  <div className="info-github">
    <span className="strong-text-info">{title}</span>
    <span className="no-strong-text-info">{info}</span>
  </div>
)

export default InfoProfileCard;