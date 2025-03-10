import { BASE_URL } from "../constants/constants"

describe('Search for a empty keyword', () => {
  it('passes', () => {
    cy.visit(BASE_URL)
    cy.Search("")
    cy.get('.page-title').should('contain.text', `Resultados encontrados para: `)
  })
})