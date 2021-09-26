const rgbToHexColor = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('correct data', () => {
        let color1 = 112;
        let color2 = 112;
        let color3 = 112;
        let expectedResult = '#707070';

        let actualResult = rgbToHexColor(color1, color2, color3);

        assert.equal(actualResult, expectedResult);
    });

    it('incorrect colors', () => {
        let color1 = 112;
        let color2 = 112;
        let color3 = 112;
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(-color1, color2, color3);
        let actualResult2 = rgbToHexColor(color1, -color2, color3);
        let actualResult3 = rgbToHexColor(color1, color2, -color3);

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, expectedResult);
    });

    it('incorrect data', () => {
        let color1 = 112;
        let color2 = 112;
        let color3 = 112;
        let str = '112';
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(str, color2, color3);
        let actualResult2 = rgbToHexColor(color1, str, color3);
        let actualResult3 = rgbToHexColor(color1, color2, str);

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, expectedResult);
    });

    it('empty arg', () => {
        let color1 = 112;
        let color2 = 112;
        let color3 = 112;
        let empty = undefined;
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(empty, color2, color3);
        let actualResult2 = rgbToHexColor(color1, empty, color3);
        let actualResult3 = rgbToHexColor(color1, color2, empty);

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, expectedResult);
    });

    it('zeroes', () => {
        let color1 = 0;
        let color2 = 0;
        let color3 = 0;
        let expectedResult = '#000000';

        let actualResult = rgbToHexColor(color1, color2, color3);

        assert.equal(actualResult, expectedResult);
    });

    it('256', () => {
        let color1 = 0;
        let color2 = 0;
        let color3 = 0;
        let bigNum = 256;
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(bigNum, color2, color3);
        let actualResult2 = rgbToHexColor(color1, bigNum, color3);
        let actualResult3 = rgbToHexColor(color1, color2, bigNum);

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, expectedResult);
    });

    it('more params', () => {
        let color1 = 0;

        let expectedResult = '#000000';

        let actualResult = rgbToHexColor(color1, color1, color1, color1);

        assert.equal(actualResult, expectedResult);
    });

    it('saturation BS test that is not included in the description', () => {
        let color1 = 255;
        let color2 = 158;
        let color3 = 170;

        let expectedResult = '#FF9EAA';

        let actualResult = rgbToHexColor(color1, color2, color3);

        assert.equal(actualResult, expectedResult);
    });
});