import diagnosisData from '../../data/diagnoses';
import {Diagnosis} from '../types'

const diagnosis: Diagnosis[] = diagnosisData;

const getEntries = (): Diagnosis[] => {
    return diagnosis;
};

const addDiagnosis = () => {
    return null;
}

export default {
    getEntries,
    addDiagnosis
};
