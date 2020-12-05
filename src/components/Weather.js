import React from 'react';
import VerticalLine from './VericalLine';
import Loading from './isLoading';



function WeatherElement({ icon, desc, data }) {
  return (
    <div className="WeatherElement">
      <div className='desc-container'>
          <span className='desc-icon'>{icon}</span>
          <span className='desc-name'>{desc}</span>
      </div>
      <h5 className='element-data'>{data}</h5>
    </div>
  );
}

const Weather = ( { weather, isLoading, errMsg } ) => {
  let monthArr = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date()
  let month = date.getMonth();
  let day = date.getDay();
  let dateNum = date.getDate();
  let feelLike = Math.round(weather && weather.main && weather.main.feels_like);
  let temp = Math.round(weather && weather.main && weather.main.temp);
  let pressure = Math.round(weather && weather.main && weather.main.pressure);
  let humidity = Math.round(weather && weather.main && weather.main.humidity);
  let windSpeed = Math.round(weather && weather.wind && weather.wind.speed);
  let desc = weather && weather.weather && weather.weather[0].description.toUpperCase();


  if(isLoading) {
    return (
      <Loading />
    )
  } else if(errMsg) {
    return (
      <h3>{errMsg}</h3>
    )
  } else {
      return (
        <div className="Weather">
          <div className='date margin'>
            <p>{`${dayArr[day]}, ${dateNum} ${monthArr[month]}`}</p>
          </div>
          <div className='location margin'>
            <p>{weather.name}</p>
          </div>
          <div className='weather-desc margin'>
            <p>{desc}</p>
          </div>
          <div className='weather-data'>
            <div className='temp-container'>
              <h3 className='temp'>{temp}&deg;C</h3>
              <span className='temp-desc'>FEELS LIKE {feelLike}&deg;C</span>
            </div>
            <WeatherElement icon='a' desc='PRESSURE' data={`${pressure}mmHg`}/>
            <VerticalLine />
            <WeatherElement icon='b' desc='WIND' data={`${windSpeed}km/hr`}/>
            <VerticalLine />
            <WeatherElement icon='c' desc='HUMIDITY' data={`${humidity}%`}/>
          </div>
        </div>
      );
  }

  
}

export default Weather;