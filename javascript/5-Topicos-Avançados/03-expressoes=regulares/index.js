function phoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)
}

console.log(new phoneNumber('+55 (31) 9 99422-1594'))

console.log(new phoneNumber('+1 (21) 9 9sada22-1594-5513'))