const bmiCalc = (weight: number, height: number): string => {
    let bmi: number = weight / ((height/100)*(height/100));
    switch (true){
        case bmi < 19:
            return 'Small range';
            //break;
        case 19 < bmi && bmi < 25:
            return 'Normal range';
            //break;
        case bmi > 24 && bmi < 31:
            return 'Above normal range';
            //break;
        case bmi > 30:
            return 'Critical range';
            //break;
        default:
           return 'Invalid BMI';
            //break;
    }
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
bmiCalc(a, b)
//console.log(bmiCalc(78, 180))

export default bmiCalc;