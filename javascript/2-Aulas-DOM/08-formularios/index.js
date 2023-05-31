document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#orderForm')

    form.addEventListener('submit', (ev) => {
        ev.preventDefault()

        const name = document.querySelector('#name').value
        console.log(name);

        const address = document.querySelector('#address').value

        const breadType = document.querySelector('#breadType').value

        const main = document.querySelector('input[name="main"]:checked').value
        console.log(main)
        const observations = document.querySelector('#observations').value

        let salad = ''
        document.querySelectorAll('input[name="salad"]:checked').forEach((item) => {
            salad += `${item.value}, `
        })
        console.log({name, address, salad, observations, breadType})
    })
})