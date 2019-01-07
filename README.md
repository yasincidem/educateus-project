

![](https://david-dm.org/yasincidem/educateus-project.svg)
![](https://heroku-badge.herokuapp.com/?app=educateus-prod)




# Functional Requirements

### Video Explorer
- User can find quality and carefully selected videos that are taken from YouTube.  
-  Admin shall add videos by looking at their content and some other features that affect its quality
### Categories
- User can see all the catogories and subcategories to find a video related to his/her interest easily
### Watch Video
- After a user clicks a video, the user should view the video with a nice and simple user interface
### Discover
- User can see all the topics that he/she may want to learn about deeply
### NewsFeeds
- User shall check news that is related to the topic he wants to know more and see tweets , most popular videos that is added by the system (admin) .
### Daily Videos
- View the most popular videos about a particular category
### Register
- Users shall fill and confirm registration form to use all possible features of website 
### Profile
- All user can see basic information about their activity on the website after logging in.
### Remember
- In case a user that is registered already and added a note while watching a video , the system will remind him to check what note he added and which video he was interested in before.
### Note
- User can take notes, that he may want to remember later, while watching a video 
### Homework
- A user (Teacher) shall be able to create playlist that appel to the taste buds of him .
- Admin shall add videos into database by categorizing them after selecting carefully.
- A user ( teacher) shall be able to give homework to students by choosing proper videos that class is about to study.
*Watch Together
- In case two or more users want to watch a video together to have interaction  , the system gives an opportunity by giving them a link that could enable watching together feature if users registered and clicked watch together button.


# Non-Functional Requirements
### Usability
  - People with a little understanding of using complicated website, must be able to use the website
 ### Security
 - The system should be safeguarded against deliberate and intrusive faults from internal and external 
        sources
 ### Performance
 - The front-page load time must be no more that 2 seconds for users that access the website using an LTE 
         mobile connection
 ### Scalability
 - The website attendancy limit must be scalable enough to support 1,000 users at a time
 ### Reusability
 - The website should be coded as it could implement to other platforms like mobile, desktop
 ### Accessibility
  - All accessibility tags, properties should be added
    



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
 
![](https://lh6.googleusercontent.com/xY6kB7WLrmAkgxh3gb1N3o7PcRklnVjipOG11q29IF9r-L4qzPXPXVWZxZ00GDcGTQvVbGYhZxLGdL6gHXk-=w1366-h615-rw)

![](https://lh6.googleusercontent.com/t2h6xB2EdVQuPLiBBsYtWsP6IjjMDGB8NYdz200zTYazJhyHIa4ThiB5ZF9nMtgV8nFhv03OYbw43w=w1366-h664-rw)


![](https://lh5.googleusercontent.com/TQXfNShjNteEVDs92s5vGrU4NZZ2l17OfJPDT4IkgDrvGW0kCuwbIQvgxJetQ5u477RHHBHEnre_ew=w1366-h664-rw)


https://drive.google.com/file/d/14PH2uzmahsOKXQXKeQ-1C9G38iZrMTi6/view?usp=sharing
https://drive.google.com/file/d/1K8uFT5PITQybq1JDEsxdepseoudCwNJA/view?usp=sharing
https://drive.google.com/file/d/1177dBRyyB_WXj2HZaaFSvwDX2QLql0mV/view?usp=sharing

 
 
