const express = require('express');
const CharacterAI = require('node_characterai');
const dotenv = require('dotenv'); // Import the dotenv package

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;

const characterAI = new CharacterAI();
(async () => {
    await characterAI.authenticateWithToken(process.env.AUTH_TOKEN); // Use the environment variable
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//endpoint example
// http://localhost:3000/get-output?characterid=4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ&message=who%20are%20you?


