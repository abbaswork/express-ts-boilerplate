# Arctic Shores Coding Assignment

Your task is to create a SPA that consumes the Github API to search for repositories by name.
The results list should contain the repo name, the author’s name, the repo image, number of
stars & watchers. The list should be sorted by the number of stars. When the user clicks on a
result item, they should be taken to a new page where you display more info about the
repository and author (like when was it last updated, which programming language is used, the
author’s avatar etc.)

## Description

Tech Stack:
- FrontEnd: React + Router + Material UI + Jest (Snapshot Testing)
- BackEnd: Node + Express + Mocha/Chai (BDD Testing)

Structure:
FrontEnd is in client folder. Renders pages through layout using React Router, Components live in components folder with index.js acting as the entry point.
Server lives in the main folder and renders routes through express framework, using a Github Service (class) in the services folder to seperate bussiness and router logic.

## Getting Started

Install Dependencies
```sh
$ npm install //install dependencies for server
$ cd client
$ npm install //install dependencies for client
```

Run Program
```sh
$ npm run start // or node index.js to start server
$ cd client //(run them in seperate terminals)
$ npm run start //to start client that interacts with node server
```

## Testing

Testing
```sh
$ npm run test //start server test to check Github service
$ cd client //(run them in seperate terminals)
$ npm run test //start client test to check links on navbar rendering correctly
```
# arctic-shores-assesment
