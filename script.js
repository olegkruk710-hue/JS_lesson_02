
let result_even = 0;
let result_odd = 0;

for (let i = 1; i <= 10; i++)  {
    if (i % 2 === 0) {
        result_even += i
    }

    else {
        result_odd += i
    }
}

console.log(result_even)
console.log(result_odd)

console.log("тест")