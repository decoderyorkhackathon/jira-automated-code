import React, { useState, useEffect } from 'react';

// Importing animated icons from react-icons
import { WiDaySunny, WiCloud, WiRain, WiSnow } from 'react-icons/wi';

const AnimatedIcons = ({ weatherCondition }) => {
  const [icon, setIcon] = useState(null);

  // Function to determine which icon to display based on weather condition
  const determineIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return <WiDaySunny className="text-6xl animate-spin" />;
      case 'Cloudy':
        return <WiCloud className="text-6xl animate-pulse" />;
      case 'Rainy':
        return <WiRain className="text-6xl animate-bounce" />;
      case 'Snowy':
        return <WiSnow className="text-6xl animate-ping" />;
      default:
        return null;
    }
  };

  // Update icon when weather condition changes
  useEffect(() => {
    setIcon(determineIcon(weatherCondition));
  }, [weatherCondition]);

  return (
    <div className={`h-screen flex justify-center items-center bg-${weatherCondition.toLowerCase()}`}>
      {icon}
    </div>
  );
};

export default AnimatedIcons;
```

Please note that this code assumes that the `weatherCondition` prop is being passed to the `AnimatedIcons` component from a parent component. The `weatherCondition` prop should be a string that represents the current weather condition (e.g., 'Sunny', 'Cloudy', 'Rainy', 'Snowy'). The background color of the component and the displayed icon will change dynamically based on the value of this prop.

Also, please make sure to add the Tailwind CSS CDN link to your index.html file as mentioned in the requirements. Here is the link for your reference: `<link href="https://cdn.tailwindcss.com/2.2.19/tailwind.min.css" rel="stylesheet">`

Lastly, please ensure that the Tailwind CSS classes used in this code are included in your Tailwind CSS configuration. If they are not, you will need to add them.