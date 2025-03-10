import { BASE_URL, KEYWORD_WITH_RESULT } from "../constants/constants"

describe('template spec', () => {
  it('passes', () => {
    cy.visit(BASE_URL)
    cy.Search(KEYWORD_WITH_RESULT)
    cy.get('.page-title').should('contain.text', `Resultados encontrados para: ${KEYWORD_WITH_RESULT}`)
  })
})