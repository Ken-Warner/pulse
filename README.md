# Pulse is Awesome!

## Project Setup

Check that you have node, npm, docker, and docker compose installed.

1. Clone Repo
2. `npm install` in project root.
3. Create `.env` in project root directory. This will be used to determine the variables for your local runs of the project through docker.

```
PORT=80
SESSION_SECRET=''
NODE_ENV='test'
DB_USER=postgres
DB_HOST=db
DB_PASSWORD=password
DB_DATABASE=postgres
DB_PORT=5432
```

4. **OPTIONAL** If setting up for production, make sure in the `client` directory, you set up the `.env.production` file to contain the appropriate host name to reach the API from the client.
5. `npm run build:all` to build all workspaces.

## Run Configurations

There are several ways to run the application during development to aid in the development process.

### Live Backend

Starts a live database and API container using docker. When developing the frontend of the application, this allows the API to be connected and the database to be connected to test the frontend in real time.

1. From the project root directory run `npm run docker:build:server:up`
2. `cd client`
3. `npm run dev`

### Live Frontend

Starts a live database and frontend server container in docker. When developing the API of the application, this allows a frontend to be served through docker and a database container to provide data during development.

1. From the project root directory run `npm run docker:build:client:up`
2. `cd api`
3. `npm run dev`

### Full Local Cluster

This starts everything, building the entire application architecture in a test mode similar to how it would be in production. **THE CLIENT AND API ARE STILL IN DEVELOPMENT MODE**. This means that CORS is still wide open and sessions are insecure. However the architecture is the same as in production.

1. From the project root directory run `npm run docker:build:up`.
2. That's it

## TODOs

1. [x] Finish wiring up the different containers for docker compose.
   - Connect client to API
   - Connect API to DB
   - Establish health checks in `compose.yaml`.
   - Possibly set up a `shared` package within the monorepo too.
2. [x] Properly set up environment variables so that container architecture can run in different debug modes.
3. [x] Add NPM scripts for the different debug modes to monorepo `package.json`.
   - `compose.back.yaml` - backend and database containers are live and client is run as watch.
   - `compose.front.yaml` - frontend and database containers are live and server is run as watch.
   - `compose.local.yaml` - entire architecture is live.
4. [x] Set up a productive version of compose to use with Nginx.
5. [ ] Database design and implementation.
6. [ ] Brainstorm initial tasks and divide them up.
