import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) =>
    res.json({ message: 'Hello there! This is a NodeJS Boilerplate!' })
);

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));