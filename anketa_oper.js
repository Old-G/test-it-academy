let lastName = prompt('фамилия')
let firstName = prompt('имя')
let secondName = prompt('отчество')

let age = prompt('возраст')

let ageDays = parseInt(age) * 365

let gender = confirm('ваш пол - мужской?')

const whatGender = gender ? 'мужской' : 'женский'

const timeRelaxMen = gender && parseInt(age) >= 60 ? 'да' : 'нет'
const noTimeRelaxMen = gender && parseInt(age) <= 60 ? 'нет' : 'да'
const relaxMen = gender && parseInt(age) >= 60 ? timeRelaxMen : noTimeRelaxMen

const timeRelaxWoman = !gender && parseInt(age) >= 55 ? 'да' : 'нет'
const noTimeRelaxWoman = !gender && parseInt(age) <= 55 ? 'нет' : 'да'
const relaxWoman =
  !gender && parseInt(age) >= 55 ? timeRelaxWoman : noTimeRelaxWoman

const genderWho = gender ? relaxMen : relaxWoman

alert(`
  ФИО: ${lastName} ${firstName} ${secondName}
  возраст, лет: ${age}
  возраст, дней: ${ageDays}
  пол: ${whatGender}
  пенсионный возраст: ${genderWho}
`)
