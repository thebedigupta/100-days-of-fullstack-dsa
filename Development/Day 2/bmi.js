const height = 1.75; // 1.75 meters ≈ 5 feet 9 inches
const weight = 100;

const value = Number((weight / (height * height)).toFixed(2));

let category;
if (value < 18.5) {
  category = 'UnderWeight';
} else if (value >= 18.5 && value < 24.9) {
  category = 'Normal';
} else if (value >= 25 && value < 29.9) {
  category = 'OverWeight';
} else {
  category = 'Obese';
}

console.log(`BMI : ${value}`);
console.log(`Category : ${category}`);
