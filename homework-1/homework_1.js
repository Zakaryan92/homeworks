// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.
function class_1(num) {
    if (isNaN(num)) {
        console.error("Please provide valid number format!");
        return;
    }
    console.log(num % 2 === 0 ? "odd" : "even");
}

// 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
function class_2(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Please provide valid number format!");
        return;
    }
    console.log((num1 % num2 === 0 || num2 % num1 === 0) ? 1 : 0);
}

// 3. Given two variables, which are the angles of a triangle. Find the third angle of the
// triangle. (Sum of the angles of a triangle equals 180 degrees).
function class_3(angle1, angle2) {
    if (isNaN(angle1) || isNaN(angle2) || angle1 <= 0 || angle2 <= 0) {
        console.error("Please provide valid number format.");
        return;
    }
    if (angle1 + angle2 === 180) {
        console.error("Given the invalid angle of the triangle. A Sum of two angles must be less 180 degrees!");
        return;
    }

    return 180 - (angle1 + angle2);
}

// 4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
function class_4(num) {
    if (isNaN(num) || num <= 0) {
        console.error("Please provide valid number format!");
        return;
    }
    console.log(num + +(num + "" + num) + +(num + "" + num + "" + num))
}

// 4. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.
function class_5(num) {
    let result = num;
    if (isNaN(num) || num <= 0) {
        console.error("Please provide valid number format!");
        return;
    }
    let lastNumber = num % 10;
    if (lastNumber !== 0 && lastNumber !== num) {
        result = lastNumber + "" + num / 10 >> 0;
    }
    return result;
}

// 6. Given five numbers as input. Calculate and print the average of the numbers(without
// using arrays).
function class_6(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

// 7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function class_7(num) {
    if (isNaN(num) || num <= 0) {
        console.error("Please provide valid number format!");
        return;
    }
    if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
        console.log(num + " is a multiple of 3, 5 and 7");
    } else if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + " is a multiple of 3 and 5.")
    } else if (num % 3 === 0 && num % 7 === 0) {
        console.log(num + " is a multiple of 3 and 7.")
    } else if (num % 5 === 0 && num % 7 === 0) {
        console.log(num + " is a multiple of 5 and 7.")
    } else if (num % 3 === 0 && num % 5 !== 0 && num % 7 !== 0) {
        console.log(num + " is a multiple of 3.");
    } else if (num % 5 === 0 && num % 3 !== 0 && num % 7 !== 0) {
        console.log(num + " is a multiple of 5.");
    } else if (num % 7 === 0 && num % 3 !== 0 && num % 5 !== 0) {
        console.log(num + " is a multiple of 7.");
    } else {
        console.log(num + " is not a multiple of 3, 5 or 7.");
    }
}

// Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
// year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
// years and more ). Also check that age in months is between 1 and 12.
function class_8(age, monthOrYear) {
    let result;
    if (isNaN(age) || !Number.isInteger(age) || age <= 0) {
        console.error("Please provide valid age. Age should be positive number and integer!");
        return;
    }
    if (age > 12 && monthOrYear === "months") {
        console.error("Please provide valid age. Moths should be <= 12 !");
    }
    if (monthOrYear !== "months" && monthOrYear !== "years") {
        console.error("Please provide valid month or year!");
        return;
    }
    if (monthOrYear === "months") {
        result = "baby";
    } else if (age >= 1 && age <= 2) {
        result = "toddler";
    } else if (age >= 3 && age <= 12) {
        result = "child";
    } else if (age >= 13 && age <= 17) {
        result = "teenager";
    } else {
        result = "adult";
    }
    return result;
}

// 9. Given three numbers. Sort them by the ascending order.
function class_9(num1, num2, num3) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.error("Please provide valid numbers.");
        return;
    }
    let min = num1;
    let middle = num2;
    let maximum = num3;

    if (min > middle) {
        middle = num1;
        min = num2;
    }
    if (middle > maximum) {
        maximum = middle;
        middle = num3;
        if (min > middle) {
            middle = min;
            min = num3;
        }
    }

    return min + ", " + middle + ", " + maximum;
}

// 10 Percentage marks obtained by a student in three exams are to be entered to a
// computer. An indication of Pass or Fail is given out after the three marks are entered.
//     The criteria for passing are as follows:
// a. A student passes if all three examinations are passed.
//     b. Additionally a student may pass if only one subject is failed but the overall
// average is greater than or equal to 50.
// The pass mark for an individual subject is 40
function class_10(exam1, exam2, exam3) {
    if (isNaN(exam1) || isNaN(exam2) || isNaN(exam3)) {
        console.error("Please provide valid examinations. Exams should be number.");
        return;
    }
    if (exam1 < 0 || exam2 < 0 || exam3 < 0) {
        console.error("Please provide valid examinations. Values can't be less then 0.");
        return;
    }
    let isPassed = true;
    if (exam1 < 40 && (exam2 < 50 || exam3 < 50)) {
        isPassed = false;
    } else if (exam2 < 40 && (exam1 < 50 || exam3 < 50)) {
        isPassed = false;
    } else if (exam3 < 40 && (exam1 < 50 || exam2 < 50)) {
        isPassed = false;
    }
    return isPassed ? "Passed" : "Not passed";
}

// 11. Find the sign of product of three numbers without multiplication operator. Display the
// specified sign.
function class_11(num1, num2, num3) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.error("Please provide valid numbers.");
        return;
    }
    let result = "-";
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        result = "+"
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        result = "+"
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        result = "+"
    } else if (num1 < 0 && num2 > 0 && num3 < 0) {
        result = "+"
    } else if (num1 === 0 || num2 === 0 || num3 === 0) {
        result = "unsigned"
    }
    return result;
}
// 12.Input three numbers a, b, c respectively, where a is a non zero number and write a
// program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).
function class_12(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.error("Please provide valid numbers.");
        return;
    }
    if (a === 0) {
        return "Enter valid constants";
    }

    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    if (isNaN(x1) && isNaN(x2)) {
        return "Solution does not exists";
    } else if (isNaN(x1)) {
        return "Solution is " + x2;
    } else if (isNaN(x2)) {
        return "Solution is " + x1;
    } else if (x1 === x2) {
        return "Solution is " + x1;
    } else {
        return "Solutions are " + x1 + " and " + x2;
    }
}

// 13.
function class_13() {
    let n = +prompt();
    let i = 0;
    let j = 0;
    if (n % 2 === 0 && !Math.floor(n / 10)) {
        i += 1;
    }
    if (n % 3 === 0 && n % 10 === 1) {
        j += 1;
    }
}

// 14. Insert a digit and a number. Check whether the digits contains in the number or not.
function class_14(digit, num) {
    if (isNaN(num) || isNaN(digit)) {
        console.error("Please provide valid numbers.");
        return;
    }
    if (digit === num) {
        return "Yes"
    }

    let result = "No";
    num = +num;
    digit = +digit;

    while ((num % 10) !== num) {
        if (num % 10 === +digit) {
            result = "Yes";
            break
        } else {
            num = Math.trunc(num / 10);
        }
    }
    return result;
}

// 15. Enter a number. Reverse its first and last digits. Print the new number.
function class_15(num) {
    if (isNaN(num)) {
        console.error("Please provide valid number.");
        return;
    }
    let tempNum = +num;
    if (num % 10 === num) {
        return num;
    }

    let firstNumber;
    let lastNumber = num % 10;
    let middles;
    let middleCount = 0;

    while ((tempNum % 10) !== tempNum) {
        tempNum = Math.trunc(tempNum / 10);

        middleCount++;
    }

    firstNumber = Math.trunc(num / (Math.pow(10, middleCount)));

    middles = Math.trunc(num / 10) % (Math.pow(10, middleCount - 1));

    if (middles === 0) {
        return lastNumber.toString() + firstNumber.toString();
    }

    return lastNumber.toString() + middles.toString() + firstNumber.toString();
}

// 17. Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
//     For the triangle entered numbers are height and and base.

function class_17(figureName, num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Please provide valid numbers.");
        return;
    }
    if (num1 <= 0 || num2 <= 0) {
        return "Please enter only positives";
    }

    if (figureName === "triangle") {
        return "Square of the triangle is " + (num2 * num1) / 2
    } else if (figureName === "rectangle") {
        return "Square of the rectangle is " + (num2 * num1)
    } else {
        console.log("Doesn't supported figure: " + figureName)
    }
}

// 18. (***) Enter a number. Find the difference between its biggest and smallest digits.
function class_18(num) {
    if (isNaN(num)) {
        console.error("Please provide valid number.");
        return;
    }

    let tempNum = +num;
    let min = tempNum % 10;
    let max = tempNum % 10;

    while ((tempNum % 10) !== tempNum) {
        let result = tempNum % 10;
        min = Math.min(result, min);
        max = Math.max(result, max);
        tempNum = Math.trunc(tempNum / 10);
    }
    min = Math.min(tempNum, min);
    max = Math.max(tempNum, max);
    return max - min;
}
