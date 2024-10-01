import express from 'express';
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const PORT =3000;

app.get("/api/ping", (_req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    console.log('someone pinged here');
    res.send("pong");
});


app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});