// const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['MongoDB', 'Express', 'Node']]

// let [, frontEnd, backEnd] = fullStack
// console.log(frontEnd)

// const names = [undefined, 'Brook', 'David']
// let [
//     firstPerson = 'Asabeneh',
//     secondPerson,
//     thirdPerson,
//     fourthPerson = 'Temiloluwa'
// ] = names

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// for ([first, second, third] of fullStack){
//     console.log(first, second, third)
// }

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }

// let {width: w, height: history, area: a} = rectangle

// const rect = {
//     width: 20,
//     height: 10
// }

// const calculatePerimeter = rectangle => {
//     return 2 * (rectangle)
// }

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(" , ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join("  ,  ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log({w, h, a, p})
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
let arrayFilter = arr => {
    user = []
    for (const {name, scores, skills, age} of arr){
        user.push((name, scores, skills, age))
    }return user
}

console.log(arrayFilter(users))

// let pattern = 'love'
// let regEx = new RegExp(pattern, 'gi')

// let str = 'i love maryam'
// console.log(regEx.test(str))

// console.log(str.match(/\W/g))

// let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// console.log(str.match(/\d+/gi).map(x => +x).reduce((a, b) => a + b))

let str = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles."


