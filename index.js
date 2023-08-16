const express = require('express');
const CharacterAI = require('node_characterai');
const dotenv = require('dotenv'); // Import the dotenv package

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;

const characterAI = new CharacterAI({
    puppeteerExecutablePath: process.env.PUPPETEER_EXECUTABLE_PATH
});

(async () => {
    await characterAI.authenticateWithToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjRjZjZmMTQ4MGQ1ZDg3ZmU0NmRkZjRmIiwiYXVkIjpbImh0dHBzOi8vYXV0aDAuY2hhcmFjdGVyLmFpLyIsImh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2OTEzMTYwMDYsImV4cCI6MTY5MzkwODAwNiwiYXpwIjoiZHlEM2dFMjgxTXFnSVNHN0Z1SVhZaEwyV0VrbnFaenYiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.LxDVZMR7y5YiYp9O7ZAD1G1g4cz2drogw5289Y_7W9hFvJiWlwYFBFnFO5E1L9t8Fo1EertpEMFCuK2lb8EBoPDUqK70idIzRJcP2aL_SSIQtZ7WSmnAhCKy4IQaaHFxdh5mFBu5Ksji0LARQbuboU6sJKfzK-lTd8UpMGoA36TAAzHYZ9H58ESEkk8dYAKWoulEoCDJRHXutXp13SoeNOx5uSdp6s7G6Sq8w8DVnu_tZaQa925stYgGgeSHmzrwayWJoAj0Ii_JfYfkHiXgLfK9BLfwhD0DqXPDS2UI1ZdBvsCS1_3RYST1EI3J0OAj7hD6J4kCFHLFwUI4yt193w'); // Use the environment variable
})();

app.use(express.json());

app.get('/get-output', async (req, res) => {
    const characterId = req.query.characterid || 'Uskj6m3pjr0Q-91CQvSzXGJPIfaWvtMwQigp54VnQZw';
    const userMessage = req.query.message || '';

    try {
        const chat = await characterAI.createOrContinueChat(characterId);
        const response = await chat.sendAndAwaitResponse(userMessage, true);
        res.json({ response: response.text });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get a response from the chatbot.' });
    }
});

app.listen(8080, () => {
    console.log(`Server is running on port ${port}`);
});

//endpoint example
// http://localhost:3000/get-output?characterid=4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ&message=who%20are%20you?


