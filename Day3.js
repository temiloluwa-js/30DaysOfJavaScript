// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },

//   // getSkills: function(){
//   //   console.log(Object.values(this)[0].skills)
//   // }

// }

// function mostSkills(x){
//   let score = 0
//   let length = Object.values(x).length
//   for (i=0; i<length; i++){
//     if (Object.values(x)[i].isLoggedIn == true){
//       score
//     }
//   }return user

// }

// function mernStack(x){
//   let mern_developers = []
//   let length = Object.keys(x).length
//   let techs = ['MongoDB', 'Express', 'React', 'Node']
//   count = 0
//   for (i=0; i<length; i++){
//     let dev = Object.values(x)[i].skills
//     if (dev.includes(techs[0]) && dev.includes(techs[1]) && dev.includes(techs[2]) && dev.includes(techs[3])){
//       mern_developers.push(Object.entries(x)[i])
//     }
//   }return mern_developers
// }

// console.log(mernStack(users))

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp() {
  try {
    let user = {};
    user.id = Math.floor(Math.random() * 100000);
    user.email = prompt("Enter your email").toString();
    user.username = prompt("Enter your username").toString();
    user.password = prompt("Enter your password").toString();
    user.createdAt = new Date();
    user.isLoggedIn = false;

    users.push(user);
    alert("Sign up sucessful");
  } catch (err) {
    alert(`${err.name} ${err.message}`);
  }
}

function signIn() {
  try {
    let email = prompt("Enter your email").toString();
    let password = prompt("Enter your password").toString();

    for (i = 0; i < users.length - 1; i++) {
      let user = Object.keys(users)[i];
      if (user.email == email && user.password == password) {
        user.isLoggedIn = true;
        alert("Sign in sucessful");
      } else {
        alert("Incorrect email or password");
      }
    }
  } catch (err) {
    alert(`${err.name} ${err.message}`);
  }
}


