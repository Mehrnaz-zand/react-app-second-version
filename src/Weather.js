import React from "react";
import "./Weather.css"

export default function Weather(){
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
                <li>Wednesday 7:00</li>
                <li>Mostly cloudy</li>
            </ul>
             
            <div className="row mt-3">
               
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" 
                    alt="Mostly cloudy"
                     />
                    </div>
                    <div className="float-left">
                       <span className="temperature">9</span> <span className="unit float-left">°C</span>
                       </div>
                </div>
                </div>
                 <div className="col-6">
                     <ul>
                         
                         <li>
                             Humidity: 20%
                         </li>
                         <li>
                             Wind: 10 km/h
                         </li>
                     </ul>
                    
                </div>
                
            </div>
        </div>
        
    )
}
