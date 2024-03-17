/* Task No.1: Install Node.js, TypeScript, and VS Code on my Computer.

Done, Installed! */

// Task No.2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let myName: string = "Aliyan";
console.log("Hello " + myName + "! Would you like to learn some Python today?");

// Task No.3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let friendName: string = "Rahim";
console.log("Lowercase: " + friendName.toLowerCase());
console.log("Uppercase: " + friendName.toUpperCase());
console.log("Titlecase: " + friendName.charAt(0).toUpperCase() + friendName.slice(1).toLowerCase());

// Task No.4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.

console.log("Adele Adkins quotes, " + '"' + "I don’t care if you’re black, white, short, tall, skinny, rich or poor. If you respect me I’ll respect you." + '"');

// Task No.5 : Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Adele Adkins";
let message: string = '"' + "I don’t care if you’re black, white, short, tall, skinny, rich or poor. If you respect me I’ll respect you." + '"';
console.log(famous_person + " quotes, " + message);

// Task No.6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let myName: string = "\t   Aliyan  \n";
console.log(myName);
console.log(myName.trim());

// Task No.7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log("Addition:", 5 + 3);
console.log("Subtraction:", 12 - 4);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 32 / 4);

/* Task No.8: You should create four lines that look like this:
 console.log(5 + 3) */

console.log("Addition:", 5 + 3);
console.log("Subtraction:", 12 - 4);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 32 / 4);

// Task No.9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let myFavoriteNumber: number = 22;
let message: string = "My favorite number is " + myFavoriteNumber;
console.log(message);

// Task No.10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//First Program having Comments

let friendName: string = "Rahim"     //Rahim is my BFF.

console.log("Lowercase: " + friendName.toLowerCase());
console.log("Uppercase: " + friendName.toUpperCase());
console.log("Titlecase: " + friendName.charAt(0).toUpperCase()+friendName.slice(1).toLowerCase());

//Second Program having Comments

//Today's Date: 22 Feb, 2024.
//Program Description: The program is printing the quote of Adele Adkins. She is a famous British singer.

let famous_person: string = "Adele Adkins";
let message: string = '"' + "I don’t care if you’re black, white, short, tall, skinny, rich or poor. If you respect me I’ll respect you." + '"';
console.log(famous_person + " quotes, " + message);

// Task No.11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Humayoon", "Rahim", "Lovish"];
for (let i = 0; i < 3; i++) {
    console.log(names[i]);
}

// Task No.12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[] = ["Humayoon", "Rahim", "Lovish"];
let greetingMessage: string = "Meet my friend, ";
for (let j = 0; j < 3; j++) {
    console.log(greetingMessage + names[j] + ".");
}

// Task No.13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let myFavoriteTransportation: string[] = ["car", "aeroplane", "bicycle"];
for (let k = 0; k < 3; k++) {
    console.log("I would like to own a " + myFavoriteTransportation[k] + ".");
}

// Task No.14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ["Nimra", "Humayoon", "Rahim"];
for (let i = 0; i < 3; i++) {
    console.log("Dear " + guestList[i] + ", you are invited to dinner tonight. We will have fun.");
}

/* Task No.15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

let guestList: string[] = ["Nimra", "Humayoon", "Talha"];
for (let i = 0; i < 3; i++) {
    console.log("Dear " + guestList[i] + ", you are invited to dinner tonight. We will have fun.");
}
let guestNotComing: string = guestList[2];
console.log(guestNotComing + " can't make it to dinner.");
guestList[2] = "Rahim"; //Here, we are inviting Rahim and also making changing in the given array.
for (let i = 0; i < 3; i++) {
    console.log("Dear " + guestList[i] + ", you are invited to dinner tonight. We will have fun.");
}

/* Task No.16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let guestList: string[] = ["Nimra", "Humayoon", "Rahim"];
for (let m = 0; m < guestList.length; m++) {
    console.log("Dear " + guestList[m] + ", you are invited to dinner tonight. We will have fun!");
}
console.log("\nWe found a bigger dinner table.\n");
guestList.unshift("Lovish");
guestList.splice(3, 0, "Farman") //in the middle of array
guestList.push("Ahad"); //append method does not exist in TypeScript, so we are using push method
for (let n = 0; n < guestList.length; n++) {
    console.log("Dear " + guestList[n] + ", you are invited to dinner tonight. We will have fun!");
}

/* Task No.17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

let guestList: string[] = ["Nimra", "Humayoon", "Rahim"];
for (let m = 0; m < 3; m++) {
    console.log("Dear " + guestList[m] + ", you are invited to dinner tonight. We will have fun!");
}
console.log("\nWe found a bigger dinner table.\n");
guestList.unshift("Lovish");
guestList.splice(3, 0, "Farman");
guestList.push("Ahad");
for (let n = 0; n < 6; n++) {
    console.log("Dear " + guestList[n] + ", you are invited to dinner tonight. We will have fun!");
}
console.log("\nSorry, we can only invite two people for dinner.");
for (let i = 6 - 1; i > 1; i--) {
    let removedGuest = guestList.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner tonight.");
}
console.log("\nInvitations for the two remaining guests:");
for (let guest of guestList) {
    console.log("Dear " + guest + ", you are still invited to dinner tonight. We will have fun!");
}
guestList = [];
console.log("\nFinal guest list:", guestList);

/* Task No.18: Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

let visitingPlaces: string[] = ["US", "Canada", "Palestine", "Saudi Arabia", "Russia"];
console.log("The original order:", visitingPlaces);
console.log("The alphabetical order:", [...visitingPlaces].sort()); //The three dots will not change the original list but a copy that would be printed  based on function
console.log("The original order:", visitingPlaces);
console.log("The reverse alphabetical order:", [...visitingPlaces].sort().reverse());
console.log("The original order:", visitingPlaces);
console.log("The reversed order:", visitingPlaces.reverse());
console.log("Back to Original:", visitingPlaces);
console.log("Array sorted in alphabetical order:", visitingPlaces.sort());
console.log("Array sorted in reverse alphabetical order:", visitingPlaces.sort().reverse());

// Task No.19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList: string[] = ["Nimra", "Humayoon", "Talha"];
for (let i = 0; i < 3; i++) {
    console.log("Dear " + guestList[i] + ", you are invited to dinner tonight. We will have fun.");
}
let total: number = guestList.length;
console.log("No. of People I am inviting: ", total)

// Task No.20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let sweets: string [] = ["Cakes", "Biscuits", "Ice Cream", "Brownie"];
console.log("List of Sweets I love: ");
for (let sweet of sweets){
    console.log(sweet);
}

// Task No.21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let siblings = [
    {
        name: "Nimra", age: 24, gender: "Female", department: "Telecom", favColor: "Emerald"
    },
    {
        name: "Aliyan", age: 22, gender: "Male", department: "IT", favColor: "Navy"
    },
    {
        name: "Ali", age: 20, gender: "Male", department: "BA", favColor: "Black"
    }
]
console.log("Siblings Information: ");
for (let sibling of siblings){
    console.log("Name:", sibling.name);
    console.log("Age:", sibling.age);
    console.log("Gender:", sibling.gender);
    console.log("Department:", sibling.department);
    console.log("Favorite Color:", sibling.favColor);
}

// Task No.22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let naturalNumbers: number[] = [1, 2, 3, 4, 5];
console.log(naturalNumbers[10]); // Intentional error (Wrong index)
console.log(naturalNumbers[2]); // Accessing the element at right index

/* Task No.23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let num1: number = 10;
let num2: number = 15;
let num3: number = 20;
let num4: number = 25;
let num5: number = 30;

console.log("The numbers num1, num2, num3, num4, num5 are equal to ", num1, num2, num3, num4, num5, " respectively.")
console.log("Is num1 less than num 2?", num1 < num5);
console.log("Is num2 equal to num4?", num2 == num4);
console.log("Is num3 not equal to num3?", num3 != num4);
console.log("Is num4 greater than num2?", num4 > num2);
console.log("Is num5 greater than num1?", num5 > num1);
console.log("Is num5 equal to num4?", num5 == num4);
console.log("Is num4 not equal to num5?", num4 != num5);
console.log("Is num3 less than num4?", num3 < num4);
console.log("Is num2 equal to num5?", num2 == num5);
console.log("Is num1 greater than num2?", num1 > num2);

/* Task No.24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

//First test

let string1: string = "Aliyan";
let string2: string = "Rahim";
console.log("String 1: ", string1, "\nString 2: ", string2);
console.log("Are both strings equal?");
console.log(string1 == string2);
console.log("Are both strings not equal?");
console.log(string1 != string2);

//Second test

let string1: string = "ALIYAN";
let string2: string = "aliyan";
console.log("String 1: ", string1, "\nString 2: ", string2);
console.log("Are both the strings equal?");
console.log(string1.toLowerCase() == string2); //Converting string1 into lowercase then comparing

//Third test

let num1: number = 69;
let num2: number = 96;
console.log("Num1: ", num1, "\nNum2: ", num2)
console.log("Is number1 greater than number2?");
console.log(num1 > num2);
console.log("Is number1 less than or equal to number2?");
console.log(num1 <= num2);

//Forth test

let firstCondition: boolean = false;
let secondCondition: boolean = true;
console.log("Are both conditions true?");
console.log(firstCondition && secondCondition);
console.log("Are both conditions false?");
console.log(firstCondition && secondCondition);
console.log("Is one of the condition is true?");
console.log(firstCondition || secondCondition);
console.log("Is one of the condition is false?");
console.log(firstCondition || secondCondition);

//Fifth and Sixth test

let clouds: string[] = ["AWS", "Azure", "Alibaba"];
console.log("Is Amazon Cloud included in Cloud Array?");
console.log(clouds.includes("AWS"));
console.log("Is Google Cloud included in Cloud Array?");
console.log(clouds.includes("GCP"));

/* Task No.25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */

//Test one

let alien_color: string = "red";
if (alien_color == "red") {
    console.log("Congratulations! 5 points earned.");
}

//Test two

let alien_color: string = "red";
if (alien_color == "green") {
    console.log("Congratulations! 5 points earned.");
}

/* Task No.26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */

//Version 1

let alien_color: string = "green";
if (alien_color == "green") {
    console.log("Congratulations! 5 points are earned.");
} else {
    console.log("Congratulations! 10 poinst are earned.");
}

//Version 2

let alien_color: string = "red";
if (alien_color == "green") {
    console.log("Congratulations! 5 points are earned.");
} else {
    console.log("Congratulations! 10 poinst are earned.");
}

/* Task No.27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

//Version 1

let alien_color: string = "red";
if(alien_color == "green"){
    console.log("Congratulations! 5 points are earned.")
}
else if(alien_color == "yellow"){
    console.log("Congratulations! 10 points are earned.")
}
else if(alien_color == "red"){
    console.log("Congratulations! 15 points are earned.")
}

//Version 2

let alien_color: string = "green";
if(alien_color == "green"){
    console.log("Congratulations! 5 points are earned.")
}
else if(alien_color == "yellow"){
    console.log("Congratulations! 10 points are earned.")
}
else if(alien_color == "red"){
    console.log("Congratulations! 15 points are earned.")
}

//Version 3

let alien_color: string = "yellow";
if(alien_color == "green"){
    console.log("Congratulations! 5 points are earned.")
}
else if(alien_color == "yellow"){
    console.log("Congratulations! 10 points are earned.")
}
else if(alien_color == "red"){
    console.log("Congratulations! 15 points are earned.")
}

/* Task No.28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */

let age: number = 22;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

/* Task No.29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string[] = ["Oranges", "Banana", "Dates"];
if (favorite_fruits.includes("Oranges")) {
    console.log("I really like oranges!");
}
if (favorite_fruits.includes("Strawberries")) {
    console.log("I really like strawberries!");
}
if (favorite_fruits.includes("Kiwis")) {
    console.log("I really like kiwis!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I really like bananas!");
}
if (favorite_fruits.includes("Dates")) {
    console.log("I really like dates!");
}

/* Task No.30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

let usernames: string[] = ["admin", "humayoon", "aliyan", "rahim", "talha"];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + username + ", thank you for logging in again.");
    }
}

/* Task No.31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

let usernames: string[] = ["admin", "humayoon", "aliyan", "rahim", "talha"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + username + ", thank you for logging in again.");
        }
    }
}

/* Task No.32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

let current_users: string[] = ["admin", "humayoon", "aliyan", "rahim", "talha"];
let new_users: string[] = ["rahim", "lovish", "shazmeen", "hassan", "sheeraz"];
for (let new_user of new_users) {
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is already taken.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}

/* Task No.33:  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinalNumber: string;

    if (number === 1) {
        ordinalNumber = "1st";
    } else if (number === 2) {
        ordinalNumber = "2nd";
    } else if (number === 3) {
        ordinalNumber = "3rd";
    } else {
        ordinalNumber = number + "th";
    }
    console.log(ordinalNumber);
}

/* Task No.34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */

let pizzas: string[] = ['Veggie', 'Cheese', 'BBQ'];
for (let pizza of pizzas) {
    console.log(pizza);
}
for (let pizza of pizzas) {
    console.log(`I am in love with ${pizza} pizza.`);
}
console.log("I can eat pizzas whole day long.");

/* Task No.35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such as A dog would make a great pet.

• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */

let animals: string[] = ['Hedgehog', 'Hamster', 'Unicorn'];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log('These three animals are often associated with fantasy and imagination.');

// Task No.36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string){
    console.log(`The shirt size is ${size} and the printed message is: ${message}`);
}
make_shirt('Small', 'Yas!');

// Task No.37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'){
    console.log(`The shirt size is ${size} and the printed message is: ${message}`);
}
make_shirt(); //Default size and message
make_shirt('Medium'); //Default message
make_shirt('XSmall', 'I love Python too'); //Altered message

// Task No.38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = 'Pakistan'){
    console.log(`${city} is in ${country}.`);
}
describe_city('Hyderabad');
describe_city('Lahore');
describe_city('London', 'United Kingdom');

/* Task No.39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country('Paris', 'France'));
console.log(city_country('Riyadh', 'Saudi Arabia'));
console.log(city_country('Bangkok', 'Thailand'));

// Task No.40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album('Artist1', 'Album1', 10);
let album2 = make_album('Artist2', 'Album2');
let album3 = make_album('Artist3', 'Album3', 15);
console.log(album1);
console.log(album2);
console.log(album3);

//Task No.41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]){
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians: string[] = ['Rahim', 'Aliyan', 'Ali', 'Humayoon'];
show_magicians(magicians);

// Task No.42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]){
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}
let magicians: string[] = ['Rahim', 'Aliyan', 'Ali', 'Humayoon'];
let great_magicians = make_great(magicians);
show_magicians(great_magicians);

// Task No.43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) console.log(magician);
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) great_magicians.push(`${magician} the Great`);
    return great_magicians;
}
let magicians: string[] = ['Rahim', 'Aliyan', 'Ali', 'Humayoon'];
let great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);

// Task No.44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(items: string[]): void {
    console.log("Sandwich Items:");
    for (let item of items) {
        console.log(item);
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(['Cheese', 'Tomato', 'Lettuce']);
makeSandwich(['Ham', 'Mustard']);
makeSandwich(['Turkey', 'Avocado', 'Bacon', 'Mayonnaise']);

// Task No.45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    let car: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let option of options) {
        car[option[0]] = option[1];
    }
    return car;
}
let myCar = carInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
console.log(myCar);