
![](https://travis-ci.org/yasincidem/educateus-project.svg?branch=master) ![](https://david-dm.org/yasincidem/educateus-project.svg) ![](https://heroku-badge.herokuapp.com/?app=educateus-prod) [![Coverage Status](https://coveralls.io/repos/github/yasincidem/educateus-project/badge.svg?branch=master)](https://coveralls.io/github/yasincidem/educateus-project?branch=master)

Production -> https://educateus-prod.herokuapp.com/

## Technologies
* Framework -> React
* State Management -> Redux
* Async Actions -> Redux-saga
* CSS Framework -> Material UI, Bootstrap
* Helper -> Reselect
* Routing -> React Router
* Lint -> ESlint (airbnb)
* Unit Test -> Jest, Enzyme
* Type Checker -> PropTypes

* Database -> Firebase

* CI -> Travis CI

* Project Management -> Trello
https://trello.com/b/7NgC0zRA/educateus

* Documentation  -> Gitbook 
https://educateus.gitbook.io/project/



***

## Outline
* Boilerplate
* Video Explorer
* Categories
* Watch Video
* Discover
* Dashboard
* Daily Videos
* Authentication
* Profile
* Remember
* Note
* Homework
* Watch Together


## Routes
 * /dashboard
 * /profile
 * /paths
 * /path/algorithm
 * /recommended
 * /login
 * /signup
 * /reset
 * /category/biology
 * /biology/playlist/playlistId/videoId
 * /biology/playlist/playlistId/videoId/togetherId

## Categories

 * Biology
 * Chemistry
 * Geology
 * Mathematics
 * Medicine
 * Physics
 * Technology
 * Zoology
 
 
 * Economics
 * Geography
 * History
 * Journalism
 * Linguistics
 * Philosophy
 * Politics
 * Psychology
 * Sociology
 * World
 
 
 * Creativity
 * Education
 * Human
 * Leadership
 * Motivation
 * Productivity
 * Relationship
 * Self-Improvement
 
 
 * Culture
 * Design
 * Literature
 * Photography
 * Artists
 
 
 ## APIs
 * https://api.uclassify.com/v1/uclassify/topics/classify?readkey=YOUR_READ_API_KEY_HERE&text=
 ```
 {
"Arts": 0.266648,
"Business": 0.0464789,
"Computers": 0.203898,
"Games": 0.0983561,
"Health": 0.08687,
"Home": 0.0986701,
"Recreation": 0.105086,
"Science": 0.0490358,
"Society": 0.0306638,
"Sports": 0.0142938
}
 ```
 
 * https://www.youtube.com/api/timedtext?lang=en&v=TRhStl7SQnM
 
 * https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=P3GagfbA2vo&key=API_KEY
 
 * https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UULXo7UDZvByw2ixzpQCufnA&key=AIzaSyAZGJ9zSpQuNzen5QYfuOS4mxOyrwT9hAM
 

 
 
