# Ilia Frontend Challenge: Pokemon App

This is a React application that allows users to browse and search for Pokemon cards, view details of individual Pokemon, and more.

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

## Live Demo

https://ilia-frontend.vercel.app/
