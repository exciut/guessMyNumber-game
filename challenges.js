// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value was ${
//     tip + bill
//   }`
// );

//Fundamentals 2 part 1 challenge

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsScore = calcAverage(44, 23, 71);
// const koalasScore = calcAverage(65, 54, 49);
// const dolphinsScore1 = calcAverage(85, 54, 41);
// const koalasScore1 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphinsScore, avgKoalasScore) {
//   if (
//     avgDolphinsScore > avgKoalasScore &&
//     avgDolphinsScore >= 2 * avgKoalasScore
//   ) {
//     console.log(`Dolphins win(${avgDolphinsScore} > ${avgKoalasScore})`);
//   } else if (
//     avgDolphinsScore < avgKoalasScore &&
//     avgKoalasScore >= 2 * avgDolphinsScore
//   ) {
//     console.log(`Koalas win(${avgKoalasScore} > ${avgDolphinsScore})`);
//   } else {
//     console.log("Nobody wins:D");
//   }
// }

// checkWinner(dolphinsScore, koalasScore);
// checkWinner(dolphinsScore1, koalasScore1);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// second challenge in part 2 fundamentals

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// const bills = [125, 555, 45];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totalPayments = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2],
// ];

// console.log(bills, tips, totalPayments);

//Challenge 3 part 2

// const mark = {
//   fullName: "Mark",
//   weight: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.total = this.weight / this.height ** 2;
//     return this.total;
//   },
// };

// const john = {
//   fullName: "John",
//   weight: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.total = this.weight / this.height ** 2;
//     return this.total;
//   },
// };

// console.log(john.calcBMI());

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.total}) is higher than ${john.fullName}'s BMI (${john.total})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.total}) is higher than ${mark.fullName}'s BMI (${mark.total})`
//   );
// }

// LAST CHALLENGE IN FUNDAMENTALS

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// for (i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
// for (i = 0; i < bills.length; i++) {
//   totals.push(tips[i] + bills[i]);
// }

// for (i = 0; i < bills.length; i++) {
//   sum.push((totals[i] + totals[i]) / bills.length);
// }

// console.log(tips);
// console.log(totals);
// console.log(sum);

// КАК РАБОТАЮТ ЕБАННЫЕ ЛУПЫ БЛЯТЬ ПИЗДЕЦ СУКА НАХУЙ

// const bills = [275, 40, 430];
// const tips = [];
// const total = [];

// const calcTip = function (bill) {
//   const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }

// console.log(bills, tips, total);

// CHALLENGE with forecast function that loops over the array and create string with temperature

const testArr = [17, 21, 23];
const testArr1 = [12, 5, -5, 0, 5];

const forecastTemp = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days...`;
  }
  console.log('...' + str);
};

console.log(forecastTemp(testArr));
console.log(forecastTemp(testArr1));
