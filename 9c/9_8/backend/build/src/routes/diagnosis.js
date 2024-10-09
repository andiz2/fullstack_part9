"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnosisService_1 = __importDefault(require("../services/diagnosisService"));
const diagnosisRouter = express_1.default.Router();
diagnosisRouter.get('/', (_req, res) => {
    //res.send('Fetching all diagnosis');
    res.send(diagnosisService_1.default.getEntries());
});
diagnosisRouter.post('/', (_req, res) => {
    res.send('Saving a diagnosis!');
});
exports.default = diagnosisRouter;
