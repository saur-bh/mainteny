/// <reference types="cypress" />

describe("REST API Test with Cypress", () => {
  it("API TEST - Validate Status Code", () => {
    cy.request({
      method: "POST",
      url: "https://staging.mainteny.com/api/sessions/login",
      failOnStatusCode: false,
      body: { username: "andreas@finch.com", password: "Andreas@1234" },
    }).as("mainteny");
    cy.get("@mainteny").its("status").should("equal", 200);
  });

  it("cy.request() with query parameters", () => {
    // will execute request
    // ?serviceCompanyI0&pageSize=50&orderBy=CREATED_TIME&order=ASC
    cy.request({
      url: "https://staging.mainteny.com/api/serviceOrders",
      auth: {
        bearer: "5239b677858a4e20bdb6ff598aec4c9a",
      },
      qs: {
        serviceCompanyId: "9d85be2d-ceb9-4b19-a350-9f512b4b57e4",
        query: "",
        status: "INIT",
        status: "READY_TO_SCHEDULE",
        start: "2021-02-07T11:51:48.692Z",
        end: "2023-02-07T11:51:48.692Z",
        pageIndex: 0,
        pageSize: 50,
        orderBy: "CREATED_TIME",
        order: "ASC",
      },
    })
      .its("body")
      .should("contain", {
        number: "MT-0004027",
        externalID: "system",
      });
  });
});
