// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
function task_1(num) {
    if (!isNumber(num)) {
        console.log("Invalid number");
        return;
    }
    if (num === 0 || num === 1) {
        return "No";
    }
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime ? "Yes" : "No";
}

// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
function task_2(n) {
    if (!isNumber(n) || n < 0) {
        console.log("Invalid number");
        return;
    }
    if (n <= 1) {
        return n;
    }

    return task_2(n - 1) + task_2(n - 2);
}

// 3 . Given a number n( n> 0 ). Print Fibonacci series up to n.
function task_3(n) {
    if (!isNumber(n) || n <= 0) {
        console.log("Invalid number");
        return;
    }
    if (n === 1) {
        console.log("Can't find number Fibonacci series up to 1 ");
        return;
    }
    let fibArr = [];
    let first = 0;
    let second = 1;
    let fibNumber;
    for (let i = 2; i <= n; i++) {
        fibNumber = first + second;
        first = second;
        second = fibNumber;
        if (fibNumber < n) {
            fibArr.push(fibNumber)
        } else {
            break;
        }
    }
    return fibArr;
}

// 4 Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.
function task_4(num) {
    if (!isNumber(num)) {
        console.log("Invalid number");
        return;
    }
    if (num === 0) {
        return "Cannot calculate";
    }
    let sum = 0;
    let product = 1;
    let numStr = num.toString();
    let numLength = numStr.length;
    for (let i = 0; i < numLength; i++) {
        sum += Number.parseInt(numStr[i]);
        product *= Number.parseInt(numStr[i]);
    }
    let result = product % sum;
    return result === 0 ? "Quotient is " + product / sum : "Remainder is " + result;
}

// 5. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b
function task_5(a, b, num) {
    if (!isNumber(a) || !isNumber(b) || !isNumber(num)) {
        console.log("Please provide valid numbers.")
        return;
    }
    if (a > b) {
        console.log("Given a <= b");
        return;
    }

    let result = [a];
    if (num === 1) {
        return result;
    }

    let interval = (b - a) / (num - 1);
    let previous = a;
    for (let i = 0; i < b - 1; i++) {
        let next = Number(previous + interval).toPrecision(2);
        if (next >= b) {
            break;
        }
        result.push(next);
        previous = +next;
    }

    result.push(b);

    return result;

}

// 6. Given an array of numbers. Find the index of the second maximum element.
function task_6(numArray) {
    if (numArray === undefined || numArray.length === 0) {
        console.log("Please provide valid array.")
        return;
    }
    let resultArray = [];

    for (let i = 0; i < numArray.length; i++) {
        resultArray[i] = numArray[i];
    }

    resultArray.sort(function (a, b) {
        return a - b;
    });
    let secondMaxNumber = resultArray[resultArray.length - 2];

    return numArray.indexOf(secondMaxNumber);
}

// 7. Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount
// specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should
function task_7(numArray, padAmount, repeat) {
    if (numArray === undefined || numArray.length === 0) {
        console.log("Please provide valid array.");
        return;
    }
    if (!isNumber(padAmount) || !isNumber(repeat)) {
        console.log("Please provide valid numbers.");
        return;
    }
    if (padAmount > numArray.length) {
        return "Invalid padding amount";
    }
    let unshiftArray = [];
    let pushArray = [];
    let lastIndex = numArray.length - 1;
    for (let i = 0; i < padAmount; i++) {
        unshiftArray[i] = numArray[i];
        pushArray[i] = numArray[lastIndex - i];
    }

    pushArray.reverse();
    unshiftArray.reverse();

    for (let i = 0; i < repeat; i++) {
        for (let j = 0; j < unshiftArray.length; j++) {
            numArray.unshift(unshiftArray[j]);
        }
        for (let j = 0; j < unshiftArray.length; j++) {
            numArray.push(pushArray[j]);
        }
    }

    return numArray;
}

function isNumber(num) {
    return !isNaN(num)
}