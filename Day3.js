const person = {
  firstName: 'Adeleye',
  lastName: 'Temiloluwa',
  age: 17,
  country: 'NIgeria',
  city: 'Abeokuta',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'Django',
    'MySQL'
  ],
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`
  }
}

let uncle = Object.assign({}, person)
console.log(Object.values(uncle))