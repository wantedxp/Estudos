"use strict";

// Simple Arithmetic Average:
var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  return sum / numbers.length;
};
console.log(average(2, 5, 3, 7, 4));

// Weighted Arithmetic Average:
var weightedAverage = function weightedAverage(numbers, weights) {
  var sum = numbers.reduce(function (acc, number, index) {
    return acc + number * weights[index];
  }, 0);
  console.log(sum);
  var weightSum = weights.reduce(function (acc, weight) {
    return acc + weight;
  }, 0);
  return sum / weightSum;
};
var numbers = [7, 9, 3];
var weights = [2, 5, 1];
var result = weightedAverage(numbers, weights);
console.log(result);

// Median
var median = function median() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
  });
  var middleIndex = Math.floor(sortedNumbers.length / 2);
  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  } else {
    return sortedNumbers[middleIndex];
  }
};
console.log(median(2, 4, 5, 7, 42, 99));
console.log(median(15, 14, 8, 7, 3));

// Mode
var mode = function mode() {
  var frequencyMap = new Map();
  var maxFrequency = 0;
  var modeValue;
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {
    var num = _numbers[_i];
    var frequency = (frequencyMap.get(num) || 0) + 1;
    frequencyMap.set(num, frequency);
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      modeValue = num;
    }
  }
  return modeValue;
};
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));