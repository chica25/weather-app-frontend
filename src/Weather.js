import React from 'react';
import { useState } from "react";

const apiKey = process.env.REACT_APP_API_KEY
function Weather() {

    const [weather, setWeather] = useState({
        icon: "https://openweathermap.org/img/wn/10d@2x.png",
        temp: "20",
        city: "New York City",
        humidity: "30",
        speed: "20"
    })

    function handleSubmit(event) {
        event.preventDefault()

        let city = event.target.city.value

        if (!city){
            alert("Please provide the city name")
            return
        }
        fetch()
    }

    return(
        <div className="container my-5">
            <div className="mx-auto rounded border text-center text-white p-4"
                style={{ backgroundColor: "#3B5FAB", width: "400px" }}>
                    <h2 className="fw-bold mb-5">Weather Forecast</h2>

                    <form className="d-flex mb-3" onSubmit={handleSubmit}>
                        <input className="form-control me-2" placeholder="City" name="city" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                     </form>

                <img src={weather.icon} alt="Weather icon"/>
                <h1 className="display-4 fw-medium">{weather.temp}°F</h1>
                <h1 className="mb-5">{weather.city}</h1>

                <div className="row mb-3">
                    <div className="col">
                        <i className="bi bi-water"></i> Humidity<br />
                        {weather.humidity}
                    </div>
                    <div className="col">
                        <i class="bi bi-wind"></i> Wind Speed<br />
                        {weather.speed}
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Weather;