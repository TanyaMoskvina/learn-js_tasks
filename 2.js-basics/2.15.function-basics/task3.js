function pow(x, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result
}


let x = +prompt('x = ');
let n = +prompt('n = ');

if (n < 0) {
    alert(`n = ${n} не поддерживается, используйте натуральное число`);
}
else {
    alert(pow(x, n));
}
