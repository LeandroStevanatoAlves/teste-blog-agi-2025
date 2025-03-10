import { BASE_URL, KEYWORD_WITHOUT_RESULT } from "../constants/constants"

describe('Search for a keyword that returns no results', () => {
  it('passes', () => {
    cy.visit(BASE_URL)
    cy.Search(KEYWORD_WITHOUT_RESULT)
    cy.get('.page-title').should('contain.text', `Resultados encontrados para: ${KEYWORD_WITHOUT_RESULT}`)
    cy.get('.page-content > p').should('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
  })
})