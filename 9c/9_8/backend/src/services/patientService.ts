import patients from '../../data/patients';
import {NewPatientEntry, NonSensitivePatientsEntry, Patient} from '../types';
import {v1 as uuid} from 'uuid';

const getEntries = (): Patient[] =>{
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

const findById = (id: string): Patient | undefined => {
    const entry = patients.find(p => p.id === id);
    return entry;
}

const addPatient = (
     entry: NewPatientEntry
): Patient => {
    const id = uuid()
    const newPatientEntry = {
        id: id,
       ...entry
    };
    patients.push(newPatientEntry);
    return newPatientEntry;
};


export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient,
    findById
};