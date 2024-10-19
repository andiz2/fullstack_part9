"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPatientEntry = void 0;
const types_1 = require("./types");
const zod_1 = require("zod");
/*
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
    if (!isString(name)) {
        throw new Error('Incorrect name');
    }
    return name;
};

const isDate = (dateOfBirth: string): boolean => {
    return Boolean(Date.parse(dateOfBirth));
}

const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Incorrect date: ' + dateOfBirth);
    }
    return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
    if (!isString(ssn)) {
        throw new Error('Incorrect ssn');
    }
    return ssn;
}

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
}

const parseGender = (gender: unknown): Gender => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect gender: ' + gender);
    }
    return gender;
}

const parseOccupation = (occupation: unknown): string => {
    if (!isString(occupation)){
        throw new Error('Incorrect occupation');
    }
    return occupation;
}
    */
const toNewPatientEntry = (object) => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('name' in object && 'dateOfBirth' in object && 'gender' in object && 'occupation' in object && 'ssn' in object) {
        const newEntry = {
            name: zod_1.z.string().parse(object.name),
            dateOfBirth: zod_1.z.string().date().parse(object.dateOfBirth),
            gender: zod_1.z.nativeEnum(types_1.Gender).parse(object.gender), //parseGender(object.gender),
            occupation: zod_1.z.string().parse(object.occupation), //parseOccupation(object.occupation),
            ssn: zod_1.z.string().parse(object.ssn) //parseSsn(object.ssn)
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
