import bmiCalc from './bmiCalculator';
import express from 'express';
const app = express();

app.get("/hello", (_req, res) =>{
    res.send("Hello Full Stack!")
});

app.get('/bmi', (req, res) => {
    const {weight, height} = req.query;
    if (!Number(weight) || !Number(height)){
        res.status(400).send(
            {error:'Malformed params'}
        )
    }

        res.send(
            JSON.stringify(
            {
                weight: Number(weight),
                height: Number(height),
                bmi: String(bmiCalc(
                    Number(weight), 
                    Number(height)
                ))
        }))
});


const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});