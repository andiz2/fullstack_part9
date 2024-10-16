/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
    const patient = patientService.findById(req.params.id);
    
    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
})

router.post('/', (req, res) => {
    try{
        const newPatientEntry = toNewPatientEntry(req.body);

        const addEntry = patientService.addPatient(newPatientEntry);
        res.json(addEntry);
    } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error){
        errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
}
})
/* 
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
*/
export default router;
