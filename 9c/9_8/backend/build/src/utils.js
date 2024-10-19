"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPatientEntry = void 0;
const types_1 = require("./types");
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseName = (name) => {
    if (!isString(name)) {
        throw new Error('Incorrect name');
    }
    return name;
};
const isDate = (dateOfBirth) => {
    return Boolean(Date.parse(dateOfBirth));
};
const parseDateOfBirth = (dateOfBirth) => {
    if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Incorrect date: ' + dateOfBirth);
    }
    return dateOfBirth;
};
const parseSsn = (ssn) => {
    if (!isString(ssn)) {
        throw new Error('Incorrect ssn');
    }
    return ssn;
};
const isGender = (param) => {
    return Object.values(types_1.Gender).map(v => v.toString()).includes(param);
};
const parseGender = (gender) => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect gender: ' + gender);
    }
    return gender;
};
const parseOccupation = (occupation) => {
    if (!isString(occupation)) {
        throw new Error('Incorrect occupation');
    }
    return occupation;
};
const toNewPatientEntry = (object) => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('name' in object && 'dateOfBirth' in object && 'gender' in object && 'occupation' in object && 'ssn' in object) {
        const newEntry = {
            name: parseName(object.name),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation),
            ssn: parseSsn(object.ssn)
        };
        return newEntry;
    }
    throw new Error("Incorrect data: some fields missing");
};
exports.toNewPatientEntry = toNewPatientEntry;
/*
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
*/
exports.default = exports.toNewPatientEntry;
