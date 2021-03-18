# MEANstackdockercompose

This Project creates a MEAN stack Mongo database, Express Server, Angular CLI an
d Node Js to create a single page application , dockerizes them into three conta
iners using docker compose


# Prerequistes

Open port 4200, 3000, 27107 and http 80 on your instance

(Included in notes of nalapatt/HowToinstallinaws)
Install Docker
Install Docker Compose

# Verify if installed by 
docker --version
docker-compose --version
node --version

# clone this repo or if creating your own 
mkdir MeanAngExpNodeMongoDockerFile
cd MeanAngExpNodeMongoDockerFile

# create a new angular app
npx @angular/cli new angular-client

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

# your directory should look like this

└── MeanAngExpNodeMongoDockerFile
    └── angular-client
    your directory should look like this
        ├── README.md
        ├── angular.json
        ├── e2e
        ├── node_modules
        ├── package.json
        ├── package-lock.json
        ├── src
        ├── tsconfig.json
        └── tslint.json
        
    
 # change into the angular dir   
 cd angular-client
 
 # create a dockerfile
 
 vi Dockerfile
 add this inside
 
FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN  npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "start"] 


esc:wq to save and quit

# vi .dockerignore
add this
node_modules/
esc:wq to save and quit

# vi package.json
delete "start": "ng serve 
replace with    "start": "ng serve --host 0.0.0.0  --disable-host-check",
esc:wq to save and quit
 
# Now build it
sudo docker build -t angular-client:dev .

# Now create the container
sudo docker run -d --name angular-client -p 4200:4200 angular-client:dev

# to view the app on your localhost
sudo start angular-client
now go to your ip address :4200 and you should be able to view your angular page

sudo stop angular-client to stop the container

 Now you have deployed your first container containing angular manually using your dockerfile

# Now Deploy your Express Container

# change into express dir 
mkdir express-server
cd  express-server

# vi Dockerfile
add this

FROM node:6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "start"]
esc :wq to save and quit

# vi .dockerignore
add this
node.modules/
esc:wq to save and quit 

# vi package.json
add this
{
  "name": "express-server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "body-parser": "~1.15.2",
    "express": "~4.14.0"
  }
  esc :wq to save and quit
  
 # vi server.js
  add this
  const express = require("express");
 const app  = express();
  
 app.get("/", function(req, res){
     res.send("Hello from Docker!");
 });

 app.listen(3000, function(){
     console.log("Projects in Docker API server started at");
 });
esc:wq to save and quit

# mkdir routes
cd routes
# vi api.js
add this
const express = require('express');
const router = express.Router();

/_ GET api listing. _/
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;

}
esc :wq to save and quit

npm install
docker build -t express-server:dev .
docker run -d --name express-server -p 3000:3000 express-server:dev

now go to your localhost:3000 you should see hello from docker

# hurray you have deployed your first express container

# For the mongo db just download the image and run it 
docker run -d --name mongodb -p 27017:27017 mongo
this creates your mongo container

version: '2' # specify docker-compose version

# Define the services/containers to be run in docker-compose.yml file
vi docker-compose.yml
add this

services:
  angular: # name of the first service
    build: angular-client # specify the directory of the Dockerfile
    ports:
      - "4200:4200" # specify port forewarding

  express: #name of the second service
    build: express-server # specify the directory of the Dockerfile
    ports:
      - "3000:3000" #specify ports forewarding

  database: # name of the third service
    image: mongo # specify image to build container from
    ports:
      - "27017:27017" # specify port forewarding
    
    esc:wq to save and quit

# to deploy all the three containers at once in docker compose

sudo docker-compose up

