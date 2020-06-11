# Usage:

In a terminal aimed at the toteTechTest directory, run `npm run begin`. This will install the necessary dependencies and launch the app in a locally installed android emulator or connected android device.  
Alternatively, run the following:

- In a terminal, run `npm install` to install the necessary dependencies
- Next, run `npm start` to start the react native server
- In a separate terminal, if your emulator or device is iOS based, run `npm run ios`. If you are working with Android, run `npm run android` instead.

Once the app has started, it will show top news headlines from sources around the UK. Enter your search term in the search bar at the top and it will return a list of relevant, English language articles from sources around the world. Tap the "load more" button at the bottom to load more relevant articles.

## Aims

This is a front end mobile UI that takes input from the user in the form of a search term and returns relevant content from an API (in this case, newsAPI). The initial goals were to:

- Load articles from API and display as cards ✔
- Accept search term input from user and display matching articles ✔
- Display these articles in an appropriate way, including pagination where the number of responses exceed what can be comfortably shown at once ✔
- On tapping an individual article card, open a web browser or relevant news app to show the full article ✔

## Challenges

The main thing I struggled with for this tech test was the containerisation as described in task 2 of the brief given. While I was aware of the concept of containerisation, I had never directly used it myself before so it was a totally new learning experience for me.  
I chose to go with Docker for this task, and began by writing a dockerfile to create an image using Node as this contained most of the dependencies required for the app. I was successfully able to build the image, but I encountered problems getting the Android Debug Bridge to connect to my device or emulator from within the Docker container.  
While the app itself successfully runs on an emulator or Android device outside of a Docker container, unfortunately given the time frame I was unable to figure out what was going wrong with the ADB connection.
If I could have gotten the ADB to connection succesfully, I would have then used Docker Compose to make the container configurable by the user to adapt to their needs (such as individual IP addresses or ports) so that the only thing the user would have had to do after the initial setup is run `docker-compose up`.
