# Ecommerce-Back-End

## Table of contents

> - [Title / Repository Name](#title--repository-name)
>   - [Table of contents](#table-of-contents)
>   - [About / Synopsis](#about--synopsis)
>   - [Demo](#demo)
>   - [Usage](#usage)
>   - [Installation](#installation)
>   - [User Story](#user-story)
>   - [Purpose](#purpose)
>   - [Technology](#technology)
>   - [Credits](#credits)
>   - [Contributing / Reporting issues](#contributing--reporting-issues)

## About / Synopsis

## Demo

Watch the video demonstration at the link below:

https://drive.google.com/file/d/1dSbOPN3XcHz_70F7-phd4sxEA2J_50ML/view

## Installation

- Clone this repository.
- run "npm install express sequelize mysql2 bcrypt" in the main directory to configure these methods in your directory.
- Add and edit an .env file to your configuration, including your MySQL username, and MySQL password.
- Create your database by running "source db/schema.sql" from the MySQL shell.  Add and edit data in the database from here.
- Run "node seeds/index.js" at the command line to test with the database provided.


## Usage
- Start server and connect to database by running "npm start" at your command line.  This will launch the program in your port 3001.
- Log into 
    - navigate the SQL tables by typing:
    - USE ecommerce_db;
    - source db/schema.sql;
    - USE ecommerce_db;

- show the Database by running the following SQL commands:
    - SHOW TABLES;


## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Purpose

GIVEN a CMS-style blog site
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Technology

- MySQL
- Sequelize
- Insomnia
- Express.js
- Heroku app: 