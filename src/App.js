import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY="94737880558d647a06e637fcc697bf33";

class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    country: undefined,
    description:undefined,
    icon:undefined,
    wind: undefined,
    error: undefined
  }
      
gettingWeather = async(e) => {
  e.preventDefault();
  let city = e.target.elements.city.value;
  try{
  const api_url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`)
  const data = await api_url.json();
  
  if(city){
    this.setState({
       city:data.name,  
       temp: data.main.temp,
       country:data.sys.country,
       description: data.weather[0].description,
       icon: data.weather[0].icon,
       wind: data.wind.speed,
       error: undefined
       });
  }else {
    this.setState({
      city:undefined,  
      temp: undefined,
      country:undefined,
      description:undefined,
      icon: undefined,
      wind: undefined,
      error: "Введите город"
      });
  }
}   
  catch(error){
this.setState({
    city: undefined,
    temp: undefined,
    country: undefined,
    description:undefined,
    icon:undefined,
    wind: undefined,
    error: "Города нет в базе данных"});
}

}

render(){
    const iconUrl = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
    return(
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className = "col-xs-6 col-sm-5 info"><Info/></div>
            <div className="col-xs-6 col-sm-7 form">
              <Form  weatherMethod={this.gettingWeather}/>
              <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              icon={iconUrl}
              wind={this.state.wind}
              error={this.state.error}
            />
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
