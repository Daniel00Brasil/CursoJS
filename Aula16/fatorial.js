function fatorial(num) {
    let fat = 1
    for (let c = num; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//Fatorial de  5 = 5x4x3x2x1 = 120