import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (req, res) => {
    const { name, dateOfBirth, gender, occupation, ssn} = req.body;
    const addEntry = patientService.addPatient(
        name,
        dateOfBirth,
        gender,
        occupation,
        ssn
    );
    res.json(addEntry);
});

export default router;
