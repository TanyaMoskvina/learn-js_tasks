function sumInput() {
    let numbers = [];
    let sum = 0;

    while (true) {
        let num = prompt("Введите число", 0);
        
        if (num === "" || num === null || !isFinite(num)) {
            break;
        }

        numbers.push(+num);
    }

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

alert( sumInput() );