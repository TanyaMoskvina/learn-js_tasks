function readNumber() {
    let numb;

    do {
        numb = prompt('Введите число', '');
    } while (!isFinite(numb));

    if (numb === null || numb === '') {
        return null;
    }
    return +numb;
}