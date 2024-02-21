import './current-weather.css'
import { GetCurrentTimeStamp, RoundNearestWholeNum } from '../helpers'

const CurrentWeather = ({ data }) => {
    return (
            <div className='weather-today'>
                <div className='wt-top'>
                    <div className='temp-box'>
                        <header>Today's Weather</header>
                        <p className='temp-current'>{RoundNearestWholeNum(data.main.temp)}&deg;</p>
                        <div className='temp-high-low'>
                            <p>H: {RoundNearestWholeNum(data.main.temp_max)}&deg;</p>
                            <p>L: {RoundNearestWholeNum(data.main.temp_min)}&deg;</p>
                        </div>
                    </div>
                    <div className='weather-icon-box'>
                        <img alt='weather' className='weather-icon' src='images/sun.png' />
                    </div>
                </div>
                <div className='wt-bottom'>
                    <p className='city'>{data.name}, {data.sys.country}</p>
                    <p>{GetCurrentTimeStamp()}</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p>{data.weather[0].main}</p>
                </div>
            </div>
    )
}

export default CurrentWeather