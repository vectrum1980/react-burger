describe('service is available', function () {
    it('should be available on localhost:3000', function () {
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

        cy.get('[data-cy="down"]')
            .children().should(($children) => {
                expect($children).to.have.length(1);
            });

        dragAndDrop(1)

        cy.get('[data-cy="up"]')
            .children().should(($children) => {
                expect($children).to.have.length(1);
            });

        cy.get('[data-cy="down"]')
            .children().should(($children) => {
                expect($children).to.have.length(1);
            });

        dragAndDrop(2)
        dragAndDrop(3)

        cy.get('[data-cy="ingredients-container"]')
            .children().should(($children) => {
                expect($children).to.have.length(2);
            });
    });
}); 