function checkSpam(str) {
    let strLower = str.toLowerCase();
    
    return strLower.includes('viagra') || strLower.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam('innocent rabbit') );
console.log( checkSpam('') );