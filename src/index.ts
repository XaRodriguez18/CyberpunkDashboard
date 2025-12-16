import express, { type Request, type Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Cyberpunk Dashboard");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});