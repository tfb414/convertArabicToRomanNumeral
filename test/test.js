describe('convertArabicToRomanNumeral', function () {
    it('Should throw error "Error: Roman Numerals cannot be negative" when passing in a negative number', function () {
        expect(function() {convertArabicToRomanNumeral(-33)}).toThrow("Error: Roman Numerals cannot be negative");
    });
    it('Should throw error "Error: Cannot convert numbers greater than 3999"; when passing in a number greater than 3999', function () {
        expect(function() {convertArabicToRomanNumeral(4123)}).toThrow("Error: Cannot convert numbers greater than 3999");
    });
    it('Passing in numbers greater than 999 should return an answer that begins with "M"', function () {
        expect(convertArabicToRomanNumeral(1000)).toEqual("M");
    });
    it('Passing in a number between 900-999 should return an answer that begins with "CM" ', function () {
        expect(convertArabicToRomanNumeral(900)).toEqual("CM");
    });
    it('Passing in a number between 500-899 should return an answer that begins with "D"', function () {
        expect(convertArabicToRomanNumeral(500)).toEqual("D");
    });
    it('Passing in a number between 400-499 should return an answer that begins with "CD"', function () {
        expect(convertArabicToRomanNumeral(400)).toEqual("CD");
    });
    it('Passing in a number between 100-399 should return an answer that begins with "C"', function () {
        expect(convertArabicToRomanNumeral(100)).toEqual("C");
    });
    it('Passing in a number between 90-99 should return an answer that begins with "CD"', function () {
        expect(convertArabicToRomanNumeral(90)).toEqual("XC");
    });
    it('Passing in a number between 50-89 should return an answer that begins with "L"', function () {
        expect(convertArabicToRomanNumeral(50)).toEqual("L");
    });
    it('Passing in a number between 40-49 should return an answer that begins with "XL"', function () {
        expect(convertArabicToRomanNumeral(40)).toEqual("XL");
    });
    it('Passing in a number between 10-39 should return an answer that begins with "X"', function () {
        expect(convertArabicToRomanNumeral(10)).toEqual("X");
    });
    it('Passing in a number that ends with a 9 should return an answer that ends with "IX"', function () {
        expect(convertArabicToRomanNumeral(9)).toEqual("IX");
    });
    it('Passing in a number that ends with a 5 should return an answer that ends with "V"', function () {
        expect(convertArabicToRomanNumeral(5)).toEqual("V");
    });
    it('Passing in a number that ends with a 4 should return an answer that ends with "IV"', function () {
        expect(convertArabicToRomanNumeral(4)).toEqual("IV");
    });
    it('Passing in a number that ends with a 1 should return an answer that ends with "I"', function () {
        expect(convertArabicToRomanNumeral(1)).toEqual("I");
    });
    it('should return multiples of the same value when it is still the largest value that can be added', function () {
        expect(convertArabicToRomanNumeral(3000)).toEqual("MMM");
    });
    it('should combine multiple roman numerals together into a string when any acceptable value is passed in', function () {
        expect(convertArabicToRomanNumeral(2894)).toEqual("MMDCCCXCIV");
    });



});

