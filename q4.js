function isAnagram(str1, str2) {
    
    if (str1.length !== str2.length) {
        return false;
    }

    
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

let str1 = "listen";
let str2 = "silent";
console.log(isAnagram(str1, str2));

str1 = "hello";
str2 = "world";
console.log(isAnagram(str1, str2)); 