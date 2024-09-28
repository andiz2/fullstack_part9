const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
};

// This will give an error because you're passing a string instead of a number.
multiplicator('how about a string?' as any, 4, 'Multiplied a string and 4, the result is:');
