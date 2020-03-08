## Description
Build a Node.js application for search a content and their url Using of Nest.js Framework (https://docs.nestjs.com/) and typeorm (https://typeorm.io/). 
Also , Use of some best npm libraries like metaphone (use for check misspelled the word like `google` `gogle` `Gooogle` all are consider same as the search result as `google`.

## Installation

```bash
#you need a node.js in your machine to run the application. you can download by this website : https://nodejs.org/en/download/
#check node installed or not by this command
$ node -v
#check npm installed or not by this command
$ npm -v
```
```bash
# install dependent libraries for project
$ npm install
```

## Configuration of Database
please change the .env file in the project for change the database.
also database script attached with project in script.sql file.

## Some steps for add new Data.
you need to add the data to  content_search table in database to search a website by keyword.
Example. you want to search `youtube` in the search engine. then you need to add first their relative data 
to the database like
title = `Youtube`,
content_details = `details about website`,
url = `https://www.youtube.com`,
location = `location of site`,
sounds_like = 
`you need to add possible keyword's metaphone string to this column like youtube - 'YTB' , www.youtube.com - 'YTBKM' in space manner in column like "YTB YTBKM" . you can add as much as possible keyword in this column in order to make best possible search.if we have good data we can make good search engine.`
```bash
# you can generate metaphone string of keyword by this website : https://en.toolpage.org/tool/metaphone
```
adult_content = `0 or 1 - based on adult content in website if website is adult only please add as 1 else 0.`
entry_by = `user id - testing purpose you can add as 1`
```bash
#Notes : Used of FULL TEXT index in sounds_like column to the fast retrieval of data.
```

## Running the app

```bash
# start the app
$ npm run start
```

## access the app
open the `localhost:3000` in the browser for access the app.


## improvement
I added the column of location in the database side we can improve search by make filter of the location in search engine by find the user's location. some of best npm package available for that like `geolocator`.

we can also improve design of search engine.



