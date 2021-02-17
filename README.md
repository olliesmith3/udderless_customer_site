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
      - Allow customers to manage their orders.
      - If a customer is not withing the postcode range then allow them to register interest.
      - Send confirmation emails.
      - Accessible to blind and deaf.

### Adding a react front end

- One part of this involved adding axios, a library that allows you to make API requests. This will help to turn the app into two apps, a rails API with a React front end

### Current issues

- authorisation of interests - to avoid multiple sign ups from the same customer need to check database that email or tel hasnt been registered before.