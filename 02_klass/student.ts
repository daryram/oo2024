class Student {
    name: string;
    age: number;
    city: string;
    department: string;

    constructor(name: string, age: number, city: string, department: string) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.department = department;
    }

}

let john = new Student("John", 17, "Tallinn", "computer science");
let mary = new Student("Mary", 18, "Tartu", "biology");
let alex = new Student("Alex", 18, "London", "computer science");
let andrew = new Student("Andrew", 20, "New York", "music");
 
console.log(john.name);
console.log(mary.age);
console.log(alex.city);
console.log(andrew.department);