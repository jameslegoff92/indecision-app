class Person  {
  constructor(name = "Anonymous", age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi. I am ${this.name}. Pleasure to meet you.`
  }
  getDescription() {
    return `Hi! My name is ${this.name} and I just turned ${this.age}. Nice to meet you all.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()){
      description +=  ` My major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, hometown){
    super(name, age)
    this.hometown = hometown
  }
  getGreeting(){
    let greeting = super.getGreeting()
    if(this.hometown){
        greeting += greeting + ` I'm from ${this.hometown}`
    }
      return greeting
  } 
}

const me = new Traveler("James Le-Goff", 28, 'Montreal, Quebec')
console.log(me)
console.log(me.getGreeting())


const other = new Traveler()
console.log(other)
console.log(other.getGreeting())