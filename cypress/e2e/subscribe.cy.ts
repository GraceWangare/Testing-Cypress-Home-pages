describe('home page', () => {

    beforeEach(() =>{
      cy.visit('http://localhost:3000/')
  
    })

    context('Hero section',()=>{
        it(' verify that the user can subscribe to newsletter', () => {
            cy.getByData("email-input").type("g2401k@gmail.com")
            cy.getByData("submit-button").click()
            cy.getByData("success-message").should('exist')
            
            
          
          
        })
        it(' verify that the user can not subscribe with invalid email', () => {
            cy.get('#email-address').type("gk")
            cy.get('.mt-4 > .mt-3 > .w-full').click()
            cy.get('[data-test="success-message"]').should('not.exist')
          
          
        })
        it(' verify that the user can not subscribe twice with same email', () => {
            cy.getByData("email-input").type("john@example.com")
            cy.getByData("submit-button").click()
            cy.getByData("server-error-message").should('exist')
          
        })

    })

     
  
    context(' Courses section', () => {
        
        it(' verify that  Testing your first Next.js Apllication', () => {
            cy.getByData("course-0").find("a").eq(3).click()
            cy.location("pathname").should("eq", "/testing-your-first-application")

        })

        it(' verifyTesting foundations page', () => {
            cy.getByData("course-1").find("a").eq(3).click()
            cy.location("pathname").should("eq", "/testing-foundations")
        
        })

        it.only(' verify Testing fundamentals page', () => {
            cy.getByData("course-2").find("a").eq(3).click()
            cy.location("pathname").should("eq", "/cypress-fundamentals")
        })
      
      
    })
    
    
  })
  