# js-express-server

This project is a simple Express server scaffolded to run on port 8001. It uses Nodemon for automatic code reloading during development.

## Project Structure

```
js-express-server
├── src
│   └── index.js         # Entry point of the application
├── package.json          # Project configuration and dependencies
├── yarn.lock             # Dependency version lock file
├── nodemon.json          # Nodemon configuration for automatic reloading
├── Dockerfile            # Dockerfile to build the application image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will listen on `http://localhost:8001`.

### Building the Docker Image

To build the Docker image for the application, run:

```
docker build -t js-express-server .
```

### Running the Docker Container

To run the Docker container, use:

```
docker run -p 8001:8001 js-express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.