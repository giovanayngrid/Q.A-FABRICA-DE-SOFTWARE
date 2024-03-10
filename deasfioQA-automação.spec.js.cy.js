describe('todo.spec.js', () => {
  it('criar uma conta', () => {
    cy.visit('http://seubarriga.wcaquino.me/login')

    cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(2)').click();

    cy.get('body > nav')
    cy.get('body > div.jumbotron.col-lg-4 > form > div:nth-child(1)')

    cy.get('#nome').type('maria')
    cy.get('#email').type('mariak@gmail.com')
    cy.get('#senha').type('1234')
    cy.get('.btn').click()

    cy.get('.nav > :nth-child(1) > a').click()
    cy.get('#email').type('mariak@gmail.com')
    cy.get('#senha').type('1234')
    cy.get('.btn').click()

    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#nome').type('Julião marinho')
    cy.get('.btn').click()

    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#nome').type('Gil Bala')
    cy.get('.btn').click()

    cy.get(':nth-child(3) > a').click()
    cy.get('#tipo').select('Receita')
    cy.get('#data_transacao').type('09/03/2024')
    cy.get('#data_pagamento').type('08/03/2024')
    cy.get('#descricao').type('pago no pix')
    cy.get('#interessado').type('casa 28')
    cy.get('#valor').type('2.000')
    cy.get('#conta').select('Gil Bala')
    cy.get('#status_pago').click()
    cy.get('.btn').click()

    cy.get(':nth-child(3) > a').click()
    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('05/03/2024')
    cy.get('#data_pagamento').type('02/03/2024')
    cy.get('#descricao').type('vai atrasar o pagamento para dia 40')
    cy.get('#interessado').type('casa 22')
    cy.get('#valor').type('0.0')
    cy.get('#conta').select('Julião marinho')
    cy.get('#status_pendente').click()
    cy.get('.btn').click()

    cy.get(':nth-child(4) > a').click()
    cy.get('#mes').select('Março')
    cy.get('#ano').select('2024')
    cy.get('.btn').click()
    cy.get(':nth-child(2) > :nth-child(6) > a > .glyphicon').click()
    cy.get('.nav > :nth-child(1) > a').click()

    cy.get(':nth-child(5) > a').click()









  })
})