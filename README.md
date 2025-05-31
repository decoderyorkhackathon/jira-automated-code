```markdown
# Multi-City Weather Comparison Table

## Project Overview

The Multi-City Weather Comparison Table is a dynamic web application designed to allow users to compare weather metrics across three or more cities simultaneously. Leveraging data from the OpenWeatherMap API, this project aims to provide real-time weather information in a user-friendly comparison table. Key features include displaying weather data for multiple cities within 15 seconds, maintaining sort state during data refreshes, and innovative elements such as a "Delta" mode for comparing differences from the first city and mini sparkline graphs for temperature trends.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/multi-city-weather-comparison.git
```

2. **Navigate to the project directory:**

```bash
cd multi-city-weather-comparison
```

3. **Install dependencies:**

```bash
npm install
```

4. **Set up environment variables:**

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
OPENWEATHERMAP_API_KEY=your_api_key_here
```

## Usage

To run the application locally, execute:

```bash
npm start
```

This will start the application on `http://localhost:3000`. Navigate to this URL in your web browser to view the Multi-City Weather Comparison Table.

### Features

- **View Weather Data:** Enter the names of three or more cities to view their current weather metrics side by side.
- **Delta Mode:** Toggle the "Delta" mode to see how the weather metrics differ from the first city in your list.
- **Temperature Trends:** Observe mini sparkline graphs that display temperature trends for each city.

## Contributing

Contributions to the Multi-City Weather Comparison Table are welcome! If you have suggestions for improvements or bug fixes, please follow these steps to contribute:

1. **Fork the Repository:** Click the "Fork" button at the top right of this page to create your own copy of the repository.
2. **Create a Branch:** From your fork, create a branch for your feature or fix. Name it something descriptive, e.g., `feature/add-city-search`.
3. **Make Your Changes:** Implement your feature or fix, adhering to the project's coding standards and best practices.
4. **Submit a Pull Request:** Once your changes are complete, submit a pull request to the main repository for review.

Please ensure your code includes comprehensive logging, proper error handling, and validation as per the project requirements.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```
