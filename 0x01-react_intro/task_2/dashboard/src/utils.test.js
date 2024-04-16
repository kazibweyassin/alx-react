import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
import { getLatestNotification } from './utils';
describe('getFullYear', () => {
    it('should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toEqual(currentYear);
    });
});

describe('getFooterCopy', () => {
    it('should return the correct string when the argument is true', () => {
        const isIndex = true;
        const expected = 'Copywright © 2022 - All rights reserved';
        expect(getFooterCopy(isIndex)).toEqual(expected);
    });
});

describe('getLatestNotification', () => {
    it('should return the latest notification string', () => {
        const expected = 'This is the latest notification';
        expect(getLatestNotification()).toEqual(expected);
    });
});

