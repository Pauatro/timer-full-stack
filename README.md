Hi there! 
This is the Timer App!

## Functionality
It's functionally quite simple, it has a timer that displays the time tracked saves the total amount oof time tracked by its users. Ialso has a night theme, which we love as coders.

## Technologies Used
Front end: React + Typescript, no component libraries used.
Back end: Node-express + Typescript
Database: mongodb

## Running the app
I've containerised the application so that it's easy to get started, but it's been a first timer, so there's probably things that can be optimised there. One of them is probably that the way that I did it, you'll have to create a .env file for the front-end and back-end:

back-end (/back-end):
```
MONGODB_URL = mongodb://mongodb:27017/test
PORT_CLI = 9000
```

front-end (/front-end):
```
REACT_APP_API_URL = http://localhost:9000
```

then you have to create the docker images from the main folder where the docker-compose file is:

back-end:
```
sudo docker build -t back-end back-end 
```

front-end:
```
sudo docker build -t front-end front-end 
```

then you can start the app by running:
```
sudo docker-compose up
```

## Running the tests

front-end (run from /front-end):
```
yarn test 
```

back-end (run from /back-end):
```
npm test 
```

## Future Improvements

There's a few aspects that could be improved.

In terms of code, the front-end has only been tested using snapshots. I think testing the functionality and the logic of the application would be important additions. 

The work with typescript at the back-end could also be improved (i started with raw javascript because it was easier for me, and then moved to typescript but didn't go very deep, just changed the imports and added some types). 

In terms of functionality, adding error handling would be quite important (no messages are shown to the user atm). Also, temporary loading elements could be added to the button during the api call, I just blocked its functionality while loading in this case.

Visually, the MVST logo could be improved: I took a snapshot of the one in the challenge and used an svg converter, which doesn't look super good (please don't kill me for that, I usually do these things better). Also didn't change the logo in the desktop version, I realised that a bit late in the process and didn't get to change it.

## Feedback

Overall I found it a very enjoyable task, it didn't ask for a lot of features which allowed me to spend time working on aspects like figuring out how to use docker (I loved it and I want to learn more!). I also enjoyed working on changing the theme, which I hadn't done before either. I think it is a perfect challenge for a junior position. Looking forward to hear your feedback :)

Cheers,
Pau