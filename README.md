# Pokemon App

This is a React application that allows users to browse and search for Pokemon cards, view details of individual Pokemon, and more.

## Live Demo

You can check out the live demo of the Pokemon App [here](https://ilia-frontend.vercel.app/).

## System Design

The Pokemon app is a React-based web application that follows a modular and component-based architecture. The application is divided into several components, each responsible for a specific functionality or UI element.

### Architecture Overview

The application follows a client-server architecture, where the client-side is built using React, and the server-side is handled by the Pokemon TCG API. The client-side communicates with the API to fetch and display Pokemon card data.

### Components

The main components of the application are:

1. **PokemonCards**: This component serves as the entry point for the application. It renders the Pokemon Cards title, the search input, and the `PokemonsList` component.

2. **PokemonsList**: This component is responsible for rendering the list of Pokemon cards. It fetches the card data from the API and displays them in a grid or carousel layout based on the screen size. It also handles infinite scrolling and loading more cards as the user scrolls.

3. **PokemonCard**: This component represents an individual Pokemon card. It displays the card's image, name, ID, and types. It also provides a link to the `PokemonDetails` component for viewing more details about the card.

4. **PokemonDetails**: This component displays detailed information about a specific Pokemon card, including its image, name, ID, types, resistances, weaknesses, and attacks. It fetches the card data from the API based on the card ID provided in the URL.

5. **Accordion**: This is a reusable component that provides an accordion-like UI for displaying collapsible sections of content.

6. **SearchInput**: This component renders a search input field and handles the search functionality for filtering Pokemon cards by name.

### Data Flow

The data flow in the application follows a unidirectional flow, facilitated by React's Context API and hooks. The `PokemonCardsProvider` component manages the global state for the application, including the search term, list of cards, pagination, and loading state.

When the user interacts with the application (e.g., searching, scrolling, or clicking on a card), the relevant state is updated in the `PokemonCardsProvider`. This state update triggers re-renders in the dependent components, ensuring that the UI reflects the latest data.


### State Management

The application utilizes React's built-in state management capabilities, including the `useState` and `useContext` hooks. The `PokemonCardsProvider` component manages the global state using the `useState` hook, and the `useContext` hook is used by other components to access and consume the global state.

### Styling

The application's styling is implemented using Tailwind CSS and Styled Components.

### Performance Optimizations

To ensure optimal performance, the application employs the following techniques:

- **Code Splitting**: The application leverages React's code splitting capabilities to split the application code into smaller chunks, allowing for lazy-loading of components and reducing the initial bundle size.

- **Memoization**: The application makes use of React's `memo` higher-order component and the `useMemo` hook to memoize expensive computations and prevent unnecessary re-renders.

- **Debouncing**: The `useDebounce` custom hook is used to debounce the search input, reducing the number of API calls made during typing.

- **Infinite Scrolling**: The `InfiniteScroll` component from the `react-infinite-scroll-component` library is used to implement infinite scrolling, reducing the initial load time and improving the user experience.

### Testing

The application includes a suite of tests written using the Cypress testing framework. These tests cover various aspects of the application, including user interactions, component rendering, and API integration.

### Deployment

The application is designed to be easily deployable to various hosting platforms, such as Netlify, Vercel, or AWS S3. The production build can be generated using the `npm run build` or `yarn build` command, which creates an optimized and minified bundle in the `build` directory.

## Prerequisites

Before running the app, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mgkaefer/ilia-frontend.git
```

2. Navigate to the project directory:

```bash
cd pokemon-app
```

3. Install the dependencies:

With npm:

```bash
npm install
```

With yarn:

```bash
yarn install
```

4. Create a .env file in the root directory of the project and add the following environment variables:

```bash
REACT_APP_API_BASE_URL=https://api.pokemontcg.io/v2
```

This environment variable is required for the app to connect to the Pokemon TCG API.

## Development

To run the app in development mode, use the following command:

With npm:

```bash
npm start
```

With yarn:

```bash
yarn start
```

This will start the development server and open the app in your default browser at http://localhost:3000. The app will automatically reload if you make any changes to the source code.

## Production

To build the app for production, use the following command:

With npm:

```bash
npm run build
```

With yarn:

```bash
yarn build
```

This will create an optimized production build in the build directory. You can then deploy the contents of the build directory to a web server or hosting platform of your choice.

## Deployment

After building the app for production, you can deploy the build directory to a web server or hosting platform of your choice. Here are a few popular options:

- Netlify
- Vercel
- GitHub Pages
- AWS S3

Follow the deployment instructions provided by your chosen hosting platform.

