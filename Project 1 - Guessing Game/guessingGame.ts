import inquirer from "inquirer";
import chalk from "chalk";

type answer_type= {guess:number};

const random_number: number = Math.floor(Math.random() * 10);

const answers = await inquirer.prompt([
    {
        type: 'number',
        name: 'guess',
        message: "What do you guess? "
    }
])
const {guess} = answers;

if(guess === random_number){
    console.log("We guessed: ", random_number);
    console.log("You guess matches with mine. And you won!");
}
else if(guess > random_number){
    console.log("We guessed: ", random_number);
    console.log("Your guessed number", guess, "is greater than our number. Better luck next time.");
}
else if(guess < random_number){
    console.log("We guessed: ", random_number);
    console.log("Your guessed number", guess, "is less than our number. Better luck next time.");
}