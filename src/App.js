import React, { useState, useEffect } from 'react';
import { ReactComponent as SunnyIcon } from './icons/sunny.svg';
import { ReactComponent as RainyIcon } from './icons/rainy.svg';
import { ReactComponent as CloudyIcon } from './icons/cloudy.svg';

const App = () => {
  const [weather, setWeather] = useState('sunny');

  // Simulate dynamic weather change
  useEffect(() => {
    const weatherTypes = ['sunny', 'rainy', 'cloudy'];
    const interval = setInterval(() => {
      setWeather(weatherTypes[Math.floor(Math.random() * weatherTypes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getBackgroundClass = () => {
    switch (weather) {
      case 'sunny':
        return 'bg-yellow-300';
      case 'rainy':
        return 'bg-blue-300';
      case 'cloudy':
        return 'bg-gray-300';
      default:
        return 'bg-white';
    }
  };

  const getWeatherIcon = () => {
    switch (weather) {
      case 'sunny':
        return <SunnyIcon className="h-16 w-16 animate-bounce" />;
      case 'rainy':
        return <RainyIcon className="h-16 w-16 animate-pulse" />;
      case 'cloudy':
        return <CloudyIcon className="h-16 w-16 animate-pulse" />;
      default:
        return null;
    }
  };

  return (
    <div className={`h-screen flex items-center justify-center ${getBackgroundClass()}`}>
      <div className="text-center">
        <div className="text-4xl mb-4">{weather.toUpperCase()}</div>
        {getWeatherIcon()}
      </div>
    </div>
  );
};

export default App;
```

Please note that this code assumes that you have SVG icons named `sunny.svg`, `rainy.svg`, and `cloudy.svg` in an `icons` directory at the same level as `App.js`. The weather state is simulated with a random selection every 5 seconds. The background color and weather icon change dynamically based on the current weather state. The Tailwind CSS classes are used for styling and animations.