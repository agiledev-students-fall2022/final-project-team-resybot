[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8760730&assignment_repo_type=AssignmentRepo)
# Project Title: Resy Bot
## Collaborators
Mark Lung ([github](https://github.com/ml6754)), Zack Goldberg([github](https://github.com/zrg228)), Aditya Pradeep([github](https://github.com/adityapradeep12)) ,Geoffrey Budiman ([github](https://github.com/geoffreybudiman91)), Rayhan Ahmed ([github](https://github.com/rfahmed))
## Vision Statement
Resy Bot aims to obtain reservations at popular and hard to get into restaurants. As NYC continues to open up post-pandemic, popular restaurants are harder to get reservations at, but with Resy Bot, you are able to get a reservation at any restaurant of your liking! For whoever wants to get a reservation at a restaurant of their choosing. Web app where you can select a restaurant and timing(s) of when you want to go. Resy Bot will then wait for the reservation to be open and snipe it instantly, then will email or send a text message regarding the reservation. 
## Contributing
For more info on contribution visit [CONTRIBUTING.md](./CONTRIBUTING.md)

## Building and Running
1. Fork this repository 
1. Clone your fork of this repository to your local machine
1. Navigate into the project directory

### Build and launch the back end
1. Navigate into the `back-end` directory
1. Run `npm install` to install all dependencies listed in the `package.json` file
1. Make sure to create an .env file and copy the contents of .env.example into it
1. Run `npm start` to launch the Express.js server
### Build and launch the front end
1. Navigate into the `front-end` directory
1. Run `npm install` to install all dependencies listed in the `package.json` file, Make sure the `proxy` setting in the json file specifies the right domain: 
```javascript
REACT_APP_BACKEND=http://localhost:3001
```
1. Run `npm start` to launch the React.js server


## Additional Links
[UX-DESIGN](./UX-DESIGN.md)

1. See the [Sprint Planning instructions](instructions-0d-sprint-planning.md) for the requirements of Sprint Planning for each Sprint.

1. See the [Front-End Development instructions](./instructions-1-front-end.md) for the requirements of the initial Front-End Development.

1. See the [Back-End Development instructions](./instructions-2-back-end.md) for the requirements of the initial Back-End Development.

1. See the [Database Integration instructions](./instructions-3-database.md) for the requirements of integrating a database into the back-end.

1. See the [Deployment instructions](./instructions-4-deployment.md) for the requirements of deploying an app.
