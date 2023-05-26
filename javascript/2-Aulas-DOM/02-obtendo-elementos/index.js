const onClick = () => {
    const contactList = document.getElementById('contact-list')
    //console.log(contactList)

    const lis = document.getElementsByTagName('li')
    //console.log(lis)

    const contactInput = document.getElementsByClassName('contact-input')
    //console.log(contactInput)
    //contactInput[1].value = 'Hello'

    const contacts = document.querySelectorAll('#contact-list > li >label')
    //console.log(contacts)

   contacts.forEach(contact => {
    contact.style.color = 'red'
})
    
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)
    
}

