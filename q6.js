function capitalizeFirstWord(str) {
    if (!str) return str; 
    const words = str.split(' '); 
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1); 
    return words.join(' '); 
}

let str = "hello world, this is a test.";
console.log(capitalizeFirstWord(str)); 