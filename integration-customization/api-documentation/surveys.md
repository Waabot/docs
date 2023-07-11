<head>
<link rel="stylesheet" href="../../style.css">
</head>

# Surveys

The Surveys endpoints provide a comprehensive set of tools for creating and managing surveys within your application. With these endpoints, you can design interactive surveys, collect valuable feedback from your users, and gain insights to enhance your product or service.

---

**AUTHORIZATION** Bearer Token

### `POST Create`

```
/survey
```

#### Example Request

```shell
curl --location '/survey' \
--header 'x-refresh;' \
--data '{
    "session_id": "",
    "access_token": "",
    "title": "Greetings Msgs",
    "keyword": "hello,hi,cool",
    "reply": "How are you doing? I am fine!",
    "sort_id": 1,
    "action": {

    }
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Survey created successfully!",
    "data": {
      "reply": "How are you doing? I am fine!",
      "client_id": "642cb299b6f8a5a12f2c59fe",
      "sort_id": 1,
      "_id": "64607194b2b141dd0421cbfd",
      "createdAt": "2023-05-14T05:28:52.442Z",
      "updatedAt": "2023-05-14T05:28:52.442Z",
      "__v": 0
    }
  }
  ```

---

### `POST Create Survey With Action`

```
/survey
```

FYI! Every fields under action are optional.

#### Example Request

```shell
curl --location '/survey' \
--data-raw '{
    "session_id": "",
    "access_token": "",
    "title": "Greetings Msgs",
    "keyword": "hello,hi,cool",
    "reply": "How are you doing? I am fine!",
    "sort_id":1,//hierarchy
    "action": {
        "send_location": {
            "lat": "51.5074",
            "lng": "0.1278",
            "loc": "London!"
        },
        "send_contact": {
            "name": "Banky",
            "number": "2348179803743"
        },
        "send_file": "61b1b55ca29cc051b494dd4f",
        "send_photo": "61b1b55ca29cc051b494dd4f",
        "send_notification": {
            "email": "mrbarnk1@gmail.com",
            "whatsapp_number": "2348179803743"
        },
        "add_to_group": "61b19e128f12f271545eec7c",
        "start_survey": "survey_id"
    }
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Survey created successfully!",
    "data": {
      "reply": "How are you doing? I am fine!",
      "client_id": "642cb299b6f8a5a12f2c59fe",
      "action": {
        "send_location": {
          "lat": "51.5074",
          "lng": "0.1278",
          "loc": "London!"
        },
        "send_contact": {
          "name": "Banky",
          "number": "2348179803743"
        },
        "send_file": "61b1b55ca29cc051b494dd4f",
        "send_photo": "61b1b55ca29cc051b494dd4f",
        "send_notification": {
          "email": "mrbarnk1@gmail.com",
          "whatsapp_number": "2348179803743"
        },
        "add_to_group": "61b19e128f12f271545eec7c",
        "start_survey": "survey_id"
      },
      "sort_id": 1,
      "_id": "646071e2b2b141dd0421cc0b",
      "createdAt": "2023-05-14T05:30:10.723Z",
      "updatedAt": "2023-05-14T05:30:10.723Z",
      "__v": 0
    }
  }
  ```

---

### `GET Get One`

```
/attachment
```

#### Example Request

```shell
curl --location --request GET '/attachment' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 204 No Content

---

### `GET Get All`

```
/survey
```

#### Example Request

```shell
curl --location --request GET '/survey' \
--header 'x-refresh;' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 204 No Content

---

### `DEL Delete`

```
/intent/61b18f5e96140e23145547e9
```

#### Example Request

```shell
curl --location --request DELETE '/intent/61b18f5e96140e23145547e9' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 204 No Content

---

### `PUT Update`

```
/survey/61c569b6cd0eff6f8c9d7aa2
```

#### Example Request

```shell
curl --location --request PUT '/survey/61c569b6cd0eff6f8c9d7aa2' \
--header 'x-refresh;' \
--data '{
    "session_id": "",
    "access_token": "",
    "reply": "What is your phone number?",
    "sort_id": "2"
}'
```

#### Example Response

- Status: 204 No Content

---

<br>

We hope this guide provides you with the necessary information to create, get, and update surveys using our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="../../api-documentation/index.md">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
