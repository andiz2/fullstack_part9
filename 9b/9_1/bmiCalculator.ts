const bmiCalc = (weight: number, height: number) => {
    let bmi: number = weight / ((height/100)*(height/100));
    switch (true){
        case bmi < 19:
            console.log('Small range');
            break;
        case 19 < bmi && bmi < 25:
            console.log('Normal range');
            break;
        case bmi > 24 && bmi < 31:
            console.log('Above normal range');
            break;
        case bmi > 30:
            console.log('Critical range');
            break;
        default:
            console.log('Invalid BMI');
            break;
    }
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
bmiCalc(a, b)
//console.log(bmiCalc(78, 180))