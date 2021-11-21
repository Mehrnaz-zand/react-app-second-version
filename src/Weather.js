import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"
import FormattedDate from "./FormattedDate";


export default function Weather(){
    let [weatherData, setWeatherData]= useState({ready:false})
   
    function updateWeather(response){
    console.log(response.data)
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp, 
            humidity: response.data.main.humidity,
            description:response.data.weather[0].description,
            wind:response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
        });

    }
    function search(){
    const apiKey="094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
    }
 if (weatherData.ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" 
                autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search"className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <h1>
                New York
            </h1>
            <ul>
                <li><FormattedDate date={weatherData.date} /></li>
                <li>{weatherData.description}</li>
            </ul>
             
            <div className="row mt-3">
               
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                    <img src={weatherData.icon}
                    alt={weatherData.description}
                     />
                    </div>
                    <div className="float-left">
                       <span className="temperature">{Math.round(weatherData.temperature)}</span> <span className="unit float-left">°C</span>
                       </div>
                </div>
                </div>
                 <div className="col-6">
                     <ul>
                         
                         <li>
                             Humidity: {weatherData.humidity}%
                         </li>
                         <li>
                             Wind: {weatherData.wind} km/h
                         </li>
                     </ul>
                    
                </div>
                
            </div>
        </div>
        
    )
}
else {
    search();
    return (
        <p>
            loading...
        </p>
    )

}
}
