# Can Do Books - Front End

**Author**: Willem Jacobs
**Version**: 1.0.3 (increment the patch/fix version number if you make more commits past your first submission)
**Deployed Site**: NONE
**Backend Server** NONE

## Overview

App that uses Auth0 to sign in to site using Google to authenticate then shows different pages (info) to the user to enable or disbale login/logout, profile and the JWT that is returned from the backend API server.

Added ability to fetch books from backend MongoDB.

Added CRUD (Create single entry from frontend Form & Delete a book)

## Getting Started

- Clone from repo. [Link to Repo](https://github.com/Willem-Jacobs/can-do-books)
- `npm install` or `npm i` to install dependencies.
- `.env` file needed see sample.env for values.

## Architecture

- Trello for Project Management
- React
- React Bootstrap & Bootstrap
- Axios
- auth0
- MongoDB
- UML Lab-11 - ![UML](CE-Lab11-UML.png "UML Image")

## Change Log

08.14.2021 7:00pm (EST) (V1.0.0) - First release. Uses starter code. Uses auth0 to use Google to sign in. When authenticated, will show differnet items from the app.

08.19.2021 9:00pm (EST) (v1.0.1) - Added ability to get books from the backend mongoDB and renders them after authentication from auth0 to ensure token is valid, a carousel with a card listing the info of the books.

08.21.2021 10:00pm (EST) (v1.0.2) - Added the modal to add a new book. Will collect informatio and send to backend to store in DB. Added option to delete a book that will use the ID of the book to send the info to backend and delete the book.

08.25.2021 10:00pm (EST) (v1.0.3) - Added the ability to update a record. Uses an udpate form and sends the data to backend to upate the DB. Returned data is updated to state.

## Credit and Collaborations

No collaborations from others on this project.

### Feature 1 Trello Card #1

**Name of feature:** Basic structure setup

**Estimate of time needed to complete:** 2 hour

**Start time:** 05:00pm

**Finish time:** 07:00pm

**Actual time needed to complete:** 2 hours.

**Name of feature:** Trello card 2 for lab 12

**Estimate of time needed to complete:** 2 hour

**Start time:** 07:00pm

**Finish time:** 09:00pm

**Actual time needed to complete:** 2 hours.

### Lab 13 Trello Card #1 & 2

**Name of feature:** Mongoose Refactor/Cleanup & added CRUD (Create & Delete)

**Estimate of time needed to complete:** 3 hour

**Start time:** 05:00pm

**Finish time:** 07:00pm

**Actual time needed to complete:** 2 hours. The time seems more but I took long breaks to cook, spend time with kids, eat and code when I can. I am not happy with the final outcome at this time but I will submit this for credit and work more on it as I can.

### Lab 14 Trello Card #2

**Name of feature:** Mongoose Refactor/Cleanup & added CRUD (UPDATE using the PUT)

**Estimate of time needed to complete:** 1 hour

**Start time:** 10:30pm (Tuesday, August 24, 2021)

**Finish time:** 10:00pm (Wednesday, August 25, 2021)

**Actual time needed to complete:** 1.5 hours. Took a bit longer as I had a spellign error on a varibale that took me a bit longer to find on the backend.
