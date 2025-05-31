```markdown
# 5-Day Weather Forecast Component

## Project Overview

This project aims to implement a 5-day weather forecast component leveraging the OpenWeatherMap's forecast API. It displays accurate weather forecasts, including daily minimum and maximum temperatures calculated from 3-hourly data, and offers a unit toggle feature for temperature display in Celsius (°C) or Fahrenheit (°F). The component is designed with a clear visual hierarchy to distinguish between the current day and future days, and includes a loading state to enhance user experience during data fetching. Additionally, it innovates by visualizing precipitation probability and comparing "feels like" temperatures for each day.

### Features

- **Core Functionality:** Accurate 5-day weather forecasts with daily min/max temperatures and unit toggle (°C/°F).
- **UX/UI:** Enhanced user experience with clear visual hierarchy and loading states.
- **Innovation:** Precipitation probability visualization and "feels like" temperature comparison.

## Installation

To install this component in your project, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/5-day-weather-forecast.git
   ```
3. Navigate to the project directory:
   ```bash
   cd 5-day-weather-forecast
   ```
4. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

To use the 5-day weather forecast component in your project, follow these steps:

1. Import the component:
   ```typescript
   import WeatherForecast from './path/to/WeatherForecast';
   ```
2. Use the component in your application:
   ```typescript
   <WeatherForecast apiKey="YOUR_OPENWEATHERMAP_API_KEY" />
   ```
   
Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual OpenWeatherMap API key.

### Configuration

You can configure the component with the following props:

- `apiKey`: Your OpenWeatherMap API key (required).
- `units`: The temperature units (`metric` for °C, `imperial` for °F). Default is `metric`.

## Contributing

Contributions to the 5-day weather forecast component are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and best practices.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

This README.md template provides a comprehensive guide for users and contributors, including project overview, installation instructions, usage examples, contributing guidelines, and license information, tailored for a TypeScript project focused on implementing a 5-day weather forecast component.