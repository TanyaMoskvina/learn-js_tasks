function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        this.value += +prompt('Сколько прибавить к текущему значению?', 0);
    }
}