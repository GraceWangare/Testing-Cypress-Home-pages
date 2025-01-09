describe('home page', () => {

    beforeEach(() =>{
      cy.visit('http://localhost:3000/')
      
    })
    
    it('verify firsdt lesson',() =>{
        cy.getByData("course-0").find("a").eq(3).click()
        cy.getByData("next-lesson-button").click()
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").contains("Complete Course")
        
    })
    

  
    
  })
  