import bmiCalc from './bmiCalculator';
import calculateExercises from './exerciseCalculator';
import express from 'express';
const app = express();

app.use(express.json());


app.get("/hello", (_req, res) =>{
    res.send("Hello Full Stack!");
});

app.get('/bmi', (req, res) => {
    const {weight, height} = req.query;
    if (!Number(weight) || !Number(height)){
        res.status(400).send(
            {error:'Malformed params'}
        );
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
        }));
});

app.post('/exercises', (req, res) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
        const { daily_exercises, target } = req.body;

        if (!daily_exercises || !target) {
            throw new Error('Params missing');
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, , @typescript-eslint/no-unsafe-assignment
        daily_exercises.forEach((exercise: any) => {
            if (exercise === null || exercise === undefined || isNaN(Number(exercise))) {
                throw new Error('Malformed params');
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
        const result = calculateExercises(daily_exercises, target);

        res.json({result});

    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});


const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});