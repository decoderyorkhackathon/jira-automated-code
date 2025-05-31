import React, { useState, useEffect } from 'react';
import { ReactComponent as SunnyIcon } from './icons/sunny.svg';
import { ReactComponent as RainyIcon } from './icons/rainy.svg';
import { ReactComponent as CloudyIcon } from './icons/cloudy.svg';

const WeatherApp = () => {
  // State to hold the current weather condition
  const [weatherCondition, setWeatherCondition] = useState('sunny');

  // Function to simulate changing weather conditions
  useEffect(() => {
    const timer = setInterval(() => {
      const conditions = ['sunny', 'rainy', 'cloudy'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      setWeatherCondition(randomCondition);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Function to return the appropriate icon and background based on the weather condition
  const renderWeatherCondition = () => {
    switch (weatherCondition) {
      case 'sunny':
        return (
          <div className="bg-yellow-300 h-screen flex items-center justify-center">
            <SunnyIcon className="animate-bounce h-32 w-32" />
          </div>
        );
      case 'rainy':
        return (
          <div className="bg-blue-300 h-screen flex items-center justify-center">
            <RainyIcon className="animate-pulse h-32 w-32" />
          </div>
        );
      case 'cloudy':
        return (
          <div className="bg-gray-300 h-screen flex items-center justify-center">
            <CloudyIcon className="animate-pulse h-32 w-32" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderWeatherCondition()}
    </div>
  );
};

export default WeatherApp;
```

Please note that the SVG icons are not included in this code. You need to add them in your project and import them as React components. The SVG icons should be animated SVGs to meet the requirement of animated icons. The animation classes used in this code are from Tailwind CSS.