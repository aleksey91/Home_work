function pow() {
    var a = parseInt(prompt('Please, enter number:'));
    var b = parseInt(prompt('Please, enter power:'));
    console.log('a = ', a);
    console.log('b = ', b);
    if (isNaN(a) || isNaN(b)) {
        return 'incorrect data';
    } else {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result *= a;
        }
        return result;
    }
}

console.log('result = ', pow());