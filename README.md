### Udderless
![Logo](./client/src/assets/images/TM-logo-final-1.gif?raw=true "Logo")
### What is udderless?

Udderless is a new company that produces and delivers organic oat milk to customers in SW London.

This project is made up of two parts: 
    - a staff website to manage customers, orders and deliveries
    - a customer facing site that lets people manage their orders and register interest

### Requirements 

  - [Staff Site - Click Here](https://github.com/olliesmith3/udderless)
      - Log in to website as staff (authenticated)
      - Connect to a database and store customer data and order data.
      - Search for customers and orders.
      - print off an order form for each delivery day.
      
  - Customer site
    - v1
        - A place for customers to visit, learn a about the company and register their interest.
    - v2 - After launch
        - Allow customers to manage their orders.
        - If a customer is not within the postcode range then allow them to register interest.
        - Send confirmation emails.
        - Accessible for screen readers.

### Choosing a tech stack

- I wanted to use a React frontend for this project
    - Give me a better understanding of api requests
    - Very popular framework which is important to learn
    - Possibility of adding a React Native client for running on mobile devices naitvely.

- One part of this involved adding axios, a library that allows you to make API requests.

- React testing library - ability to write both unit tests and integration tests with one technology.

- Rails API and Postgres database
    - Already understand these technologies so will avoid having too many moving parts.

### How to use

Clone this repository and install the dependencies by running bundle and yarn.
```
bundle install
cd client 
yarn
```
Set up the database:
```
rails db:setup
rails db:migrate
```
Start the server and the client on seperate ports. in the first terminal:
```
rails s -p 3001
```
And in a new terminal:
```
cd client
yarn start
```
Now open up localhost:3000 in your browser and begin using the customer portal v1:

![HomePage](./public/README-images/homepage.png?raw=true "Home Page")
This page is simply for customers to learn a bit more about the company

![Register Interest Form](./public/README-images/register-interest-form.png?raw=true "Register Interest Form")
This form is where potential customers can register their interest. First name and postcode are compulsory fields whereas it is only compulsory for one of either email or telephone to be filled.

![Thank You Message](./public/README-images/thank-you-message.png?raw=true "Thank You Message")
The thank you message presented is tailored to the customer's name and postcode.

In order to run the tests:
```
rails test
cd client
yarn test
```
### What I will be working on next

- Authorisation of interests - to avoid multiple sign ups from the same customer need to check database that email or tel hasnt been registered before.

- Completing ARIA labels and making accessible for screen readers

