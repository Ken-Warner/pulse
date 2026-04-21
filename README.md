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

4. `npm run build:all` to build all workspaces

## TODOs

1. [ ] Finish wiring up the different containers for docker compose.
   - Connect client to API
   - Connect API to DB
   - Establish health checks in `compose.yaml`.
   - Possibly set up a `shared` package within the monorepo too.
2. [ ] Properly set up environment variables so that container architecture can run in different debug modes.
3. [ ] Add NPM scripts for the different debug modes to monorepo `package.json`.
   - `compose.back.yaml` - backend and database containers are live and client is run as watch.
   - `compose.front.yaml` - frontend and database containers are live and server is run as watch.
   - `compose.local.yaml` - entire architecture is live.
4. [ ] Database design and implementation.
5. [ ] Brainstorm initial tasks and divide them up.
