module.exports = class Installment {
    constructor(valueOfParcel, parcelNumber) {
        this.valueOfParcel = valueOfParcel
        this.parcelNumber = parcelNumber
        this.settled = 'false'
    }
}