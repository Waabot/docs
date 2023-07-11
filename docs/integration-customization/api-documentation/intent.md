<head>
<link rel="stylesheet" href="../../style.css">
</head>

# WAABOT-SDK APIs: Intent (Chatbot Replies)

The "Intent (Chatbot Replies)" API endpoints enable you to define user intents and map them to appropriate responses in your chatbot. By associating intents with relevant replies, you can create dynamic and contextually aware conversations.

---

**AUTHORIZATION** Bearer Token

### `POST Create Intent With Action`

```
/intent
```

#### Example Request

```shell
curl --location '/intent' \
--data-raw '{
    "session_id": "",
    "access_token": "",
    "title": "Greetings Msgs",
    "keyword": "hello,hi,cool",
    "reply": "How are you doing? I am fine!",
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
        "send_file": "attachment_id",
        "send_photo": "attachment_id",
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
    "message": "Intent created successfully!",
    "data": {
      "_id": "61b192b8c08ae0401002c09d",
      "title": "Greetings Msgs",
      "keyword": "hello,hi,cool",
      "reply": "How are you doing? I am fine!",
      "client_id": "61a7bd6ea34282366c025764",
      "createdAt": "2021-12-09T05:23:04.867Z",
      "updatedAt": "2021-12-09T06:26:56.107Z",
      "__v": 0,
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
        "send_file": "attachment_id",
        "send_photo": "attachment_id",
        "send_notification": {
          "email": "mrbarnk1@gmail.com",
          "whatsapp_number": "2348179803743"
        },
        "add_to_group": "61b19e128f12f271545eec7c",
        "start_survey": "survey_id"
      }
    }
  }
  ```

---

### `POST Create (Replys Only)`

```
/intent
```

#### Example Request

```shell
curl --location '/intent' \
--data '{
    "session_id": "",
    "access_token": "",
    "title": "Greetings Msgs",
    "keyword": "hello",
    "reply": "How are you doing?"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Intent created successfully!",
    "data": {
      "_id": "61b18f5e96140e23145547e9",
      "title": "Greetings Msgs",
      "keyword": "hello",
      "reply": "How are you doing?",
      "client_id": "61a7bd6ea34282366c025764",
      "createdAt": "2021-12-09T05:08:46.601Z",
      "updatedAt": "2021-12-09T05:08:46.601Z",
      "__v": 0
    }
  }
  ```

---

### `GET Get My Intents`

```
/intent
```

#### Example Request

```shell
curl --location --request GET '/intent' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Intent fetched successfully!",
    "data": [
      {
        "_id": "61b18f5e96140e23145547e9",
        "title": "Greetings Msgs",
        "keyword": "hello",
        "reply": "How are you doing?",
        "client_id": "61a7bd6ea34282366c025764",
        "createdAt": "2021-12-09T05:08:46.601Z",
        "updatedAt": "2021-12-09T05:08:46.601Z",
        "__v": 0
      }
    ]
  }
  ```

---

### `GET Get Single Intent`

```
/intent/61b18f5e96140e23145547e9
```

#### Example Request

```shell
curl --location --request GET '/intent/61b18f5e96140e23145547e9' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Intent fetched successfully!",
    "data": {
      "_id": "61b18f5e96140e23145547e9",
      "title": "Greetings Msgs",
      "keyword": "hello",
      "reply": "How are you doing?",
      "client_id": "61a7bd6ea34282366c025764",
      "createdAt": "2021-12-09T05:08:46.601Z",
      "updatedAt": "2021-12-09T05:08:46.601Z",
      "__v": 0
    }
  }
  ```

---

### `DEL Delete`

```
/intent/649ff9bce6046617c8aeac69
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

```json
{
  "status": true,
  "message": "Intent deleted successfully!",
  "data": {
    "n": 1,
    "ok": 1,
    "deletedCount": 1
  }
}
```

### `PUT Update`

```
/intent/61b192b8c08ae0401002c09d
```

#### Example Request

```shell
curl --location --request PUT '/intent/61b192b8c08ae0401002c09d' \
--data '{
    "session_id": "",
    "access_token": "",
    "title": "Greetings Msgs",
    "keyword": "hello,hi,cool",
    "reply": "How are you doing?!"
}'
```

#### Example Response

```json
{
  "status": true,
  "message": "Intent updated successfully!",
  "data": {
    "_id": "61b192b8c08ae0401002c09d",
    "title": "Greetings Msgs",
    "keyword": "hello,hi,cool",
    "reply": "How are you doing?!",
    "client_id": "61a7bd6ea34282366c025764",
    "createdAt": "2021-12-09T05:23:04.867Z",
    "updatedAt": "2021-12-09T05:32:54.985Z",
    "__v": 0
  }
}
```

---

<br>

We hope this guide provides you with the necessary information to create, get, and update intents using our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="index.md">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
