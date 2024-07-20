/// < reference types = 'cypress' / >

describe('Testando as funcionalidades', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })


    it('Adicionando a Inclusão', () => {
        cy.get('input[type="text"]').type('Matheus Silva')
        cy.get('input[type="email"]').type('matheussilva27@gmail.com')
        cy.get('input[type="tel"]').type('19945068752')
        cy.get('button[type="submit"]').click()
        cy.screenshot('Inclusão')
    })

    it('Editando a Informação da Lista', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click();
        cy.get('input[type="text"]').clear().type('Fábio Cristal')
        cy.get('input[type="email"]').clear().type('fabio_cristal21@gmail.com')
        cy.get('input[type="tel"]').type('11984523672')
        cy.get('.alterar').click()
        cy.screenshot('Edição')
    })

    it('Excluindo a Informação da Lista', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click();
        cy.screenshot('Exclusão')
    })
})