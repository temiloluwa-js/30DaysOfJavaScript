// class Person{
//     constructor(firstName='uncle', lastName='fuck', age='19'){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.skills = []
//     }
//     getFullName(){
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }

//     get getName(){
//         return this.firstName
//     }

//     set setSkills(skill){
//         this.skills.push(skill)
//     }

// }

// const person = new Person('Asabeneh', 'Yateyeh')
// const person2 = new Person('Adeoye', 'Marvellous')
// const person3 = new Person('Abraham', 'Yateyeh')
// console.log(person.getFullName())
// console.log(person.getName)
// person.setSkills = 'HTML'
// console.log(person)

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
// }

// class Student extends Person{
//     constructor(firstName, lastName, age, country, city, gender){
//         super(firstName, lastName, age, country, city)
//         this.gender = gender
//     }

//     saySomething(){
//         console.log('I am a child person of the class')
//     }
// }