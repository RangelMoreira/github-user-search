import dayjs from 'dayjs';
import React from 'react';
import  './styles.scss';
type Props ={
  title?: string;
  info?: String;
  created?:Date;
  isDate?:boolean;
}

const InfoProfileCard = ({title, info,created,isDate}:Props) =>(
  <div className="info-github">
    <span className="strong-text-info">
      {title}
    </span>
    <span className="no-strong-text-info">
      {isDate ? dayjs(created).format('DD/MM/YYYY'):info}
    </span>
  </div>
)

export default InfoProfileCard;