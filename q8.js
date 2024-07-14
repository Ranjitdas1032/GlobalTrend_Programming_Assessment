class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        if (key in this.map) {
            return this.map[key];
        } else {
            return null; 
        }
    }

    remove(key) {
        if (key in this.map) {
            delete this.map[key];
        }
    }
}

let myMap = new HashMap();
myMap.put("name", "Alice");
myMap.put("age", 25);

console.log(myMap.get("name"));
console.log(myMap.get("age")); 
console.log(myMap.get("address"));

myMap.remove("age");
console.log(myMap.get("age"));