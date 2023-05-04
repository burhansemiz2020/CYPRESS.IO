describe('Basic commands', () => {
    it('Basic commands cy.visit using', () => {
        cy.visit("/")//base url configde tanimlandiysa
        cy.visit("/commands")//base url tanimlandiysa configde tanimlandiysa. 
        //eger command a gidilecekse slashtan sonrasina command yazilir
        cy.visit("https://example.cypress.io/comma")//baseUrl tanimlanmadiysa yani config te yoksa
        cy.visit({
            url: "https://example.cypress.io", //baseUrl tanimlanmadiysa
            method:'GET'
        })
    });

    //baslik dogrulama
    it('Temel komutlar cy.title kullanimi', () =>{
        cy.title().should('eq',"cypress.io")//title tam esitlik olursa dogrular
        cy.title().should('include',"cypress")//title icinde cypress geciyorsa dogrular
        cy.title().should('contain',"cypress")//title icinde cypress geciyorsa dogrular
    });

    it('Temel komutlar cy.url ve cy.location Kullanimi',()=>{
    
    }); 
});