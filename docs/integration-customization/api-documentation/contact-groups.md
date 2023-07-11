<head>
<link rel="stylesheet" href="../../style.css">
</head>

# WAABOT-SDK APIs: Contact and Contact Groups

## Contacts

---

**AUTHORIZATION** Bearer Token

### `POST Create`

```
/contact
```

#### Example Request

```shell
curl --location '/contact' \
--header 'x-refresh;' \
--data '{
    "session_id": "",
    "access_token": "",
    "name": "Banky",
    "number": "1234556677",
    "group_id": "64a00ec7c5e487d95dcb0d5c"
}'
```

#### Example Response

- Status: 204 No Content

---

### `GET Get My Contacts`

```
/contact
```

#### Example Request

```shell
curl --location --request GET '/contact' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 204 No Content

---

### `GET Get Many Contacts (All)`

```
/contact?type=all
```

#### Example Request

```shell
curl --location --request GET '/contact?type=all' \
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
    "message": "Contact fetched successfully!",
    "data": [
      {
        "_id": "64a87271eccf5b76ca8e15ee",
        "name": "Joshua Mba",
        "number": "2347063516620",
        "client_id": "649ff7e0e6046617c8aeabf0",
        "group_id": "64a00ec7c5e487d95dcb0d5c",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-07-07T20:15:45.962Z",
        "updatedAt": "2023-07-07T20:15:45.962Z",
        "__v": 0
      },
      {
        "_id": "64a73926e3750e8b6dcbbb4a",
        "name": "Bankole Emmanuel",
        "number": "1234556677",
        "client_id": "649ff7e0e6046617c8aeabf0",
        "group_id": "64a00ec7c5e487d95dcb0d5c",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-07-06T21:59:02.743Z",
        "updatedAt": "2023-07-06T21:59:02.743Z",
        "__v": 0
      },
      {
        "_id": "64a174ed85381c056eec9d8f",
        "name": "Banky",
        "number": "1234556677",
        "client_id": "649ff7e0e6046617c8aeabf0",
        "group_id": "64a00ec7c5e487d95dcb0d5c",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-07-02T13:00:29.725Z",
        "updatedAt": "2023-07-02T13:00:29.725Z",
        "__v": 0
      },
      {
        "_id": "64a00ec7c5e487d95dcb0d5e",
        "name": "Barnks 2",
        "number": "2349048988056",
        "client_id": "649ff7e0e6046617c8aeabf0",
        "group_id": "64a00ec7c5e487d95dcb0d5c",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-07-01T11:32:23.733Z",
        "updatedAt": "2023-07-01T11:32:23.733Z",
        "__v": 0
      },
      {
        "_id": "647eee965abaa80698ad93cc",
        "name": "Joshua Mba",
        "number": "2347063516620",
        "client_id": "642cb299b6f8a5a12f2c59fe",
        "group_id": "6442478dba8ac3a303bd0c93",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-06-06T08:30:14.197Z",
        "updatedAt": "2023-06-06T08:30:14.197Z",
        "__v": 0
      },
      {
        "_id": "6457fabab2b141dd0421c582",
        "name": "Nellystasties",
        "number": "2349068050085",
        "client_id": "642cb299b6f8a5a12f2c59fe",
        "group_id": "6442478dba8ac3a303bd0c93",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-05-07T19:23:38.003Z",
        "updatedAt": "2023-05-07T19:23:38.003Z",
        "__v": 0
      },
      {
        "_id": "644f813db2b141dd0421beed",
        "name": "Nellystasties",
        "number": "status",
        "client_id": "642cb299b6f8a5a12f2c59fe",
        "group_id": "6442478dba8ac3a303bd0c93",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-05-01T09:07:09.259Z",
        "updatedAt": "2023-05-01T09:07:09.259Z",
        "__v": 0
      },
      {
        "_id": "6443df2eb2b141dd0421b654",
        "name": "Barnks 2",
        "number": "120363045767536459",
        "client_id": "642cb299b6f8a5a12f2c59fe",
        "group_id": "6442478dba8ac3a303bd0c93",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-04-22T13:20:46.436Z",
        "updatedAt": "2023-04-22T13:20:46.436Z",
        "__v": 0
      },
      {
        "_id": "6443a796b2b141dd0421b5b9",
        "name": "Barnks 2",
        "number": "2349048988056",
        "client_id": "642cb299b6f8a5a12f2c59fe",
        "group_id": "6442478dba8ac3a303bd0c93",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-04-22T09:23:34.802Z",
        "updatedAt": "2023-04-22T09:23:34.802Z",
        "__v": 0
      },
      {
        "_id": "64427594d3aea769e8d8c1fa",
        "name": "Mrbarnk",
        "number": "{Hi|Hello} [name] your message has no keyword here.",
        "client_id": "642cb299b6f8a5a12f2c59fe",
        "group_id": "6442478dba8ac3a303bd0c93",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-04-21T11:37:56.234Z",
        "updatedAt": "2023-04-21T11:37:56.234Z",
        "__v": 0
      },
      {
        "_id": "6442478dba8ac3a303bd0c95",
        "name": "Mrbarnk",
        "number": "2348179803743",
        "client_id": "642cb299b6f8a5a12f2c59fe",
        "group_id": "6442478dba8ac3a303bd0c93",
        "channel": "whatsapp",
        "transaction": {
          "survey_id": null,
          "survey_sort_id": null
        },
        "createdAt": "2023-04-21T08:21:33.088Z",
        "updatedAt": "2023-04-21T08:21:33.088Z",
        "__v": 0
      }
    ]
  }
  ```

---

### `GET Get Single Contact`

```
/contact/61b18f5e96140e23145547e9
```

#### Example Request

```shell
curl --location --request GET '/contact/61b18f5e96140e23145547e9' \
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
/contact/61b18f5e96140e23145547e9
```

#### Example Request

```shell
curl --location --request DELETE '/contact/61b18f5e96140e23145547e9' \
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
/contact/61b192b8c08ae0401002c09d
```

#### Example Request

```shell
curl --location --request PUT '/contact/61b192b8c08ae0401002c09d' \
--data '{
    "session_id": "",
    "access_token": "",
    "title": "Greetings Msgs",
    "keyword": "hello,hi,cool",
    "reply": "How are you doing?!"
}'
```

#### Example Response

- Status: 204 No Content

---

## Contact Groups

---

**AUTHORIZATION** Bearer Token

### `POST Create`

```
/contact_groups
```

#### Example Request

```shell
curl --location '/contact_groups' \
--data '{
    "session_id": "",
    "access_token": "",
    "title": "Group Name"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "ContactGroup group created successfully!",
    "data": {
      "is_default": false,
      "_id": "61b19db18f12f271545eec6f",
      "title": "Group Name",
      "client_id": "61a7bd6ea34282366c025764",
      "createdAt": "2021-12-09T06:09:53.064Z",
      "updatedAt": "2021-12-09T06:09:53.064Z",
      "__v": 0
    }
  }
  ```

---

### `GET Get My Groups`

```
/contact_groups
```

#### Example Request

```shell
curl --location --request GET '/contact_groups' \
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
    "message": "ContactGroup group fetched successfully!",
    "data": [
      {
        "_id": "61b19db18f12f271545eec6f",
        "is_default": false,
        "title": "Group Name",
        "client_id": "61a7bd6ea34282366c025764",
        "createdAt": "2021-12-09T06:09:53.064Z",
        "updatedAt": "2021-12-09T06:09:53.064Z",
        "__v": 0
      }
    ]
  }
  ```

---

### `GET Get Single Group`

```
/contact_groups/64a00ec7c5e487d95dcb0d5c
```

#### Example Request

```shell
curl --location --request GET '/contact_groups/61b19db18f12f271545eec6f' \
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
    "message": "ContactGroup group fetched successfully!",
    "data": {
      "_id": "61b19db18f12f271545eec6f",
      "is_default": false,
      "title": "Group Name",
      "client_id": "61a7bd6ea34282366c025764",
      "createdAt": "2021-12-09T06:09:53.064Z",
      "updatedAt": "2021-12-09T06:09:53.064Z",
      "__v": 0
    }
  }
  ```

---

### `DEL Delete`

```
/contact_groups/61b19db18f12f271545eec6f
```

#### Example Request

```shell
curl --location --request DELETE '/contact_groups/61b19db18f12f271545eec6f' \
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
    "message": "ContactGroup group deleted successfully!",
    "data": {
      "n": 1,
      "ok": 1,
      "deletedCount": 1
    }
  }
  ```

### `PUT Update`

```
/contact_groups/61b19e128f12f271545eec7c
```

#### Example Request

```shell
curl --location --request PUT '/contact_groups/61b19e128f12f271545eec7c' \
--data '{
    "session_id": "",
    "access_token": "",
    "title": "Updated Group Name"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "ContactGroup group updated successfully!",
    "data": {
      "is_default": false,
      "_id": "61b19e128f12f271545eec7c",
      "title": "Updated Group Name",
      "client_id": "61a7bd6ea34282366c025764",
      "createdAt": "2021-12-09T06:11:30.927Z",
      "updatedAt": "2021-12-09T06:11:59.867Z",
      "__v": 0
    }
  }
  ```

---

<br>

We hope this guide provides you with the necessary information to create, get, and update contacts and contact groups using our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="index.html">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
