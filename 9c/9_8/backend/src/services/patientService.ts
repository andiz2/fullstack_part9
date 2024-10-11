import patients from '../../data/patients';
import { NonSensitivePatientsEntry, Patient} from '../types';
import {v1 as uuid} from 'uuid';

const getEntries = () : Patient[] =>{
    return patients;
};



const getNonSensitiveEntries = () : NonSensitivePatientsEntry[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) =>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const addPatient = (
     name: string, dateOfBirth: string, gender: string, ssn: string, occupation: string
): Patient => {
    const id = uuid()
    const newPatientEntry = {
        id: id,
        name,
        dateOfBirth,
        gender,
        ssn,
        occupation,
    };
    patients.push(newPatientEntry);
    return newPatientEntry;
};


export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient
};