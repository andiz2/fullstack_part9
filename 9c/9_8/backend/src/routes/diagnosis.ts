import express from 'express';
import diagnosisService from '../services/diagnosisService';

const diagnosisRouter = express.Router();

diagnosisRouter.get('/', (_req, res) => {
    //res.send('Fetching all diagnosis');
    res.send(diagnosisService.getEntries());
});

diagnosisRouter.post('/', (_req, res) => {
    res.send('Saving a diagnosis!');
});

export default diagnosisRouter;