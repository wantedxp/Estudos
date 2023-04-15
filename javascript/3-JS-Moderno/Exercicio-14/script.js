// Simple Arithmetic Average:
const average = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    return sum / numbers.length
}
console.log(average(2, 5, 3, 7, 4))


// Weighted Arithmetic Average:
const weightedAverage = (numbers, weights) => {
    const sum = numbers.reduce((acc, number, index) => acc + number * weights[index], 0)
    console.log(sum)
    const weightSum = weights.reduce((acc, weight) => acc + weight, 0)
    return sum / weightSum
}
const numbers = [7, 9, 3]
const weights = [2, 5, 1]
const result = weightedAverage(numbers, weights)

console.log(result)


// Median
const median = (...numbers) => {
    const sortedNumbers = numbers.sort((a, b) => a - b)
    const middleIndex = Math.floor(sortedNumbers.length / 2)

    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2
    } else {
        return sortedNumbers[middleIndex]
    }
}

console.log(median(2, 4, 5, 7, 42, 99))
console.log(median(15, 14, 8, 7, 3))


// Mode
const mode = (...numbers) => {
    const frequencyMap = new Map()
    let maxFrequency = 0
    let modeValue

    for (const num of numbers) {
        const frequency = (frequencyMap.get(num) || 0) + 1
        frequencyMap.set(num, frequency)

        if (frequency > maxFrequency) {
            maxFrequency = frequency
            modeValue = num
        }
    }

    return modeValue;
}

console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))