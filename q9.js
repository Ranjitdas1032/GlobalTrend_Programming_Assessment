function filter(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            res.push(arr[i]);
        }
    }
    return res;
}
let arr= [11,2,4,6,7,9,22]
console.log(filter(arr))