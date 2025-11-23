const testData = {
  signInHappyPath: {
    id: "TC012",
    description: "Successful user login",
    urlPath: "signin",
    pageText: "Sign In",
    username: "jhon",
    password: "Password@123",
    bankName: "Test Bank",
    routingNumber: "123456789",
    accountNumber: "123456789",
  },
  signInExceptions: [
    {
      id: "TC014",
      description:
        "Validate error message when the username is correct and the password is incorrect",
      urlPath: "signin",
      pageText: "Sign In",
      username: "jhon",
      password: "password@12",
      expectedText: "Username or password is invalid",
    },
    {
      id: "TC015",
      description:
        "Validate error message when the username is incorrect and the password is correct",
      urlPath: "signin",
      pageText: "Sign In",
      username: "jho",
      password: "password@123",
      expectedText: "Username or password is invalid",
    },
  ],
};

beforeEach(() => {
  cy.visit("/signin");
});

describe("Sign In: Happy Path", () => {
  it(`${testData.signInHappyPath.id} - ${testData.signInHappyPath.description}`, () => {
    cy.submitSignInForm(testData.signInHappyPath);
    cy.completeOnBoardingProcess(testData.signInHappyPath);
  });
});

describe("Sign In: Exceptions Scenarios", () => {
  testData.signInExceptions.forEach((testCase) => {
    it(`${testCase.id} - ${testCase.description}`, () => {
      cy.submitSignInForm(testCase);
      cy.contains(testCase.expectedText).should("be.visible");
    });
  });
});