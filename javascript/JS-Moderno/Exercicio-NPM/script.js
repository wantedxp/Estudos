/* Você deverá criar uma função javascript que recebe como parâmetro a data de nascimento de uma pessoa no formato string e mostre no terminal a idade dessa pessoa no dia atual, sua próxima data de aniversário no formato “DD/MM/AAAA” e quantos dias faltam para o próximo aniversário dela. Para isso, você deverá utilizar o módulo dayjs, disponível no npm. */

const dayjs = require('dayjs')

function getBirthday(date) {
    const birthday = dayjs(date, 'DD/MM/YYYY')

    const age = dayjs().diff(birthday, 'year')
    console.log(`Sua idade é: ${age}`)

    const nextBirthday = birthday.add(age + 1, 'year')
    console.log(`Seu próximo aniversário é ${nextBirthday.format('DD/MM/YYYY')}`)

    const daysUntilNextBirthday = nextBirthday.diff(dayjs(), 'day')
    console.log(`Dias para o próximo aniversário: ${daysUntilNextBirthday}`)
}

getBirthday('1994/02/07')