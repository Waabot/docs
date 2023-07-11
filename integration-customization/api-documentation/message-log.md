<head>
<link rel="stylesheet" href="../../style.css">
</head>

# Message Log

**AUTHORIZATION** Bearer Token

### `GET Get All`

```
/message-log?page=1&limit=10
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

### `GET Get All (For All Bots)`

```
/message-log?type=all&page=1&limit=10
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
/message-log/61b1b55ca29cc051b494dd4f
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

---

<br>

We hope this guide provides you with the necessary information to get all message logs using our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="index.md">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
