// BMI = weight / height * 2;

function calculateBMI(weight, height){
    let bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}


let bmi = calculateBMI(95, 1.8);

if(bmi <= 18.5){
    console.log("Your BMI is " + bmi + ", so you are underweight.")
}else if(bmi > 18.5 && bmi <= 24.9){
    console.log("Your BMI is " + bmi + ", so you have a normal weight.");
}else{
    console.log("Your BMI is " + bmi + ", so you are overweight.");
}