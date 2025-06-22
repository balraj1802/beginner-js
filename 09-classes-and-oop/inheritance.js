class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// extend keyword is use to inherit a class into present class
class Teacher extends User{
    constructor(username, email, password){
        super(username)  // use super instead of .call function to call the function of another class into present class
        // .call() ko bhi use kr skte hai
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);