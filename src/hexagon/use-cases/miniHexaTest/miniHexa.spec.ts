import MiniHexa from './miniHexa';

describe('First test hexa', () => {
    it('should return Hello', () => {
        const hexa = new MiniHexa();
    
        expect(hexa.test()).toBe('Hello');
    })
})