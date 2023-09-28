function soma(a, b)  {
    return a + b;
}

function equatrorial(n){

    return n <= 1 ? 1 : n * equatrorial(n-1)
}

//teste

module.exports = {
    soma,
    equatrorial
}