<head>
<link rel="stylesheet" href="../../style.css">
</head>

# Authentication

The Authentication endpoints allow you to securely authenticate requests to the API and access protected resources. This section provides details about the authentication methods supported by our API.

## Sessions

---

**AUTHORIZATION** Bearer Token

### `GET Get Sessions(Admin)`

```
/sessions
```

#### Example Request

```shell
curl --location '/sessions' \
--header 'x-refresh;'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  [
    {
      "_id": "61bbdd06871c9664c0a171e2",
      "valid": true,
      "user": "61bbdbe3087d744b748535ff",
      "userAgent": "PostmanRuntime/7.28.4",
      "createdAt": "2021-12-17T00:42:46.844Z",
      "updatedAt": "2021-12-17T00:42:46.844Z",
      "__v": 0
    }
  ]
  ```

---

### `DEL Delete Session(Logout)`

```
/sessions
```

#### Example Request

```shell
curl --location --request DELETE '/sessions' \
--header 'x-refresh;'
```

#### Example Response

- Status: 204 No Content

---

### `POST Create Session`

```
/sessions
```

#### Example Request

```shell
curl --location '/sessions' \
--data-raw '{
    "email": "mrbarnk1@gmail.com",
    "password": "Password123"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX2lkIjoiMSIsIl9pZCI6IjYxYmJkYmUzMDg3ZDc0NGI3NDg1MzVmZiIsImZpcnN0bmFtZSI6IkJhbmtvbGUiLCJsYXN0bmFtZSI6IkVtbWFudWVsIiwiZW1haWwiOiJtcmJhcm5rMUBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTE3VDAwOjM3OjU1Ljg2NloiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTE3VDAwOjM3OjU1Ljg2NloiLCJfX3YiOjAsInNlc3Npb24iOiI2MWJiZGQwNjg3MWM5NjY0YzBhMTcxZTIiLCJpYXQiOjE2Mzk3MDE3NjYsImV4cCI6MTYzOTcwMjY2Nn0.EmvOc0Yb05OwoanvbxEDpjq4TIyWWnNUVj3nf5LrX1I",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6dHJ1ZSwiX2lkIjoiNjFiYmRkMDY4NzFjOTY2NGMwYTE3MWUyIiwidXNlciI6IjYxYmJkYmUzMDg3ZDc0NGI3NDg1MzVmZiIsInVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMjguNCIsImNyZWF0ZWRBdCI6IjIwMjEtMTItMTdUMDA6NDI6NDYuODQ0WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMTdUMDA6NDI6NDYuODQ0WiIsIl9fdiI6MCwiaWF0IjoxNjM5NzAxNzY2LCJleHAiOjE2NzEyNTkzNjZ9.IdaFVi338doWfQ16H4p-BTIEw8PH9fI6oyHvn_ONeug"
  }
  ```

---

## User

---

**AUTHORIZATION** Bearer Token

### `POST Create User`

```
/users
```

#### Example Request

```shell
curl --location '/users' \
--data-raw '{
    "firstname": "Bankole",
    "lastname": "Emmanuel",
    "email": "mrbarnk1@gmail.com",
    "password": "Password123",
    "passwordConfirmation": "Password123"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "role_id": "1",
    "_id": "61bbdbe3087d744b748535ff",
    "firstname": "Bankole",
    "lastname": "Emmanuel",
    "email": "mrbarnk1@gmail.com",
    "createdAt": "2021-12-17T00:37:55.866Z",
    "updatedAt": "2021-12-17T00:37:55.866Z",
    "__v": 0
  }
  ```

---

### `GET Get User`

```
/users
```

#### Example Request

```shell
curl --location '/users'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "User found successfully!",
    "data": {
      "_id": "64286d8abf51ec4c438b33f2",
      "role_id": "1",
      "email": "mrbarnk1@gmail.com",
      "password": "$2b$10$APl2uxa0zXfPwyX9CQjmJeEjh4O1kxig3tlfIYL.JeymngKnAbWx.",
      "firstname": "Bankole",
      "lastname": "Emmanuel",
      "createdAt": "2023-04-01T17:44:42.195Z",
      "updatedAt": "2023-04-01T17:44:42.195Z",
      "__v": 0
    }
  }
  ```

---

### `PUT Update User`

```
/user
```

#### Example Request

```shell
curl --location --request PUT '/users' \
--data '{
    "firstname": "Bankole",
    "lastname": "Emmanuel2"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "User found successfully!",
    "data": {
      "_id": "64286d8abf51ec4c438b33f2",
      "role_id": "1",
      "email": "mrbarnk1@gmail.com",
      "password": "$2b$10$APl2uxa0zXfPwyX9CQjmJeEjh4O1kxig3tlfIYL.JeymngKnAbWx.",
      "firstname": "Bankole",
      "lastname": "Emmanuel2",
      "createdAt": "2023-04-01T17:44:42.195Z",
      "updatedAt": "2023-06-07T00:31:12.732Z",
      "__v": 0
    }
  }
  ```

---

### `PUT Change Password`

```
/users/password
```

#### Example Request

```shell
curl --location --request PUT '/users/password' \
--data '{
    "password": "Password1234"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Password changed successfully!",
    "data": {
      "_id": "64286d8abf51ec4c438b33f2",
      "role_id": "1",
      "email": "mrbarnk1@gmail.com",
      "password": "$2b$10$APl2uxa0zXfPwyX9CQjmJeEjh4O1kxig3tlfIYL.JeymngKnAbWx.",
      "firstname": "Bankole",
      "lastname": "Emmanuel2",
      "createdAt": "2023-04-01T17:44:42.195Z",
      "updatedAt": "2023-06-07T00:31:14.237Z",
      "__v": 0
    }
  }
  ```

---

## Password

---

**AUTHORIZATION** Bearer Token

### `POST Reset`

```
/password/reset
```

#### Example Request

```shell
curl --location '/password/reset' \
--data-raw '{
    "email": "mrbarnk1@gmail.com"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Email sent successfully.",
    "data": {
      "link": "https://app.wasms.co/auth/create-new-password?token=702bd064a52b269b283b29d118caee61a4a486ea670f64643418d7130026471a&id=61bbdbe3087d744b748535ff",
      "userId": "61bbdbe3087d744b748535ff"
    }
  }
  ```

---

### `POST Change`

```
/password/change
```

#### Example Request

```shell
curl --location '/password/change' \
--data '{
    "userId": "615b3ea317f98d3bccaf97e7",
    "token": "832a02289615817ed51a00b164160c083fe37604ad156013fa969982353e14a5",
    "password": "Passwordly"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Password Reset Successfully",
    "data": {
      "status": true,
      "message": "Password reset successfully."
    }
  }
  ```

---

## Email

---

**AUTHORIZATION** Bearer Token

### `POST Request Code`

```
/email/verify
```

#### Example Request

```shell
curl --location '/email/verify' \
--data-raw '{
    "email": "mrbarnk1@gmail.com"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Verification code sent!",
    "data": {
      "code": 960126,
      "token": "VhAGaVGcipgzuALwUxREt8"
    }
  }
  ```

---

### `POST Check Code`

```
/email/check
```

#### Example Request

```shell
curl --location '/email/check' \
--data-raw '{
    "email": "mrbarnk1@gmail.com",
    "code": "108849"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "reason": "Email verified sucessfully."
  }
  ```

---

<br>

We hope this guide provides you with the necessary information to authenticate requests to our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="index.md">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
