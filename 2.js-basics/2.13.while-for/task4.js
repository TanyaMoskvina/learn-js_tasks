'use strict';

let n = 11;

for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (!(i % j)) break;
        
        console.log(i);
        break;
    }
}