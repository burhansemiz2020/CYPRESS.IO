describe('Basic commands', () => {
    it.only('Basic commands cy.visit using', () => {
        cy.visit("/")//base url configde tanimlandiysa
        cy.visit("/commands")//base url tanimlandiysa configde tanimlandiysa. 
        //eger command a gidilecekse slashtan sonrasina command yazilir
        cy.visit("https://example.cypress.io/comma")//baseUrl tanimlanmadiysa yani config te yoksa
        cy.visit({
            url: "https://example.cypress.io/", //baseUrl tanimlanmadiysa
            method:'GET'
        })
    });

    //baslik dogrulama
    it('Temel komutlar cy.title kullanimi', () =>{
        cy.title().should('eq',"cypress.io")//title tam esitlik olursa dogrular
        cy.title().should('include',"cypress")//title icinde cypress geciyorsa dogrular
        cy.title().should('contain',"cypress")//title icinde cypress geciyorsa dogrular
    });
    //url  dogrulama
    it('Temel komutlar cy.url ve cy.location Kullanimi',()=>{
        cy.url().should('eq','http://example.cypress.io/commands')//url tam esitlik olursa dogrular
        cy.url().should('include','/commands')//url icerisinde commands gecmesi dogrulama icin yetrlidir

        cy.location('pathname').should('eq','/commands')//gidilen path in dogrulamasi yapiliyor
        cy.location('protocol').should('eq',"https")//gidilen protokolu dogrular
        cy.location('hostname').should('eq',"https://example.cypress.io/")//tam esitlikte dogrular
        cy.location('hostname').should('include',"cypress.io")//cypress.io icerisinde hostname dogrular
    
    }); 

    it('Temel komutlar cy.get kullanimi',()=>{
        cy.get('#button')//bu kullanim ile should veya click ile buttonu clikleyebiliriz
        cy.get('#button').as('deneme')//bu kullanim dan sonra cy.get('@deneme')
        cy.get('a[href="example.cypress.io"]')
        cy.get('.dropdown-menu-list')
        cy.get('div.button') //
        cy.get('ul li:first')
    });

    it('Temel komutlar cy.log kullanimi', () => {
        cy.log('Temel komutlar cy.log kullanimi')
        cy.log('be.visible')
        cy.log('Bir mesaj',['bir mesaj', 'iki mesaj', 'uc mesaj'])//output: Bir mesaj, [bir mesaj, iki mesaj, uc mesaj] 
    });

    
    
});