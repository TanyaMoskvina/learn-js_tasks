'use strict';

let age = 13;

// 1 variant
if (age < 14 || age > 90) {
    console.log('age НЕ находится в диапазоне 14 и 90')
}

// 2 variant: с использованием оператора НЕ !
if (!(age >= 14  && age <= 90)) {
    console.log('age НЕ находится в диапазоне 14 и 90')
}
else {
    console.log(!(age >= 14))
}