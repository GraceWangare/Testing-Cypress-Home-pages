describe('home page', () => {

  beforeEach(() =>{
    cy.visit('http://localhost:3000/')

  })
  it(' verify the Hi elemnt contains the correct text', () => {
    
    cy.get('[data-test="hero-heading"]')
      .should("exist")
      .contains('Testing Next.js Applications with Cypress')
  })

  it.only(' verify the features on the homepage are correct E1', () => {
    
    cy.get('dt').eq(0).contains("4 Courses")
    cy.get('dt').eq(1).contains("25+ Lessons")
   
  })
// add a coment
  
})