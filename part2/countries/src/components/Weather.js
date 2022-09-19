import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState();
  const { icon, description } = weather?.weather[0] || {};

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [capital]);
  return (
    <>
      <h3>Weather in {capital}</h3>
      <p>temperature {weather?.main?.temp} Celcius</p>

      {icon && (
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description || ''}
        />
      )}
      <p>wind {weather?.wind?.speed} m/s</p>
    </>
  );
};

export default Weather;
