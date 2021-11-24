import React, {useState, useEffect} from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [forecast, setForecast] = useState(null )
    let [loaded, setLoaded] = useState(false)
    function showForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
useEffect(()=>{
    setLoaded(false);
}, [props.coordinates]);

    function search(){
    const apiKey="19351561bdce0a99202ae9e49984792f";
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showForecast);
    }
    if (loaded){
    return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 6){
                        return (
                        <div className = "col" key={index}>
                        <WeatherForecastDay data= {dailyForecast} />
                        </div>
                        );
                    }
                    else{
                        return null
                    }

                })}
                
            </div>
        </div>
            )
        }
        else{
            search()
            return (
                "loading..."
            )
        }
}