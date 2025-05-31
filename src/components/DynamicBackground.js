import React, { useState, useEffect } from 'react';
import { ReactComponent as SunnyIcon } from './icons/sunny.svg';
import { ReactComponent as RainyIcon } from './icons/rainy.svg';
import { ReactComponent as CloudyIcon } from './icons/cloudy.svg';

const DynamicBackground = () => {
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
        return <SunnyIcon className="animate-pulse h-12 w-12" />;
      case 'rainy':
        return <RainyIcon className="animate-bounce h-12 w-12" />;
      case 'cloudy':
        return <CloudyIcon className="animate-wiggle h-12 w-12" />;
      default:
        return null;
    }
  };

  return (
    <div className={`h-screen w-screen flex items-center justify-center ${getBackgroundClass()}`}>
      {getWeatherIcon()}
    </div>
  );
};

export default DynamicBackground;
```

Please note that this code assumes that you have SVG icons named `sunny.svg`, `rainy.svg`, and `cloudy.svg` in the `icons` directory. If not, please replace these with your own SVG icons. The weather change is simulated with a random selection every 5 seconds for demonstration purposes. In a real-world application, you would likely replace this with actual weather data from an API.