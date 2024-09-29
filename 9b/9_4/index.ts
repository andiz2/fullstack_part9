import bmiCalc from './bmiCalculator';
import express from 'express';
const app = express();

app.get("/hello", (_req, res) =>{
    res.send("Hello Full Stack!")
});

app.get('/bmi', (req, res) => {
   if (!Number(req.query.weight) || !Number(req.query.height)){
    res.status(400).send(
        {error:'Malformed params'}
    )
   }

    res.send(
        JSON.stringify(
        {
            weight: Number(req.query.weight),
            height: Number(req.query.height),
            bmi: String(bmiCalc(
                Number(req.query.weight), 
                Number(req.query.height)
            ))
    }))
});


const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});