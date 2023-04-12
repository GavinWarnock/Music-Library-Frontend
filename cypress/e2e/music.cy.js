describe('Music Library', () => {
  it('visits site', () => {
    cy.visit('http://localhost:3000')
    cy.get("[name='title']").type("Sweetness").should('have.value', 'Sweetness')
    cy.get("[name=artist").type("Jimmy Eat World").should('have.value', 'Jimmy Eat World')
    cy.get("[name=album").type("Bleed American").should('have.value', 'Bleed American')
    cy.get("[name=genre").type("Punk Rock").should('have.value', "Punk Rock")
    cy.get("[name=release_date").type("2002-01-01").should("have.value", "2002-01-01")
    cy.get('[name=running_time').type("200").should("have.value", "200")
    cy.get("button").contains("Add Song").click()
  })
})