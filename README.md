## Simple Video Player

html5 video  player with react

*Getting started :*

    npm install
    npm start


----------
*Unit test :*   

     npm run test

----------
*End To End test with nightwatch :*  

First launch local dev server so nightwatch can test against it:

    npm start &

Launch a selenium server on your localhost:

    -jar selenium-server-standalone-3.8.1.jar
 (you can download the latest selenium at: http://selenium-release.storage.googleapis.com/index.html)

Finally you can launch nigthwatch unit test with:

    npm run end2end
