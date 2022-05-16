describe('make order', function () {
    before(function () {
        cy.visit('http://localhost:3000');
    });

    const dragAndDrop = (index) => {
        cy.get('[data-cy="ingredient"]').eq(index).trigger('dragstart');
        cy.get('[data-cy="drop-target"]').trigger('drop');
    };


    it('should drag and drop', function () {

        dragAndDrop(0);

        cy.get('[data-cy="up"]')
            .children().should(($children) => {
                expect($children).to.have.length(1);
            });       

        cy.get('button').contains("Оформить заказ").click();      

        cy.visit('http://localhost:3000/login');        

        cy.get('[name=email]').type('vectrum1980@yandex.ru');

        cy.get('[name=password]').type('fkbnfsd');

        cy.get('button').contains('Войти').click();
    });    
}); 