<head>
<link rel="stylesheet" href="../../style.css">
</head>

# WAABOT-SDK APIs: Broadcasts/Messages

**AUTHORIZATION** Bearer Token

### `GET Get All`

```
/broadcast
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

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Attachment fetched successfully!",
    "data": [
      {
        "_id": "61b1b13ebc13b707882c7657",
        "type": "jpeg",
        "mimetype": "image/jpeg",
        "name": "JCEVJKGEFKSMR8W",
        "path": "./public/attachments/JCEVJKGEFKSMR8W.jpeg",
        "createdAt": "2021-12-09T07:33:18.698Z",
        "updatedAt": "2021-12-09T07:33:18.698Z",
        "__v": 0
      },
      {
        "_id": "61b1b1e0e914222a588e63fa",
        "type": "jpeg",
        "mimetype": "image/jpeg",
        "name": "PNUQZIGUER5RASG",
        "path": "./public/attachments/PNUQZIGUER5RASG.jpeg",
        "createdAt": "2021-12-09T07:36:00.760Z",
        "updatedAt": "2021-12-09T07:36:00.760Z",
        "__v": 0
      },
      {
        "_id": "61b1b29b4b8b922d88c56dfe",
        "type": "jpeg",
        "mimetype": "image/jpeg",
        "name": "JRVKY261K0GUKAD",
        "path": "./public/attachments/JRVKY261K0GUKAD.jpeg",
        "createdAt": "2021-12-09T07:39:07.503Z",
        "updatedAt": "2021-12-09T07:39:07.503Z",
        "__v": 0
      },
      {
        "_id": "61b1b2eb50ff9d6c4cedbbd0",
        "type": "jpeg",
        "mimetype": "image/jpeg",
        "name": "7K51D3GOCZ3LZP8",
        "path": "./public/attachments/7K51D3GOCZ3LZP8.jpeg",
        "createdAt": "2021-12-09T07:40:27.760Z",
        "updatedAt": "2021-12-09T07:40:27.760Z",
        "__v": 0
      },
      {
        "_id": "61b1b55ca29cc051b494dd4f",
        "type": "jpeg",
        "mimetype": "image/jpeg",
        "name": "IIETQZEPT3EPLWC",
        "path": "./public/attachments/IIETQZEPT3EPLWC.jpeg",
        "client_id": "61a7bd6ea34282366c025764",
        "createdAt": "2021-12-09T07:50:52.071Z",
        "updatedAt": "2021-12-09T07:50:52.071Z",
        "__v": 0
      }
    ]
  }
  ```

---

### `GET Get One`

```
/broadcast/61b1b55ca29cc051b494dd4f
```

#### Example Request

```shell
curl --location --request GET '/attachment/61b1b55ca29cc051b494dd4f' \
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
    "message": "Attachment fetched successfully!",
    "data": {
      "_id": "61b1b55ca29cc051b494dd4f",
      "type": "jpeg",
      "mimetype": "image/jpeg",
      "name": "IIETQZEPT3EPLWC",
      "path": "./public/attachments/IIETQZEPT3EPLWC.jpeg",
      "client_id": "61a7bd6ea34282366c025764",
      "createdAt": "2021-12-09T07:50:52.071Z",
      "updatedAt": "2021-12-09T07:50:52.071Z",
      "__v": 0
    }
  }
  ```

### `DEL Delete`

```
/broadcast/61b1b55ca29cc051b494dd4f
```

#### Example Request

```shell
curl --location --request DELETE '/broadcast/61b1b55ca29cc051b494dd4f' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 204 No Content

---

### `POST Create`

```
/broadcast
```

#### Example Request

```shell
curl --location '/broadcast' \
--data '{
    "session_id": "",
    "access_token": "",
    "send_type": "individual",
    "to": "2348179803743,2349048988056",
    "message": {
        "text": "New Test Broadcasts text",
        "attachments": [
            "64ac311eee05a1a2c27fbdb5",
            "64ac265749240c35b96cb78c"
        ],
        "location": {
            "name": "optional",
            "lat": "6.556452",
            "lng": "3.2774487"
        },
        "contactId": "64a00ec7c5e487d95dcb0d5e"
    }
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Broadcast group created successfully!",
    "data": {
      "client_id": "649ff7e0e6046617c8aeabf0",
      "send_type": "individual",
      "to": "2348179803743,2349048988056",
      "message": {
        "text": "New Test Broadcasts text",
        "attachments": ["64ac311eee05a1a2c27fbdb5", "64ac265749240c35b96cb78c"],
        "location": {
          "name": "optional",
          "lat": "6.556452",
          "lng": "3.2774487"
        },
        "contactId": "64a00ec7c5e487d95dcb0d5e"
      },
      "status": "sending",
      "sent": [],
      "pending": [],
      "failed": [],
      "_id": "64ac509d05a7cc2b8c2bd9ab",
      "createdAt": "2023-07-10T18:40:29.784Z",
      "updatedAt": "2023-07-10T18:40:29.784Z",
      "__v": 0
    }
  }
  ```

---

<br>

We hope this guide provides you with the necessary information to create, get, and delete broadcasts/messages using our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="index.html">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
