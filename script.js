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
