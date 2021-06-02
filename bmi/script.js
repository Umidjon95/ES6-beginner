function calculateBmi() {
    const name = document.getElementById('name');
    const weightVal = document.getElementById('weight');
    const heightVal = document.getElementById('height');
    const result = document.getElementById('result');
    
    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);
    
    let bmi = (weight/(height*height)).toFixed(2);

    let status;
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi > 18.5 && bmi < 24.9) { status = 'normal weight';}
    else if (bmi > 24.9 && bmi < 29.9) {status = 'overweight'}
    else {status = 'obesity';};

    if (name && height && weight) {
        result.textContent = `${name.value}'s BMI is ${bmi}. You are ${status}!`;
        console.log(`${name.value} 's BMI is ${bmi}. You are ${status}!`);
    }
    
}

calculateBmi();