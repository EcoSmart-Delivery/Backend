import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Backent is up!');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});