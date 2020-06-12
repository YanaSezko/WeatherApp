import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
            {this.props.city &&    
            <>
                <p>Местоположение: {this.props.city}, {this.props.country}</p>
                <p>Температура: {this.props.temp}°С</p>
                <p>Описание: {this.props.description}
                <img  src={this.props.icon}></img>
                </p>
                <p>Ветер: {this.props.wind}м/с</p>
            </>
            }      
            </div>
        );
    }
}

export default Weather;