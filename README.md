# Project Title

Ecommerce-React or E-Marketing

---

## Project Description

---

This is a basic implementation of a throw out which will scrap primarily starting from the following url:

https://sane-react-ecommerce.netlify.app/

It might take time upto ~= 15 to 20 minutes for the total scrapping to be completed depending on network speed. So, I request you to be patient after running the script and you can keep an eye on the console to have a rough idea about the progress of the process.

---

## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environment.

External packages used:

    "braintree": "^3.13.0",
    "mailgun.js": "^8.2.1",
    "braintree-web-drop-in-react": "^1.2.1",
    "web-vitals": "^2.1.4"

---

## Install

    $ git clone https://github.com/ZIAN786/ecommerce-react
    $ cd ecommerce-react
    $ npm install

## Running the project

    $ nodemon index.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Function Description:

<br/><br/>

> ### shop (page) -->
>
> It fetches item urls + item ids from list page to buyers.

> ### categoriesItem (page) -->
>
> Shows how many category related for the provided initial url

> ### cartItem (page) -->
>
> It shows the actual description and parses into the format: item id, title, price, quantity.

<br/><br/>

## Following are thoughts or questions/answers:

1. Used Try-Catch block where seemed necessary. Can use it in more places to making the error handling process smoother.

2. I have basic ideas about Github Actions as CI/CD tool. But can learn more jenkins or other similar tools if needed.

3. The performance can be improved by adding some waiting function.

4. We can expose this scrapper as an API using express.js along with other authentication/authorization systems and build a Front-End using ReactJS or VueJS and deploy it in a server and make it easily accessible for use.

5. Codes can be more cleaner by making it more modular.
