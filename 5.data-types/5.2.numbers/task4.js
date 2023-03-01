function random(min, max) {
    let numb = Math.random() * (max + 1 - min) + min
    return Math.floor(numb);
}

console.log(random(1,6));
console.log(random(1,6));
console.log(random(1,6));
console.log(random(1,6));
console.log(random(1,6));
console.log(random(1,6));

