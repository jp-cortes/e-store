# E-Store - An E-Commerce Web Application

Welcome to E-Store, an E-Commerce Web application built with Next.js and powered by a **PostgreSQL** database. This project provides a great user experience, where products are categorized, and users can navigate through a variety of features, including a shopping cart, payment options with Stripe and PayPal, and order tracking.

# Project Repository
The Backend source code can be found at https://github.com/jp-cortes/express-rest-api.

# Features
* User authentication.
* Protected routes.
* User-friendly interface for an excellent shopping experience.
* Products are categorized for easy navigation and discovery.
* Shopping cart functionality to enable users to add and manage their selected items.
* Secure payment options through Stripe and PayPal integration.
* Order tracking allows users to see order details and the current status of their orders.
* Admin dashboard for managing products (CRUD operations) and monitoring the store.

# Installation
To set up the E-Store project locally, follow these steps:

* Clone the repository 

```git@github.com:jp-cortes/e-store.git```
* Ensure you have Node.js and npm installed on your system.
* Navigate to the project's root directory in the terminal.
* Install the required dependencies by running:

```npm install```

* Set up the PostgreSQL database and update the database connection configurations in the project accordingly.
Obtain API keys for Stripe and PayPal and integrate them into the application for payment processing.

# Usage
To run the development server, use the following command:

```npm run dev```

* Access the application in your web browser by visiting http://localhost:3000.

* Users can browse products, add them to their shopping cart, proceed to checkout, and choose payment options (Stripe or PayPal) for a seamless shopping experience.

* Admins can access the admin dashboard at http://localhost:3000/dashboard, where they can perform CRUD operations on products.

# Credentials
You might be able to create your own user or you can test the application with the following credentials
## Customer: 
* Email: demouser01@mail.com
* Password: 123456789
## Admin:
* Not yet available
* Email: demoadmin@mail.com
* Password: Admin123

# Contributing
We welcome contributions to E-Store! If you find any bugs or have suggestions for new features, please feel free to open an issue or submit a pull request.



# License
E-Store is licensed under the MIT License, which allows you to use, modify, and distribute the code freely. See the LICENSE file for more details.
