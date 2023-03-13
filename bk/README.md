# Test

API Project for test

## Installing
### Create .env file and add variables
1. create .env file from .env.example.
2. Add variables in .env.
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=test_db
DATABASE_USER=postgres
DATABASE_PASSWORD=root
```

### Run project
1. install dependencies
```
npm install ( or npm i)
```
2. seed db
```
npm seed:run
```
3. run project
```
npm run start:dev
```
Then the project will be run on port 3000.
