function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    const currencyNames = (country.currencies) ? Object.values(country.currencies).map(currency => currency.name) : [];

    const currencyElement = document.createElement('p')
    currencyElement.textContent = currencyNames.join(', ')

    card.append(name, flag, currencyElement)
    document.querySelector('#countries').append(card)
}

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()

    countries.forEach(createCountryCard)
}

getCountries()
