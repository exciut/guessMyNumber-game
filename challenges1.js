// Fundamentals 1 challenge 1,2

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markWeight1 = 95;
// const markHeight1 = 1.88;
// const johnWeight1 = 85;
// const johnHeight1 = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markBMI1 = markWeight1 / markHeight1 ** 2;
// const johnBMI1 = johnWeight1 / johnHeight1 ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark has higher BMI (${markBMI}) than John (${johnBMI})`);
// } else if (markBMI < johnBMI) {
//   console.log(` John has higher BMI (${johnBMI}) than Mark (${markBMI})`);
// }

// if (markBMI1 > johnBMI1) {
//   console.log(`Mark has higher BMI (${markBMI1}) than John (${johnBMI1})`);
// } else if (markBMI1 < johnBMI1) {
//   console.log(` John has higher BMI (${johnBMI1}) than Mark (${markBMI1})`);
// }

// Fundamentals 1 challenge 3

// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// const dolphinsScore = calcAverage(97, 112, 101);
// const coalasScore = calcAverage(109, 95, 106);

// if (dolphinsScore > coalasScore && dolphinsScore >= 100) {
//   console.log(`Dolphins win with score (${dolphinsScore})`);
// } else if (dolphinsScore < coalasScore && coalasScore >= 100) {
//   console.log(`Coalas win with score (${coalasScore})`);
// } else if (dolphinsScore === coalasScore && dolphinsScore >= 100) {
//   console.log(`DRAWWWWWWW🤼‍♂️`);
// } else {
//   console.log("Nobody wins:(");
// }

// Fundamentals 2 challenge 4

// const sellings = [40, 90, 120, 450, 300, 79, 325, 550, 85];
// const tax = [];
// const total = [];

// const calcTip = function (sales) {
//   const taxes = sales > 50 && sales < 290 ? sales * 0.13 : sales * 0.18;
//   return taxes;
// };

// for (i = 0; i < sellings.length; i++) {
//   const taxes = calcTip(sellings[i]);
//   tax.push(taxes);
//   total.push(taxes + sellings[i]);
// }

// console.log(sellings, tax, total);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(total));
