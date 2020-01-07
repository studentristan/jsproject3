/**
* @author Werden Tristan
* @version 0.0.1
* @summary The ESP Game (project 3)
* @todo
*/

"use strict";
const PROMPT = require('readline-sync');

//section 1 ^^

let MAX_ANSWERS = 9;
let compPick, humanPick, colorName;
let numRight = 0;

//section 2 ^^

function main() {
    for (let i = 0; i <= MAX_ANSWERS; i++){
        computerPick();             //picks the number
        setHumanPick();             //prompts human input
        check();                    //checks the acuraccy and tells if wrong
    }
        printGoodbye();             //tells total number right
}

main();

//section 3 ^^

function computerPick(){
    compPick = Math.floor(Math.random() * 5);
    if (compPick === 0){
      colorName = "red";
    }
    else if (compPick === 1){
      colorName = "green";
    }
    else if (compPick === 2){
      colorName = "blue";
    }
    else if (compPick === 3){
      colorName = "orange";
    } else if (compPick === 4){
      colorName = "yellow";
    }
}

function setHumanPick(){
    humanPick = Number(PROMPT.question(`Please select a color, young padawan. \n[0-Red 1-Green 2-Blue 3-Orange 4-Yellow]`));
}

function check(){
    if (compPick === humanPick){
      console.log(`\n You were correct! Congratulations! You will become a true Jedi Master in no time!`);
      numRight = numRight + 1;
    } else {
      console.log(`\n The correct answer is ${colorName}. You are a loser and will never ammount to anything.`)
    }
}

function printGoodbye(){
    console.log(`\n You successfully answered ${numRight} questions. Farewell, young padawan.`)
}

//section 4 ^^

/*
* The ESP game.
*
* Design a program that tests your ESP (extrasensory perception).
*
* The program will randomly pick a color, and you will be asked to predict the program’s selection before it is revealed. Design the program to randomly
* select one of the following words:
*
* Red, Green, Blue, Orange, Yellow
*
* To select a word, the program can generate a random number. For example, if the number is 0, the selected word is Red, if the number is 1,
* the selected word is Green, and so forth.
*
* Next, the program should ask the user to enter the color that the computer has selected. After the user has entered his or her guess, the
* program should display the name of the randomly selected color. The program should repeat this 10 times and then display the number of times the user
* correctly guessed the selected color.
*
*EXAMPLE:
*What Color has the computer picked?
*0 - Red
*1 - Green
*2 - Blue
*3 - Orange
*4 - Yellow
*
*USER: 1
*
*Wrong. The answer was Yellow.
*((Repeat 10 times))
*
*You were right 5/10 times.
*/
