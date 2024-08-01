![Logo](https://tdlschool.com/static/assets/logo.svg)

# Summer School 2024

# Cypress&Javascript project

This repository contains end-to-end testing (E2E testing) of online web store. Test checks functionalities of Sign in, Add a product to cart, Fill checkout page and Log out pages/processes.

## Environment

-   **Browser:** Safari version 17.5 (19618.2.12.11.6)

-   **Device:** MacBook Pro 2020, macOS: Sonoma 14.5

## Installation

Clone the project

```
  git clone git@github.com:KhumoyunR/Khumoyun_SummerSchool.git
```

Go to the project directory

```
  cd .../my-project
```

Install dependencies

```
  npm install
```

Install Cypress

```
  npm install cypress
```

## Environment Variables

Before running this project, you will need to sign up in [Webstore](https://coe-webstore.tdlbox.com/sign-up) and add the registered **email** and **password** in corresponding lines in **cypress.config.js** file

## Running Tests

To run tests, run the following command:

```
  npm run cypress-open
```

## Running Tests in headless mode

To run all tests in headless mode, run the following command:
ßß

```
  npm run cypress-run
```

## Clean up the previous reports' file

To clean the previous report folder, run the following command:
ßß

```
  npm run reports-cleanup
```

## Plugin

[Prettier](https://prettier.io/) is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

```
  npm install prettier
```

To run the plugin, run the following command:

```
  npm run format
```

## Lessons Learned

During the development of this project, I learned new things about OOP, basics of the Cypress, formulate correct selectors.

## 🛠 Skills

Javascript, Cypress, HTML, Jira, Google DevTools.

## Author

-   [@KhumoyunR](https://github.com/KhumoyunR)

## Reveiwer

-   [@rudolfs-blaumanis](https://github.com/rudolfs-blaumanis)

## 🔗 LinkenId

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/khumoyun-rakhimov-711b4a234)

## Feedback

If you have any feedback, please reach out to us at huma.rahimov@gmail.com

## Acknowledgements

-   [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)
-   [Save the URL and re-use in the next scenario](https://www.stevenhicks.me/blog/2020/02/working-with-variables-in-cypress-tests/)
-   [Prettier Config file](https://prettier.io/docs/en/configuration.html)
-   [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
