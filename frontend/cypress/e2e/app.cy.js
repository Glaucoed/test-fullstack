describe("Pagina Inicial", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
  });

  it("Verifica se contém o Titulo de Painel de Clientes", () => {
    cy.get("h1").contains("Painel de clientes");
  });

  it("Verifica se chamado a rota de listagem de clientes, com o status 200", () => {
    cy.intercept("GET", "http://localhost:3001/users").as("users");
    cy.wait("@users").then((interception) => {
      expect(interception).to.have.property("response");
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it('Verifica se há o botão de "Novo Cliente"', () => {
    cy.get("a").contains("Novo cliente");
  });

  it('Verifica se ao clicar no botão de "Novo Cliente" é redirecionado para a página de cadastro de cliente', () => {
    cy.get("a").contains("Novo cliente").click();
    cy.url().should("include", "/cadastro");
  });

  describe("Pagina de Cadastro", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("http://localhost:3000/cadastro");
    });

    it("Verifica se contém o Titulo de Novo usuário", () => {
      cy.get("h2").contains("Novo usuário");
    });

    it('Verifica se há o botão de "Criar"', () => {
      cy.get("button").contains("Criar");
    });

    it('Verifica se há o botão de "Voltar"', () => {
      cy.get("a").contains("Voltar");
    });

    it("Verifica se contém 4 inputs e 1 select", () => {
      cy.get("input").should("have.length", 4);
      cy.get("select").should("have.length", 1);
    });
  });
});

describe("Pagina de Update", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
  });

  it('Verifica se ao clicar no botão de "Editar" é redirecionado para a página de update de cliente e mostrado as informações do client', () => {
    cy.intercept("GET", "http://localhost:3001/users").as("users");
    cy.wait("@users").then((interception) => {
      expect(interception).to.have.property("response");
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.get("a").contains("Editar").eq(0).click();

    cy.get("input").eq(0).should("have.value", "John Doe");
  });

  it("Verifica contém o Botão Atualizar na página ", () => {
    cy.intercept("GET", "http://localhost:3001/users").as("users");
    cy.wait("@users").then((interception) => {
      expect(interception).to.have.property("response");
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.get("a").contains("Editar").eq(0).click();
    cy.get("button").contains("Atualizar");
  });
});
