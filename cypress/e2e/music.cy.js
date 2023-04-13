describe('Music Library', () => {
  it('visits site', () => {
    // Testing Adding a song
    cy.visit('http://localhost:3000')
    cy.get("[name=title]").type("Sweetness").should('have.value', 'Sweetness')
    cy.get("[name=artist").type("Jimmy Eat World").should('have.value', 'Jimmy Eat World')
    cy.get("[name=album").type("Bleed American").should('have.value', 'Bleed American')
    cy.get("[name=genre").type("Punk Rock").should('have.value', "Punk Rock")
    cy.get("[name=release_date").type("2002-01-01").should("have.value", "2002-01-01")
    cy.get('[name=running_time').type("200").should("have.value", "200")
    // cy.get("button").contains("Add Song").click()
    cy.get("[name=search]").type("Sweetness")
    cy.get("button").contains("Search").click().wait(2000)
    cy.get("[data-cy=title]").contains("Sweetness").invoke("text").should("equals","Sweetness")
    cy.get("button").contains("Delete").click()
      cy.window().then(win=> {
        cy.stub(win, "prompt").returns("11")
        cy.get("#prompt-button").click()
      })
    
  })
})