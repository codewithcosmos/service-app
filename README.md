# Home Services App

A full-stack application for managing home services, including user and admin functionality, quotes, invoices, and more. This application provides services such as plumbing, building, electrical work, carpentry, gardening, and home support.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Usage](#frontend-usage)
- [Troubleshooting](#troubleshooting)

## Project Description
The Home Services App is designed to connect users with various home service providers. Users can request quotes, view available services, and manage invoices. Admins can manage services, view quotes, and handle invoices from a dedicated dashboard.

## Features
- User authentication and authorization
- Service listing and management
- Quote requests and management
- Invoice generation and management
- Separate views for users and admins
- API services for PDF generation
- Email notifications

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- React.js
- Redux
- Webpack
- Axios
- JWT for authentication
- EJS for server-side views
- Nodemailer for email notifications

## Services Offered
- Plumber
- Builder
- Electrician
- Carpenter
- Gardener
- Home Support

- ## Project Structure Image
![Service-Structure](https://github.com/codewithcosmos/store-app/assets/163349688/e6a7686d-dd4d-4ab3-a53f-729be83b8a13)

## Project Structure diagram
project-root/
│
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── images/
│   │
│   └── src/
│       ├── components/
│       │   ├── LoginForm.js
│       │   ├── SignupForm.js
│       │   ├── Dashboard.js
│       │   ├── ProductList.js
│       │   ├── Cart.js
│       │   ├── QuoteForm.js
│       │   ├── InvoiceForm.js
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       ├── api.js
│       ├── App.test.js
│       ├── serviceWorker.js
│       ├── setupTests.js
│
└── server/
    ├── controllers/
    │   ├── auth.js
    │   ├── product.js
    │   ├── cart.js
    │   ├── admin.js
    │   ├── quote.js
    │   ├── invoice.js
    ├── models/
    │   ├── Product.js
    │   ├── Cart.js
    │   ├── User.js
    │   ├── Quote.js
    │   └── Invoice.js
    ├── routes/
    │   ├── products.js
    │   ├── cartRoutes.js
    │   ├── adminRoutes.js
    │   ├── userRoutes.js
    │   ├── quoteRoutes.js
    │   └── invoiceRoutes.js
    ├── services/
    │   ├── pdfService.js
    │   └── apiService.js
    ├── views/
    │   ├── layout.ejs
    │   ├── index.ejs
    │   ├── products.ejs
    │   ├── cart.ejs
    │   ├── quote.ejs
    │   ├── invoice.ejs
    │   ├── partials/
    │   │   ├── navbar.ejs
    │   │   └── footer.ejs
    │   ├── admin/
    │   │   ├── login.ejs
    │   │   ├── dashboard.ejs
    │   │   ├── products.ejs
    │   │   ├── orders.ejs
    ├── app.js
    ├── db.js
    ├── seedProducts.js
    ├── .env
    ├── .gitignore
    ├── README.md
    └── webpack.config.js
