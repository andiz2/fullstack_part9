interface ExerciseResp {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (args: number[], target: number): ExerciseResp => {
    let periodLength = Number(args.length);
    let trainNr = 0;
    let dailyMedTime = 0;
    let sum = 0;
    let rating = 1;
    let description = "dissapointing";
    let success = false;
    args.forEach(day => {
        if (day > 0) trainNr++; 
        sum += day;
    });
    dailyMedTime = Number(((sum/periodLength) * 100 / 100).toFixed(16));
    
    if (target - dailyMedTime < 0){
        rating = 3;
        description = "love it";
        
    } else if (target - dailyMedTime < 0.5) {
        rating = 2;
        description = "not too bad but could be better";
    }
    if (dailyMedTime > target) success = true;
    return {
        periodLength: periodLength,
        trainingDays: trainNr,
        success: success,
        rating: rating,
        ratingDescription: description,
        target: target,
        average: dailyMedTime   
    };
}

// (Math.round(num * 100) / 100).toFixed(2);

console.log(process.argv)
console.log('length ', process.argv.length)
let arr: number[] = [];
for (let i = 3; i < process.argv.length; i++) {
    arr.push(Number(process.argv[i]))  
}

let target = Number(process.argv[2])

calculateExercises(arr, target);

export default calculateExercises;
