# Contributing Guide 
## Team Values, Team Norms
- Respect, Understanding, and Accountability
- Open Collaboration
- Work should be completed punctually 
## Conflict Resolution
- Conflicts should be brought up to all developers as soon as possible. 
- All developers will collaboratively decide on the best outcome. 
## Contribution Rules
1. Work should be done locally and not on the remote repo
1. All assigned work should be contributed by the end of the agreed time
## Stand-up meetings
Times TBD
- 10/13 
- 10/20
- 11/1
- 11//3
- 11/8
- 11/15
- 11/17
- 11/22
## Setup Instructions
GitHub is our primary resource for version control, project planning, issue tracking, and project documentation.
1. Install [VSCode](https://code.visualstudio.com)
1. Clone this repository on your local machine
## Building and Testing Instructions
1. Fork this repository 
1. Clone your fork of this repository to your local machine
1. Navigate into the project directory

### Build and launch the back end
1. Navigate into the `back-end` directory
1. Run `npm install` to install all dependencies listed in the `package.json` file
1. Make sure to create an .env file and copy the contents of .env.example into it
```javascript
FRONT_END_DOMAIN=http://localhost:3000
```
1. Run `npm start` to launch the Express.js server
### Build and launch the front end
1. Navigate into the `front-end` directory
1. Run `npm install` to install all dependencies listed in the `package.json` file, Make sure the .env file specifies the right domain: 
```javascript
REACT_APP_BACKEND=http://localhost:3001
```
1. Run `npm start` to launch the React.js server
