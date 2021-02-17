### Udderless

![HomePage](./public/README-images/homepage.png?raw=true "Home Page")

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
    - v2
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

- Rails API and Postgres database
    - Already understand these technologies so will avoid having too many moving parts.

### Current issues

- authorisation of interests - to avoid multiple sign ups from the same customer need to check database that email or tel hasnt been registered before.