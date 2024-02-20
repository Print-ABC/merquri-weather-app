import './current-weather.css'

const CurrentWeather = () => {
    return (
        <div className='weather-app-wrapper'>
            <div className='weather-today'>
                <div className='wt-top'>
                    <div className='temp-box'>
                        <header>Today's Weather</header>
                        <p className='temp-current'>26&deg;</p>
                        <div className='temp-high-low'>
                            <p>H: 29&deg;</p>
                            <p>L: 26&deg;</p>
                        </div>
                    </div>
                    <div className='weather-icon-box'>
                        <img alt='weather' className='weather-icon' src='images/sun.png' />
                    </div>
                </div>
                <div className='wt-bottom'>
                    <p className='city'>Johor, MY</p>
                    <p>01-09-2022 09:41am</p>
                    <p>Humidity: 58%</p>
                    <p>Clouds</p>
                </div>
            </div>
            <div className='search-history'></div>
        </div>
    )
}

export default CurrentWeather