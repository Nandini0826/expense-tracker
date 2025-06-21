# EXPENSE-TRACKER

*Master Your Money, Effortlessly and Confidently*

![last commit](https://img.shields.io/github/last-commit/Nandini0826/expense-tracker?style=flat-square)
![languages](https://img.shields.io/github/languages/count/Nandini0826/expense-tracker?style=flat-square)
---

**Built with the tools and technologies:**

![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express)
![JSON](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Dotenv](https://img.shields.io/badge/.ENV-yellow?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript)
![EJS](https://img.shields.io/badge/EJS-green?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation ](#installation)
  - [How to Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [Database Integration](#database-integration)

---

## Overview

Expense Tracker is a lightweight yet powerful web application built with Node.js, Express, and MongoDB to help users effortlessly manage their expenses. It offers a seamless interface for recording, editing, and deleting expense entries, making financial tracking straightforward and efficient.

### Why expense-tracker?

This project streamlines expense management by providing a solid backend architecture and an interactive user interface. The core features include:

- 🛠 **Express Server Setup**: Establishes a reliable server with middleware, routing, and static asset serving for smooth web interactions.

- 🗄 **MongoDB Integration**: Connects seamlessly to a MongoDB database using Mongoose, ensuring data persistence and integrity.

- 🔁 **RESTful CRUD Routes**: Facilitates creation, retrieval, updating, and deletion of expense records with clean API endpoints.

- 🎨 **Dynamic User Interface**: Offers an intuitive UI for managing expenses, including input forms and expense history display.

- 🧱 **Structured Data Models**: Defines clear schemas for expense data, supporting consistent and scalable data handling.


## Getting Started

### Prerequisites

- JavaScript
- Node.js
- MongoDB
- npm

### Installation & Frontend Setup

```bash
git clone https://github.com/Nandini0826/expense-tracker.git
cd expense-tracker
npm install
npm install express express-session flash ejs method-override mongoose dotenv


``` 

```bash
npm install express express-session flash ejs method-override mongoose dotenv

```
### How to Run

- Create a .env file in the root directory and add your MongoDB connection string:
```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/expense-tracker

```
- Run the application:
```bash
nodemon app.js
```
- Open your browser and go to
```bash
http://localhost:3000
```
## API endpoints

- GET / – fetches all expenses  
- POST / – adds a new expense
- PUT / – updates the details of the expenses
- DELETE / – deletes a particular expense
  
## Database Integration

This project uses **MongoDB** as its primary database, integrated using **Mongoose**, a powerful Object Data Modeling (ODM) library for Node.js.


