// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     country: 'Finland',
//     city: 'Helsinki',
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//     age: 250,
//     isLoggedIn: false,
//     points: 30
//   }

//   const txt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
//   JSON.parse(txt, (key, value) => 
//     typeof value === 'string'
//         ? value = 'Gone'
//         : value)

//   console.log(txt)

// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
// let age = 250;
// let isMarried = true
// const student = {
//   firstName:'Asabeneh',
//   lastName:'Yetayehe',
//   age:250,
//   isMarried:true,
//   skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }
// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `

// JSON.stringify(skills)
// const mostSkills = JSON.parse(txt, (key, value) => {
//     let newValue = 
//         typeof value == 'string' && key == 'skills'
//     return newValue
// })

// console.log(mostSkills)

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 0){
//             resolve(skills)
//         }else{
//             reject('Something bad has happened')
//         }
//     }, 2000)
// })

// doPromise.then(result => {console.log(result)})

const square = async function (n) {
    return n * n
}
console.log(await square(2))

// fetch('https://w3schools.com')
// .then(response => response.json())
// .then(data => console.log(data))

// fetch('https://restcountries.com/v2/all')
// .then(response => response.json())
// .then(data => console.log(data[0]))

// fetch('https://api.thecatapi.com/v1/breeds')
// .then(response => response.json())
// .then(data => {
//     weight = 0
//     for (i of data){
//         weight += parseInt(i.Object.values(weight)[1])
//     }
//     console.log(weight)
// })

// function outerFunction(){
//     let count = 0;
//     function innerFunction(){
//         count+=10
//         return count
//     }
//     return innerFunction
// }

// const innerFunc = outerFunction()
// console.log(innerFunc())

function outerFunction(){
    count = 10
    function innerFunction1(){
        return count += 1
    }
    function innerFunction2(){
        return count += 2
    }
    function innerFunction3(){
        return count += 3
    }
    return {
        innerFunction1: innerFunction1(),
        innerFunction2: innerFunction2(),
        innerFunction3: innerFunction3()
    }
}

a = outerFunction().innerFunction1
console.log(a)