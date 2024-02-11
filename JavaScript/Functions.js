
'use strict'

let rand_num1 = 0;
let rand_num2 = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

console.log(getRandomIntNumberInRange);

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10);
    rand_num2 = getRandomIntNumberInRange(1,10);
    document.querySelector('#num1').textContent = rand_num1;
    document.querySelector('#num2').textContent = rand_num2;
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
});

document.querySelector('#calculate').addEventListener('click', () => {
    const answer = Number(document.querySelector('#answer').value);
    let correctAnswer = rand_num1 + rand_num2;

    if (answer === correctAnswer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    // Update scores
    document.querySelector('#correctAnswer').textContent = `Oikeita vastauksia: ${correctAnswers}`;
    document.querySelector('#incorrectAnswer').textContent = `Vääriä vastauksia: ${incorrectAnswers}`;

    randomizeNumbers();
    document.querySelector('input').value = '';
});
