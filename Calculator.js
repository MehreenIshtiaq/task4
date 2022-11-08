function sum(a, b){
    return a+b;
}

function difference(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if (b!=0)
    return a/b;
    else
    return 'infinite'
}

module.exports= {
    sum, difference, divide, multiply
}