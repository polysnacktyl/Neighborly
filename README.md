# Neighborly
<a href="https://dashboard.heroku.com/apps/infinite-forest-58133">Experience Neighborly on Heroku</a></li>

## Description 

full MERN stack application
MVC paradigm 
Neighborly was no easy application to build, especially for us first time MERN stack developers. 
19 components and 19 views  
One of the biggest features that really pulled the whole app together was the use of Auth0. This is where we ran into our biggest challenges and successes as a team. 

## Installation

To install this repo on your local drive you would have to clone the ssh key from my repo. Head into your local drive of choice in terminal or bash and do a git clone. Once you have done a git clone you are free to start working on this project. If you want to push your changes to my repo then you would have to head into terminal/bash and do a git add . Then a git commit -m explaning the changes made, and finally a git push to push the files onto the repo. 

## Usage 

If you want to use this program on the front end then simply click on the link in the finished project section of this read me. If you would like to tinker with the back-end, first do a git clone as previously described. Once you have the all the folders in your vs code, make sure you do a npm install in the command line to install all the dependencies listed in the package.json. Then go to the server.js file and check the port you are listening on and make sure you are able to spin up a localhost:[PORT NUM]. Go into the intergrated terminal and run the command npm start. This will spin up a local server enabling you to make changes in your editor of choice and see them in the browser. If you want to push up your own community mutual aid site to heroku make sure to follow this <a href="https://blog.heroku.com/deploying-react-with-zero-configuration" target="_blank">guide.</a>

## Finished project

images | image | image
------------ | ------------- | -------------
![image](/https://raw.githubusercontent.com/polysnacktyl/project3/amanda/images/Screen%20Shot%202021-05-20%20at%209.34.44%20AM.png)| ![image](/https://raw.githubusercontent.com/polysnacktyl/project3/amanda/images/Screen%20Shot%202021-05-20%20at%209.41.15%20AM.png) | ![image](/https://raw.githubusercontent.com/polysnacktyl/project3/amanda/images/Screen%20Shot%202021-05-20%20at%209.47.30%20AM.png)

![image](/https://raw.githubusercontent.com/polysnacktyl/project3/amanda/images/Screen%20Shot%202021-05-20%20at%209.53.34%20AM.png)


## Features
<ul>
<li> Full MERN stack application.</li>
<li> Every component on the page has its own file, lends itself to better reusablitiy.</li>
<li> Laybout built using CSS Bootstrap.</li>
<li>Seperate views for each page that have their own seperate routes for seperation of concerns.</li>
<li>Auth0 user authentication and protected routes</li>
<li>used userContext.Provider to wrap the entire application so the user object was available everywhere.</li>
<li>Data stored and accessed through MongoDB Atlas</li>
<li>Feautures a mobile-first design that responds to any viewport size.</li>
</ul>


## Credits
I utilized [this Auth0 tutorial](https://auth0.com/blog/complete-guide-to-react-user-authentication/) by [Dan Arias](https://auth0.com/blog/authors/dan-arias/) implement user signup, authentication, and protected routes.


## Contributing

For questions or contributions, email polysnacktyl@gmail.com

