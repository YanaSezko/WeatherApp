import React from "react";

const Weather = props => (
    <div className="infoWeath">
    {props.city &&    
    <>
     <p>Описание: {props.description}
        <img  src={props.icon}></img>
        </p>
        <p>Местоположение: {props.city}, {props.country}</p>
        <p>Температура: {props.temp}°С</p>
        <p>Ветер: {props.wind}м/с</p>
       
       </>
    }  
    <p className="error">{props.error }</p>    
    </div>
    );

export default Weather;