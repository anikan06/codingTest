# NewTestCode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## WORKING DEMO
working demo for this project is [WORKING DEMO](https://coding-test-phi.vercel.app/)

## REQUIREMENTS
In an Angular application, version 17, create 3 components:
1.	A page component called ‘home’, that has 4 buttons
2.	A child component of home that is an Angular material table called fruits table
3.	A child component of home that is an Angular material table called vegetables table

Oriented like this:
 

The tables should not be populated with data on page load but when you click ‘Data 1’ button it should populate the first table with mock hard coded data that dynamically creates the table headers and cells. ‘Data 2’ button should do the same for table 2 with different set of mock data. These buttons should invoke a service file that has Behavior subjects or subjects for each mock data, which is subscribed to in the home component and passed to its children components asynchronously. (The data can be of anything as long as the tables are created dynamically).
The ‘Table 1’ button when click need to change the table from the standard expanded view to something collapsed like this:
 
Button ‘Table 2’ will do the same to the second table.
When clicking on the ‘Fruits’ collapsed table, the full expanded table should come back into view. Same should happen on table 2 (‘Vegetables’).



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
