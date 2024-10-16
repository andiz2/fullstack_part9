import { NewPatientEntry } from "./types";

const toNewPatientEntry = (object: any): NewPatientEntry => {
    const newEntry : NewPatientEntry = {
        name: object.name,
        dateOfBirth: object.dateOfBirth,
        gender: object.gender,
        occupation: object.occupation,
        ssn: object.ssn
    };
    return newEntry;
};

export default toNewPatientEntry;