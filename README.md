# E-commerce app

---

## Technologies

A little bit of what's inside the project:

- **React js with Typescript and redux**

---

- ## Getting Started
      $ git clone https://github.com/Nabeegacryptocode/Nabeegacryptocode.github.io.git or you can download the zip file

##

---

## Install Dependencies and Run the app

    $ cd ecommerce-website
    $ npm install
    $ npm run start
    $ Navigate to `http://localhost:3000`

### Built with

- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - TypeScript
- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [React-Router](https://reactrouter.com/docs/en/v6/getting-started/overview/)- For Navigation
- [Stripe](https://stripe.com/) - For payments
- [Tailwind-Css](https://tailwindcss.com/) - For styling

### Folder Structure

- #### Components
  - AlertBar.tsx : This helps to show the items the user has added to the cart after clicking on the item
  - CheckoutItem: This displays the items when the user is going to checkout the form and also help to update each item
    -Error : shows the error message
    -Footer: shows the footer
    -Loader: displays a loading icon
    -NavBar: shows the navigation bar with the various links
  - Product Item : shows the product itself including the image, price, name and buttons to add to cart or checkout,
    -Success Modal : shows the modal after the user completes a payment
- ### Pages

  - Chekcout : the checkout page
  - Homepage
  - Login : login page
  - Shop: shop page
  - SingUp: signup page

- ### Store
  this folder is what does all the state management and actions that help the components and pages interact with each other. it uses redux actions, reducers,and types to make the components interact perfectly and avoid prop drilling. It contains: - actions : for all the various redux actions - types - reducers: which help dispatch the various actions in the store

for more info you can read the documentation from the redux website or watch these videos on youtube [react-redux](https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

- ### models

  contains the products and interfaces for the various components

- ### auth
  used to create protected routes
