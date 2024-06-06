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

findMiddleCharacter();
