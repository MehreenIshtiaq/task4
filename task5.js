function isThere(x){
    const arr = [1, 2, 3, 5, 7, 10, 56, 34, 23]
    var boolean = false;

    for(let i=0; i<arr.length; i++){
        if(arr[i]===x){
            boolean=true;
            break;
        }
    }

    return boolean;
}

module.exports= isThere;