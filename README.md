# conclude-homework

There are two aspects to the application the frontend (Angular) and backend (Nodejs + Experss).

Ther entire project can be cloned and once done the npm dependencies need to be installed separately for each aspect.
 ```sh
$ cd server\
$ npm i
```
After the node modules have been installed the db.config.js file needs to be run to create the database, tables and load at least one record in each table - one for viewing users another for login.
 ```sh
$ cd server\app\config
$ node db.config.js
```
You can then run 
```sh
$ npm start
```
This will run the server on PORT 8080


You then have to also do the same for the frontend side of things
```sh
$ cd conclude-assesment\
$ npm i
$ ng serve -o
```
This will open a new window and load the application on PORT 4200

# *NB
Remember to run the db.congig.js file first 

### Done
1. Create a web form that captures the following information and submits it to a nodejs backend
    * Extra points
        Apply material design to the form and its components
        Add validations to the form for the information captured

2. Create a Nodejs back-end that will receive the submitted information and store it either in sqlite or Google Cloud           Firestore along with a timestamp of when the data was stored

3. Create a web page to display a list of the information that was stored in the database
    * Extra points
        Add a paginator to the list that allows you to page through the list 5 rows at a time

4. Sample Application Extra points
    Add a login form to the application that allows logins via an email and password that is stored in the database.
    
    *   email: admin@example.com
    *   password: password123

### Todos

 - Fix registration routing and execution on frontside
 - Web form clearing of mat-errors after submission

### Extras
If you want to add more users you may go to the endpoint http://localhost:8080/register on postman. You may then select POST and then the Body option with raw and JSON highlighted. The structure to use is:
{
    "name": "wandu",
    "email": "wandu@example.com",
    "password": "password123"
}
This would have been done frontend side however...

**It worked on my machine...I swear!**
