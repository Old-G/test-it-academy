let lastName = prompt('фамилия')
let firstName = prompt('имя')
let secondName = prompt('отчество')

let age = prompt('возраст')

let numAge = +age

let ageDays = numAge * 365

let ageAfter = numAge + 5

let gender = confirm('ваш пол - мужской?')

if (gender === false) {
  confirm('ваш пол - женский?')
}

const whatGender = gender ? 'мужской' : 'женский'

const timeRelaxMen = gender && numAge >= 60 ? 'да' : 'нет'
const noTimeRelaxMen = gender && numAge <= 60 ? 'нет' : 'да'
const relaxMen = gender && numAge >= 60 ? timeRelaxMen : noTimeRelaxMen

const timeRelaxWoman = !gender && numAge >= 55 ? 'да' : 'нет'
const noTimeRelaxWoman = !gender && numAge <= 55 ? 'нет' : 'да'
const relaxWoman = !gender && numAge >= 55 ? timeRelaxWoman : noTimeRelaxWoman

const genderWho = gender ? relaxMen : relaxWoman

alert(`
  ФИО: ${lastName} ${firstName} ${secondName}
  ваш возраст в годах: ${numAge}
  ваш возраст в днях: ${ageDays}
  через 5 лет вам будет: ${ageAfter}
  пол: ${whatGender}
  вы на пенсии: ${genderWho}
`)
