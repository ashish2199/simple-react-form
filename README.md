# Simple react form

Created a simple form using redux as state management library for managing forms data.

Features

- Allows you to create multiple forms without the need of manually controlling their values and validations.
    - Support for creating multiple forms using `<Form>` and `<Field>` components.
    - Validation and state handled through redux.

- Support for validations using attributes to html input elements.
    - Hightlight of fields containing error message.
    - Field level validation on field value change.
    - Form level validation on submit.
  
- All forms data can be accessed from the central store.

- Support for loading initial form data using `initialValue` prop of `<Form>` component.

## Steps to run

1. Open terminal, navigate to project folder.
2. `npm install`
3. Run `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Screenshots

![img](https://i.imgur.com/uRBCLx4.png)

![img](https://i.imgur.com/DtdVuBd.png)

![img](https://i.imgur.com/giV3NkD.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
