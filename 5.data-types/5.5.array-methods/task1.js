function camelize(str) {
    str = str.split('-');
    str = str.map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    );
    str = str.join('');
    
    return str;
}

console.log( camelize('qwe-rty-uio') );