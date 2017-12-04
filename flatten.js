function flatArray() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            result.push.apply(result, flatArray.apply(this, arguments[i]));
        } else {
            result.push(arguments[i]);
        }
    }
    return result;
}

console.log(flatArray(1,2,[3,4],[5, 6, [7, 8]]))