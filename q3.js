function flattenArray(nestedArray) {
    let result = [];

    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    flatten(nestedArray);
    return result;
}

let nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log(flattenArray(nestedArray));