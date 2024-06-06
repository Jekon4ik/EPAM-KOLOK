// task1    
function findMiddleCharacter() {
    let userInput = prompt("Enter a word:");
    if (userInput === null) {
        alert("Canceled");
        console.log("Canceled");
        return;
    }
    userInput = userInput.trim();
    if (userInput === "") {
        alert("Invalid value");
        console.log("Invalid value");
        return;
    }
    let length = userInput.length;
    let middleIndex = Math.floor(length / 2);
    let result;
    if (length % 2 === 0) {
        result = userInput[middleIndex - 1] + userInput[middleIndex];
    } else {
        result = userInput[middleIndex];
    }

    alert(result);
    console.log(result);
}
//task2
import { users } from './users_task2.js';
function getUniqueSkills(users) {
    const skillsSet = new Set();

    users.forEach(user => {
        user.skills.forEach(skill => {
            skillsSet.add(skill);
        });
    });
    
    return Array.from(skillsSet);
}
function getTotalUsers(users) {
    const filteredUsers = users.filter(user => {
        return user.friends.length === 2 && user.age < 30;
    });
    const totalBalance = filteredUsers.reduce((total, user) => {
        return total + user.balance;
    }, 0);
    return totalBalance;
}
//task1
//findMiddleCharacter();


//task2
//console.log(getUniqueSkills(users));
//console.log(getTotalUsers(users));


//task3
/*
// Взагалом оператор spread та rest досить схожі бо використовують схожий синтаксис '...' , але вони використовуються в різних контекстах.
// Оператор spread дозволяє розширити ітерабельний об'єкт (наприклад, масив або рядок) у місцях, де очікується нуль або більше аргументів чи елементів. Він корисний для копіювання та конкатенації масивів, розповсюдження елементів у викликах функцій тощо.
// А ось rest оператор використовується для збору аргументів в масив. Він дозволяє збирати будь-яку кількість аргументів у масив, що дозволяє функціям працювати з будь-якою кількістю аргументів. Він також може бути використаний для розпакування масивів, які містять інші масиви.
// Наприклад, оператор spread може бути використаний для копіювання масиву:
const arr = [1, 2, 3];
const copyArr = [...arr];
console.log(copyArr); // [1, 2, 3]
// або для конкатенації масивів:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatArr = [...arr1, ...arr2];
// А rest оператор може бути використаний для збору аргументів у масив:
function sum(...args) {
    return args.reduce((acc, arg) => acc + arg, 0);
}
console.log(sum(1, 2, 3)); // output: 6
// або для розпакування масиву:
const arr3 = [1, 2, 3];
const [first, ...rest] = arr3;
console.log(first); // 1
*/

//task4

