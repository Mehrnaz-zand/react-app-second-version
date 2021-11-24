import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function showDay(){
        let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
} 
function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
}
function minTemperature(){ 
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
}
    return(
        <div className = "WeatherForecastDay">
            <div className="WeatherForecast-day">
                        {showDay()}
                    </div>
                    <WeatherIcon icon={props.data.weather[0].icon} size={30}/>
                    <div className="WeatherForecast-temperatures">
                    
                    <span className="WeatherForecaset-maxTemp">
                        {maxTemperature()}
                    </span>
                    <span className="WeatherForecast-minTemp">
                        {minTemperature()}
                    </span>
                    </div>
        </div>

    )


}