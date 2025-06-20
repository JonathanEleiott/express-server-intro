# Servers - Computer that takes in requests from an outside source (internet)

- take in requests from a Front End
- OPTIONAL: can make a request to the DB
- responds to the Front End

## Npm (Node Package Manager)

- npm init -> create the package.json
  - -y -> yes to all the questions
- npm i express -> easy way to start up a server
- npm i nodemon (only used in dev) -> re-runs a file every time you save

## HTTP Request Types (fetch call) -> CRUD (Create, Read, Update, Delete)

- Create -> POST -> add data
- Read -> GET -> retrieves data
- Update -> PUT/PATCH -> modify data (completely updating vs partially updating)
- Delete -> DELETE -> removes data

## OLD WAY

- if/else statements to manually check the method and ulr endpoint
- very clogged
- no security built in (spinner if the endpoint doesn't exist)

## Express

- very clean
- very fast to set up
- more security built in
- requires npm to install

## Routes

- app.httpRequestType('/path', (req, res) => { res.send('<h1>Welcome</h1>') })
- HTML -> /endpoint
- data -> /api/v1/endpoint

## Route Parameters

- used for getting a specific item
- path -> :variableName (separated by /)
- req.params -> object with keys and values

## Server notes

- app.listen takes in an optional second argument that is a function that will run when the server starts
- the function in the route parameters takes in a req, res, and a next
  - req -> request -> from the client (usually a browser)
  - res -> response -> what the server sends back to the client
- res.sendFile -> sends a file to the client
  - make sure you send the correct HTML file (not a React one)
- __dirname -> used to get the FOLDER path of where the file is located
- '*' path will accept any path for the given http request type
- app.use -> will accept any http request type
- node uses module.exports and require instead of export and import
