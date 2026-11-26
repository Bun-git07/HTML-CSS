// Challenge 1: Draw a rectangle in the console using stars
function challenge1(rows = 4, cols = 5) {
    const row = "* ".repeat(cols);
    for (let i = 0; i < rows; i++) {
        console.log(row);
    }
}

// Challenge 2: Reverse an array
function challenge2(arr = [14, 15, 16, 20]) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }
    return arr;
}

// Challenge 3: Calculate the average grade of a list of students
function challenge3(arr = [85, 90, 78, 92]) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Challenge 4: Write a function to count how many times a character appears in a string
function challenge4(text = "hello world", char = 'o') {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }
    return count;
}

// Challenge 5: Count the number of words in a sentence
function challenge5(text = "a bb ccc ddddddd e") {
    if (!text || text.trim().length === 0) return 0;
    let count = 1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            count++;
        }
    }
    return count;
}

// Challenge 6: Simulate a voting system for three candidates (A / B/ C).
//              Count votes and declare a winner

function challenge6(votes = ['A', 'B', 'A', 'C', 'A']) {
    if (votes.length === 0) {
        return "There is no vote yet";
    }

    let countA = 0, countB = 0, countC = 0;
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === 'A') {
            countA++;
        } else if (votes[i] === 'B') {
            countB++;
        } else if (votes[i] === 'C') {
            countC++;
        }
    }

    if (countA > countB && countA > countC) return "A is the winner";
    if (countB > countA && countB > countC) return "B is the winner";
    if (countC > countA && countC > countB) return "C is the winner";
    if (countA === countB && countA > countC) return "A and B are both the winner";
    if (countA === countC && countA > countB) return "A and C are both the winner";
    if (countB === countC && countB > countA) return "B and C are both the winner";

    return "Everything is the winner";
}

// --- Example Calls ---
challenge1();
challenge2();
console.log(challenge3());
console.log(challenge4());
console.log(challenge5());
console.log(challenge6());