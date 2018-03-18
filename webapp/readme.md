# About
A lightweight API and Web interface that writes configuration form data to disk.

### Getting Started
The app uses a few libraries to keep things simple. Assuming you already have node installed, run the following to install dependancies from the webapp directory:
`npm install`

Then start the server with:
`npm start`

The Webapp is then available on localhost port 3000. Browse to http://localhost:3000/ to see the form UI. The UI is built with the contents of file `app.html`, edit this to extent the form fields and improve the overall UX!


### The API
The API that publishes the Webapp and maintains the configuration file on disk listens at URI http://localhost:3000/configure and takes either a GET or POST request. The API source code is contained in `server.js`.

##### GET's
A get to /configure returns the current configuration if any as JSON.

##### POST's
A post to /configure writes the payload to disk. The payload is written to disk in the current directory but this can easily changed by updating const `file`.
