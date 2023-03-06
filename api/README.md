Version
yarn: 1.22.19
npm: 6.14.15
node: v14.18.1

Run
cp .env.example .env.development
npm i
npm run start:dev

Swagger: http://localhost:3002/api

# Database diagram:

![Database diagram](https://github.com/yugienter/health-app/blob/master/api/Diagram.png)

## Authentication/Authorization 

POST /login

POST /signup

## MEALS 

Module to manage meal history.

### POST /meals/ (require authentication role USER)

Create a new meal record for this user

Request body:

    {
      "imageUrl": "string",
      "mealTime": "MORNING",
      "date": "2023-03-06T04:01:21.269Z"
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "imageUrl": "string",
        "mealTime": "MORNING",
        "date": "2023-03-06T04:01:21.269Z",
        "userId": "638b12876ffaf63794f2f810",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "__v": 0
      }
    }

If it exists a meal which have the same date and mealTime, we don't allow to create meal with this date and mealTime

Response body:

    {
      "error": "Already created meal with this date mealTime",
      "path": "/meals",
      "timestamp": "2023-03-06T04:10:26.098Z"
    }

### GET /meals/ (require authentication role USER)

Get the list of meal records of this user with pagination.

Response body:

    {
      "data": {
        "nodes": [
          {
            "_id": "63906e306a4722a2b99fa543",
            "mealTime": "DINNER",
            "date": "2023-03-06T12:25:05.516Z",
            "userId": "638b12876ffaf63794f2f810",
            "createdAt": "2023-03-06T12:25:27.203Z",
            "updatedAt": "2023-03-06T12:25:27.203Z",
            "__v": 0
          },
        ],
        "total": 1,
        "page": 1,
        "lastPage": 1
      }
    }

### PUT /meals/ (require authentication role USER)

Edit a meal record of this user.

Request body:

    {
      "_id": "63906e306a4722a2b99fa543",
      "imageUrl": "string",
      "mealTime": "LUNCH",
      "date": "2023-03-06T04:03:00.621Z"
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "imageUrl": "string",
        "mealTime": "LUNCH",
        "date": "2023-03-06T04:03:00.621Z",
        "userId": "638b12876ffaf63794f2f810",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "__v": 0,
      }
    }

If it exists a meal which have the same date and mealTime, we don't allow to update to this date and mealTime

Response body:

    {
      "error": "Already created meal date time",
      "path": "/meals",
      "timestamp": "2023-03-06T04:10:26.098Z"
    }

### DELETE /meals/:id (require authentication role USER)

Delete a meal record of this user.

Query:

id: 639088cb1c021415290a4275

Response body:

    {
      "data": true
    }

If there is no meal with this id, return false

Response body:

    {
      "data": false
    }

## Weight & fat (not implemented)

Module to manage weight and body fat graph.

### POST /weight-fat/ (require authentication role USER)

Create a weight-fat record of this user

Request body:

    {
      "weight": 80,
      "fat": 20,
      "datetime": "2023-03-06T04:03:00.621Z"
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "weight": 80,
        "fat": 20,
        "datetime": "2023-03-06T04:03:00.621Z"
        "userId": "638b12876ffaf63794f2f810",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "__v": 0
      }
    }

### GET /weight-fat/ (require authentication role USER)

Get all weight-fat records of this user with pagination

Response body:

    {
      "data": {
        "nodes": [
        {
          "_id": "63906e306a4722a2b99fa543",
          "userId": "638b12876ffaf63794f2f810",
          "createdAt": "2023-03-06T10:42:56.750Z",
          "updatedAt": "2023-03-06T12:13:48.139Z",
          "weight": 70,
          "fat": 25,
          "datetime:": "2023-03-06T10:42:56.750Z"
          "__v": 0,
          "mealTime": "LUNCH"
       }
      ],
        "total": 1,
        "page": 1,
        "lastPage": 1
      }
    }

### PUT /weight-fat/ (require authentication role USER)

Edit a weight-fat record of this user.

Request body:

    {
      "_id": "63906e306a4722a2b99fa543",
      “weight": 68.5,
      “fat": 24
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "weight": 68,
        "fat": 24,
        "datetime:": "2023-03-06T10:42:56.750Z",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "userId": "638b12876ffaf63794f2f810",
        "__v": 0,
      }
    }

### DELETE /weight-fat/:id (require authentication role USER)

Delete a weight-fat record of this user.

Query:

id: 639088e5750561168b9c2fe1

Response body:

    {
      "data": true
    }

If there is no weight-fat with this id, return false

Response body:

    {
      "data": false
    }

## Targets (not implemented)

Module to manage date and targets for calculating the achievement rate.

### POST /targets/ (require authentication role USER)

Create a target for this user

Request body:

    {
      "weight": 70,
      "fat": 15,
      "date": "2023-03-06T04:03:00.621Z"
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "weight": 75,
        "fat": 18,
        "date": "2023-03-06T04:03:00.621Z",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "userId": "638b12876ffaf63794f2f810",
        "__v": 0
      }
    }

### GET /targets/ (require authentication role USER)

Get all target records of this user with pagination.

Response body:

    {
      "data": {
        "nodes": [
        {
          "_id": "63906e306a4722a2b99fa543",
          "userId": "638b12876ffaf63794f2f810",
          "createdAt": "2023-03-06T10:42:56.750Z",
          "updatedAt": "2023-03-06T12:13:48.139Z",
          "weight": 75,
          "fat": 18,
          "date:": "2023-03-06T10:42:56.750Z"
          "__v": 0,
          "mealTime": "LUNCH"
        }
      ],
        "total": 1,
        "page": 1,
        "lastPage": 1
      }
    }

### PUT /targets/ (require authentication role USER)

Edit a target of this user

Request body:

    {
      "_id": "63906e306a4722a2b99fa543",
      “weight": 63,
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "weight": 63,
        "fat": 24,
        "date:": "2023-02-28T10:42:56.750Z"
        "userId": "638b12876ffaf63794f2f810",
        "__v": 0,
      }
    }

### DELETE /targets/:id (require authentication role USER)

Delete a target of this user

Query:

id: 639088e5750561168b9c2fe1

Response body:

    {
      "data": true
    }

If there is no target with this id, return false

Response body:

    {
      "data": false
    }

### GET /rate/

Calculate and return the achievement rate of the nearest future target.

Response body:

    {
      "data": {
        “date”: “2023-03-06T10:42:56.750Z”,
        “rate”: 0.8
      }
    }

## Exercices (not implemented)

Module to manage exercises.

### POST /exercises/ (require authentication role USER)

Create a exercise record for this user

Request body:

    {
      "calories": 60,
      "duration": 30,
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "calories": 60,
        "duration": 30,
        "datetime": "2023-03-06T04:03:00.621Z",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "userId": "638b12876ffaf63794f2f810",
        "__v": 0
      }
    }

### GET /exercises/ (require authentication role USER)

Get list of exercises of this user with pagination

Response body:

    {
      "data": {
        "nodes": [
        {
          "_id": "63906e306a4722a2b99fa543",
          "userId": "638b12876ffaf63794f2f810",
          "createdAt": "2023-03-06T10:42:56.750Z",
          "updatedAt": "2023-03-06T12:13:48.139Z",
          "calories": 30,
          "duration": 45,
          "datetime:": "2023-03-06T10:42:56.750Z"
          "__v": 0,
          "mealTime": "LUNCH"
        }
      ],
        "total": 1,
        "page": 1,
        "lastPage": 1
      }
    }

### PUT /exercises/ (require authentication role USER)

Edit a exercise record of this user

Request body:

    {
      "_id": "63906e306a4722a2b99fa543",
      "calories": 50,
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "calories": 50,
        "duration": 60,
        "datetime:": "2023-02-28T10:42:56.750Z"
        "userId": "638b12876ffaf63794f2f810",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "__v": 0,
      }
    }

### DELETE /exercises/:id (require authentication role USER)

Delete a exercise record of this user

Query:

id: 639088e5750561168b9c2fe1

Response body:

    {
      "data": true
    }

If there is no exercise with this id, return false

Response body:

    {
      "data": false
    }

## Diaries (not implemented)

Module to manage diaries.

### POST /diaries/ (require authentication role USER)

Create a diary record for this user

Request body:

    {
      "note": “some text”,
      "date": “2023-03-06T04:03:00.621Z",
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "note": “some text”,
        "date": "2023-03-06T04:03:00.621Z"
        “status”: “CREATED”
        "userId": "638b12876ffaf63794f2f810",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "__v": 0
      }
    }

### GET /diaries/ (require authentication role USER)

Get all list of diaries records of this user with pagination

Response body:

    {
      "data": {
        "nodes": [
        {
         "_id": "63906e306a4722a2b99fa543",
          "userId": "638b12876ffaf63794f2f810",
          "createdAt": "2023-03-06T10:42:56.750Z",
          "updatedAt": "2023-03-06T12:13:48.139Z",
          "note": “some text”,
          "date": "2023-03-06T04:03:00.621Z",
          “status”: “CREATED”
          "__v": 0,    
        },
      ],
        "total": 1,
        "page": 1,
        "lastPage": 1
      }
    }

### PUT /diaries/ (require authentication role USER)

Edit a diary record of this user

Request body:

    {
        “_id”: “63906e306a4722a2b99fa543”,
        “status”: “ARCHIVE”
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "note": “some text 2”,
        "date": "2023-03-06T04:03:00.621Z",
        “status”: “ARCHIVE”
        "userId": "638b12876ffaf63794f2f810",
        "__v": 0,
      }
    }

### DELETE /diaries/:id (require authentication role USER)

Delete a diary record of this user

Query:

id: 639088e5750561168b9c2fe1

Response body:

    {
      "data": true
    }

If there is no diary with this id, return false

Response body:

    {
      "data": false
    }

## Columns (not implemented)

Module to manage columns.

### POST /columns/ (require authentication role ADMIN)

Create a column record

Request body:

    {
      "title": “some title”,
      "content": “some content”,
      "tags": [“tag1”, “sometag”]
      “category”: “DIET”,
      “imageUrl”: “image.com/a”,
      “status”: “DRAFT”
      "datetime": “2023-03-06T04:03:00.621Z",
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "title": “some title”,
        "content": “some content”,
        "tags": [“tag1”, “sometag”]
        “category”: “DIET”,
        “imageUrl”: “image.com/a”,
        “status”: “DRAFT”
        "datetime": “2023-03-06T04:03:00.621Z",
        "createdAt": "2023-03-06T10:42:56.750Z",
        "updatedAt": "2023-03-06T12:13:48.139Z",
        "__v": 0
      }
    }

### GET /columns/ (not require authentication)

Get all column records with pagination

Response body:

    {
      "data": {
        "nodes": [
        {
          "_id": "63906e306a4722a2b99fa543",
          "createdAt": "2023-03-06T10:42:56.750Z",
          "updatedAt": "2023-03-06T12:13:48.139Z",
          "title": “some title 1”,
          "content": “some content 1”,
          "tags": [“tag2”, “sometag2”],
          “category”: “BEAUTY”,
          “imageUrl”: “image.com/b”,
          “status”: “PUBLISH”,
          "datetime": "2023-03-06T04:03:00.621Z",
          "__v": 0,
        }
      ],
        "total": 1,
        "page": 1,
        "lastPage": 1
      }
    }

### PUT /columns/ (require authentication role ADMIN)

Edit a column record

Request body:

    {
        “_id”: “63906e306a4722a2b99fa543”,
        “status”: “ARCHIVE”
    }

Response body:

    {
      "data": {
        "_id": "63906e306a4722a2b99fa543",
        "title": “some title 2”,
        "content": “some content 2”,
        "tags": [“tag3”, “sometag3”],
        “category”: “HEALTH”,
        “imageUrl”: “image.com/c”,
        "datetime": "2023-03-06T04:03:00.621Z",
        “status”: “ARCHIVE”
        "__v": 0,
      }
    }

### DELETE /columns/:id (require authentication role ADMIN)

Delete a column record.

Query:

id: 639088e5750561168b9c2fe1

Response body:

    {
      "data": true
    }

If there is no diary with this id, return false

Response body:

    {
      "data": false
    }
