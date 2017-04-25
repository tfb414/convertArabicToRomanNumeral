function convertArabicToRomanNumeral(num) {
    this.num = num;
    if (negativeNumber(num)) {
        throw "Error: Roman Numerals cannot be negative";
    }
    if (greaterThan3999(num)) {
        throw "Error: Cannot convert numbers greater than 3999";
    }
    var arrayOfRomanNumeralsAndArabic = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];
    return arrayOfRomanNumeralsAndArabic.map(largestValueLessThanNum).join("");

}
function negativeNumber(num) {
    return num < 0;
}

function greaterThan3999(num) {
    return num >= 4000;
}

var returnStringOfRomanNumerals = function (romanNumeralArabicNumberPair) {
    var stringOfRomanNumerals = "";
    while (numIsLessThanOrEqualToTheValueTested(romanNumeralArabicNumberPair)) {
        this.num -= romanNumeralArabicNumberPair[1];
        stringOfRomanNumerals += romanNumeralArabicNumberPair[0];
    }
    return stringOfRomanNumerals;
}

function numIsLessThanOrEqualToTheValueTested(arrayOfRomanNumeralsAndArabic) {
    return this.num >= arrayOfRomanNumeralsAndArabic[1];
}

var largestValueLessThanNum = function (romanNumeralArabicNumberPair) {
    return returnStringOfRomanNumerals(romanNumeralArabicNumberPair);
}

convertArabicToRomanNumeral(900);
