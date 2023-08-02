const expect = chai.expect
const assert = chai.assert

describe('Week 6 Assignment Tests:', () => {
    describe('Card Class Tests:', ()=> {
        it('should create a card with suit, value, and face properties, and that they come out to', () => {
            const card = new Card('h',2,'3')
            expect(card).to.have.property
            ('suit').and.to.equal('h')
            expect(card).to.have.property
            ('value').and.to.equal(2)
            expect(card).to.have.property
            ('face').and.to.equal('3') 
        }); 
    });
});

describe('Player Class Test:', () => {
    it('should create a player with a name and an empty hand', () => {
        const player = new Player(1)
        console.log(player)
        expect(player).to.have.property('name').and.to.equal('Player 1')
        expect(player).to.have.property('hand').and.to.be.an('array').and.to.be.empty
    });
});