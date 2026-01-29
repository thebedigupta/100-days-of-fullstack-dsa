let checkBMI = (weight, height) => {
  let roundingWeight = Number((weight / (height * height)).toFixed(2));

  let category;

  if (roundingWeight < 18.5) {
    category = 'Under Weight';
  } else if (roundingWeight < 24.9) {
    category = 'Normal';
  } else if (roundingWeight < 29.9) {
    category = 'Over Weight';
  } else category = 'Obese';

  return { roundingWeight, category };
};

let data = checkBMI(100, 1.75);
console.log(`BMI : ${data.roundingWeight}`, `Category : ${data.category}`);
