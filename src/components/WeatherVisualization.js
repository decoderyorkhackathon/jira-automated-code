import React, { useState, useEffect } from 'react';
import { ReactComponent as SunnyIcon } from './icons/sunny.svg';
import { ReactComponent as RainyIcon } from './icons/rainy.svg';
import { ReactComponent as CloudyIcon } from './icons/cloudy.svg';
import { ReactComponent as SnowyIcon } from './icons/snowy.svg';

const WeatherVisualization = () => {
  const [weather, setWeather] = useState('sunny');

  // Simulate dynamic weather change
  useEffect(() => {
    const weatherTypes = ['sunny', 'rainy', 'cloudy', 'snowy'];
    const interval = setInterval(() => {
      const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
      setWeather(randomWeather);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = () => {
    switch (weather) {
      case 'rainy':
        return <RainyIcon className="animate-bounce h-12 w-12 text-blue-500" />;
      case 'cloudy':
        return <CloudyIcon className="animate-pulse h-12 w-12 text-gray-500" />;
      case 'snowy':
        return <SnowyIcon className="animate-shake h-12 w-12 text-white" />;
      default:
        return <SunnyIcon className="animate-spin h-12 w-12 text-yellow-500" />;
    }
  };

  const getBackgroundClass = () => {
    switch (weather) {
      case 'rainy':
        return 'bg-blue-500';
      case 'cloudy':
        return 'bg-gray-500';
      case 'snowy':
        return 'bg-white';
      default:
        return 'bg-yellow-500';
    }
  };

  return (
    <div className={`h-screen flex items-center justify-center ${getBackgroundClass()}`}>
      <div className="text-center">
        <div className="mb-4">{getWeatherIcon()}</div>
        <h1 className="text-4xl text-white">It's {weather} today!</h1>
      </div>
    </div>
  );
};

export default WeatherVisualization;
```

Please note that you need to have the SVG icons (sunny.svg, rainy.svg, cloudy.svg, snowy.svg) in the same directory as this file. The SVG icons should be animated SVGs to meet the requirement of animated icons.