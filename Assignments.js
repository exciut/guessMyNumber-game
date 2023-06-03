const country = 'Russia';
const continent = 'Eurasia';
let population = 250;
const isIsland = false;
const language = 'Russian';

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

population > 33
  ? console.log(
      `Wow, ${country} has ${population - 33} million people more than average`
    )
  : console.log(`${country} population is ${33 - population} below average`);

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders!");
// }

// if (language === "english" && population >= 50 && isIsland === false) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country} does not meet your creteria`);
// }

switch (language) {
  case 'Chinese':
    console.log('MOST spoken language in the world');
    break;
  case 'Spanish':
    console.log('2nd spoken language in the world');
    break;
  case 'English':
    console.log('3rd spoken language in the world');
    break;
  case 'Hindi':
    console.log('4th spoken language in the world');
    break;
  case 'Arabic':
    console.log('5th spoken language in the world');
    break;
  default:
    console.log('GOOD Language too :D');
}

/*      // When number is higher than hidden one
      //   }} else if (guess > secretNumber) {
      //     if (scoreNumber > 1) {
      //       document.querySelector('.message').textContent = '🚁 Too high';
      //       scoreNumber--;
      //       document.querySelector('.score').textContent = scoreNumber;

      //       //When user lost the game
      //     } else {
      //       document.querySelector('.message').textContent = 'You lost the game';
      //       document.querySelector('.score').textContent = 0;

      //       //Again when user lost the game
      //     }
      //   } else if (guess < secretNumber) {
      //     if (scoreNumber > 1) {
      //       document.querySelector('.message').textContent = '🛥️ Too less';
      //       scoreNumber--;
      //       document.querySelector('.score').textContent = scoreNumber;
      //     } else {
      //       document.querySelector('.message').textContent = 'You lost the game';
      //       document.querySelector('.score').textContent = 0;
      //     }
      //   }
      useless trash
      */
