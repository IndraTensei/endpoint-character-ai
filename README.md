# Endpoint for Character-AI

This project provides an endpoint to interact with the Character-AI service using the `node_characterai` module.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

This project sets up an Express.js server that serves as an endpoint to communicate with the Character-AI service. It allows you to send a user message and receive a response from the AI character.

The [node_characterai](https://github.com/realcoloride/node_characterai) module is used to facilitate the communication with the Character-AI service.

## Getting Started

To get started with this project in GitHub Codespaces:

1. Click the "Code" button at the top of the repository and select "Open with Codespaces".

2. Install the required dependencies by running the following command in the integrated terminal:

```bash
npm install
```

3. Create a `.env` file in the project root and add your Character-AI authentication token:
```bash
AUTH_TOKEN=your_auth_token_here
```

4. Start the server:

```bash
npm start
```

## Usage

To interact with the **Character-AI** endpoint, make a GET request to the following URL, providing the `characterid` and `message` parameters:

```http
GET http://localhost:3000/get-output?characterid=YOUR_CHARACTER_ID&message=YOUR_MESSAGE
```

- `characterid`: The ID of the AI character you want to interact with.
- `message`: The user message you want to send to the AI character.

## Dependencies

This project uses the following dependencies:

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [node_characterai](https://github.com/realcoloride/node_characterai): Module for interacting with the Character-AI service.
- [dotenv](https://www.npmjs.com/package/dotenv): Zero-dependency module that loads environment variables from a `.env` file.

## Contributing

Contributions are welcome! If you find any issues or want to enhance this project, feel free to submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).





