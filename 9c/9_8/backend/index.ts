import express from 'express';
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())
import diagnosisRouter from './src/routes/diagnosis';
import patientsRouter from './src/routes/patient';

const PORT =3000;

app.get("/api/ping", (_req, res) => {
    console.log('someone pinged here');
    res.send("pong");
});

app.use('/api/diagnosis', diagnosisRouter);

app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});