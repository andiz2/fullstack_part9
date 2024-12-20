"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const cors = require('cors');
app.use(cors());
const diagnosis_1 = __importDefault(require("./src/routes/diagnosis"));
const patient_1 = __importDefault(require("./src/routes/patient"));
const PORT = 3000;
app.get("/api/ping", (_req, res) => {
    console.log('someone pinged here');
    res.send("pong");
});
app.use('/api/diagnosis', diagnosis_1.default);
app.use('/api/patients', patient_1.default);
app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});
