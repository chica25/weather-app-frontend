import React from 'react';

function Weather() {
    return(
        <div className="container my-5">
            <div className="mx-auto rounded border text-center text-white p-4"
                style={{ backgroundColor: "#3B5FAB", width: "400px" }}>
                    <h2 className="fw-bold mb-5">Weather Forecast</h2>

                    <form className="d-flex mb-3">
                    <input className="form-control me-2" placeholder="City" aria-label="Search name="city/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>

                <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="..."/>
                <h1 className="display-4 fw-medium">20°C</h1>
                <h1 className="mb-5">New York City</h1>

                <div className="row mb-3">
                    <div className="col">
                        <i className="bi bi-water"></i> Humidity<br />
                        40%
                    </div>
                    <div className="col">
                        <i class="bi bi-wind"></i> Wind Speed<br />
                        23 km/h
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Weather;