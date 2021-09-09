let lastName = prompt('фамилия')
let firstName = prompt('имя')
let secondName = prompt('отчество')

let age = prompt('возраст')

if (age === true) {
  parseInt(age)
}

let ageDays = age * 365

let ageAfter = age + 5

let gender = confirm('ваш пол - мужской?')

if (gender === false) {
  confirm('ваш пол - женский?')
}

const whatGender = gender ? 'мужской' : 'женский'

const timeRelaxMen = gender && age >= 60 ? 'да' : 'нет'
const noTimeRelaxMen = gender && age <= 60 ? 'нет' : 'да'
const relaxMen = gender && age >= 60 ? timeRelaxMen : noTimeRelaxMen

const timeRelaxWoman = !gender && age >= 55 ? 'да' : 'нет'
const noTimeRelaxWoman = !gender && age <= 55 ? 'нет' : 'да'
const relaxWoman = !gender && age >= 55 ? timeRelaxWoman : noTimeRelaxWoman

const genderWho = gender ? relaxMen : relaxWoman

alert(`
  ФИО: ${lastName} ${firstName} ${secondName}
  ваш возраст в годах: ${age}
  ваш возраст в днях: ${ageDays}
  через 5 лет вам будет: ${ageAfter}
  пол: ${whatGender}
  вы на пенсии: ${genderWho}
`)
