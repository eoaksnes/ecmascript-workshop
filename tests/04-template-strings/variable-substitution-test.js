import log from '../../src/04-template-strings/variable-substitution';

describe.skip('04-template-strings - variable substitution', () => {

    it('variable substitution works', () => {
        expect(log('info', '15:30', 'Some event')).to.equal('[INFO] [15:30] Some event');
    });

});
