import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
  type: 'number',
  name: 'num1',
  message: 'Enter your first number: '
},
{
  type: 'number',
  name: 'num2',
  message: 'Enter your second number: '
},
{
    type: 'list',
    name: 'operations',
    message: "Select the operation: ",
    choices:['+', '-', '*', '/']
}
])

let result: number;

switch(answer.operations){
    case '+':
        result = answer.num1+answer.num2;
        console.log("The sum is: " + result)
        break;
    case '-':
        result = answer.num1-answer.num2;
        console.log("The sub is: " + result)
        break;
    case '*':
        result = answer.num1*answer.num2;
        console.log("The multiplication is: " + result)
        break;
    case '/':
        result = answer.num1/answer.num2;
        console.log("The division is: " + result)   
}