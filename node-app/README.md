# JavaScript Express Server

This project is a simple Express server application that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
js-express-server
├── src
│   ├── app.js          # Sets up the Express application
│   └── index.js        # Entry point for the application
├── .dockerignore       # Files to ignore when building the Docker image
├── .gitignore          # Files to ignore in Git
├── Dockerfile          # Instructions to build the Docker image
├── nodemon.json        # Configuration for nodemon
├── package.json        # Project dependencies and scripts
├── yarn.lock           # Dependency version lock file
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- Yarn

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

The server will be running on [http://localhost:8001](http://localhost:8001).

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t js-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 js-express-server
   ```

### License

This project is licensed under the MIT License.