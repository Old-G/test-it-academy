let lastName = prompt('фамилия')
let firstName = prompt('имя')
let secondName = prompt('отчество')

let age = prompt('возраст')

let ageDays = parseInt(age) * 365

let gender = confirm('ваш пол - мужской?')

function whatGender() {
  if (gender) {
    const men = 'мужской'
    return men
  } else {
    const woman = 'женский'
    return woman
  }
}

function timeRelax() {
  if (gender && parseInt(age) >= 60) {
    const men = 'да'
    return men
  } else if (!gender && parseInt(age) >= 55) {
    const woman = 'да'
    return woman
  } else if (gender && parseInt(age) <= 60) {
    const men = 'нет'
    return men
  } else if (!gender && parseInt(age) <= 55) {
    const woman = 'нет'
    return woman
  }
}

alert(`
  ФИО: ${lastName} ${firstName} ${secondName}
  возраст, лет: ${age}
  возраст, дней: ${ageDays}
  пол: ${whatGender()}
  пенсионный возраст: ${timeRelax()}
`)
