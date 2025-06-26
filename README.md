# Othello App

This is a simple Othello (Reversi) game built with Vue.js. The application allows users to play the classic board game against each other.

## Project Structure

The project consists of the following files:

- `src/components/Board.vue`: A Vue component that renders the Othello board, manages the game state, and handles user input.
- `src/App.vue`: The root component of the application that includes the `Board` component and defines the overall layout and styles.
- `src/main.js`: The entry point of the application where the Vue instance is created and the `App` component is mounted.
- `public/index.html`: The HTML template for the application, containing the `<div id="app"></div>` where the Vue application will be mounted.
- `package.json`: The npm configuration file that lists the project's dependencies and scripts.
- `vue.config.js`: The Vue CLI configuration file for build and development server settings.

## Setup Instructions

To set up the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd othello-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run serve
   ```

4. **Open your browser**:
   Navigate to `http://localhost:8080` to see the application in action.

## Features

- Play Othello against another player.
- Interactive board with real-time updates.
- Simple and intuitive user interface.

## License

This project is licensed under the MIT License.