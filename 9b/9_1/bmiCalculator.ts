const bmiCalc = (weight: number, height: number) => {
    let bmi: number = weight / ((height/100)*(height/100));
    switch (true){
        case bmi < 19:
            return 'Small range';
        case 19 < bmi && bmi < 25:
            return 'Normal range'
        case bmi > 24 && bmi < 31:
            return 'Above normal range';
        case bmi > 30:
            return 'Critical range';
        default:
            return 'Invalid BMI'
    }
}

console.log(bmiCalc(78, 180))