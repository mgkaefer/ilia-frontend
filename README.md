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

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request against the main repository.

## License

This project is licensed under the MIT License.

This README.md file covers the following:

- Prerequisites for running the app (Node.js, npm/yarn)
- Installation instructions (cloning the repository, installing dependencies, creating the `.env` file with the required environment variable)
- Development instructions (running the app in development mode with npm or yarn)
- Production instructions (building the app for production with npm or yarn)
- Deployment information (suggestions for hosting platforms and deploying the production build)
- Contributing guidelines
- License information

Make sure to replace `your-username` with your actual GitHub username in the repository URL. Also, update the `LICENSE` file with the appropriate license for your project.
```