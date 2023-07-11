<head>
<link rel="stylesheet" href="../../style.css">
</head>

# Attachment

---

**AUTHORIZATION** Bearer Token

### `POST Create`

```
/attachment
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
    "message": "Attachment created successfully!",
    "data": "data:image/jpeg;base64,/9j/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCACRAG4DASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAUCAwABBgf/xAA4EAACAQMDAgUDAQYEBwAAAAABAgMABBESITEFQRMiUWFxBhQygSMzQlKhsRU0U4JicnPBwtHw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AO/Y1rNaNRzVRImok1o1rNBhagLjqcMcxt4w00/dEHHye1S6pcm2sZHQgOfKh9ztVHSbeKKACNck8seWPzQExtducuiIPTmiV1Ab7mpAbVsjag1nIqmTvQt5eNBcRKNwWAain3FAsvWwDilpnKt6Uzuo8t3xSK7JSQjeoDGu9uKq+7OeaCMh081DxMneivQCa1mtE1BmwKqJM2KpZ8VXJcKvJpfP1BRkZ4oKPqWTVYxnfCzKT/WjOhXAls1BByKRdcufuLLEbHyMGI9RQfTPqAWLAEMyd1Pb4NQd8Grea53qHXLi1KLFZu/iYKycqQaLsupvdFD4EyhhnLJiqK+o28jdSDxjUpHHvTMsQMEEH0qMrPp1wxh3A4Laf60OAsY8ildXmKk5wTQZMMnNc71QYm2NdBI/lrnuqPm49sUAOo4xWZqBc4O1RV887VlXpBFCXkoijJNGE7Un6tJiM1pCm7vWyTnalM1yxYkmrJZCWNL5SdRqKnLcMVZQc5FUokTGNVJGpgDkcVAtipwpAYpGnkKHA8PA71B6FcwwTWgSYHQAPMP4fetoTAixqgI4yKQ9HvrCNVe4vnldV0gODt+lPbZkK/snDwn8CDx7VpFjTC3gDyKxycHSM4oeV9TFhtmiZEMoKD4pU91GtzJbZ/E4VuzUFryDHNIOqt+3z7U0kbY5pN1AhnzmgFzk7natZ32qonbOa0rE96yr09uKSdax4Rp024pN1lC0RrSOXk70DN+R3oubK534oKTkk1FVMcUz6DFbXU4huFDFW1AHgilTmst5XinWSNirKcgioPTIbO3RQIowBjirdAT8RufQVxkP1F1MW+YYVcF9AcgnfGwxXVdNjuoLQ3PVJ9UxXUw4WMenzWkW3c62VozsR4r7IPeuSmnDNp7981Lq3U2u7/VkhEU6V9AaUyznVnJoGIupVcITqUnSM9qquo5mbZCR7UMJGMq8kEZB9TRv3ASEktudgKgBdGQYZSPkVWNqckobfzoGP9zSuePS+pVZVPYjipVelEYFL74BkIIpk9Lbkq8vggjWQSAe9aRx1+umVgKXSA75FdFLHbm6khuwI9f7uX+VvQ0v6laG1LRuBkcEdx61Alb4qsirJPSogZOBxUU56H1hbGe3glRftg+qQ4yS3Zv0p39SdXWQi0tpAYwAXZTkMew+Kobo1rZfScst1p+4kAcOBkg/wgVzi4AA4qomGLvKc98UO75J7URCA3inPDUM6DOffmgJVjGYmDEow0n2IrcjnxYkOec1CFwtvolB0O2Qw7MKhckllfO470Dnw45WVXGSRsAeKvEIUYGw+aSR3lxnYgn1FH217LvrAPzRXc3rT+A32oUy7adRwPeuUu5+pnrUcRuIoZdBH5ahg/pXV6iW5rgupTTLdzx3ABKyMdPBU55BpUO4uju7I1xe+HMWBUBAQcH1yal9XwBenwS7a0fSSO4Na+nJ57uz0yvJIkRwnk/H5apfVTyHpWlIyVDgu3pVHFMdRqSjz4/SoqCSB6msJ8x+ayp51jqy3trZWkOfDhiBfPd8Y/pSoZBqtTVq4I96ostR5p0PNDy6gCM8URAALnGThl2+aouAQ5HNEbhlUDw3Hkcb+x9ayZCmUJz6H1qduYzF4co5Oxq+SHxLXytqKfj8UUDG5Vhg70xtXQqQ2R+lK8b0TC5A5qD0zbNLerdItr/9rnwrgDAkG+fkd6NjfLYyKG6rcrDbu2RkKcVpCDpvUvtZfBitVaYMVLqMBvfFHdduFg6W0bHMlyQBnkgbk/HAq2z6ZHcxWHU3kEcSWw8bHLEcVzPWOoNf38k+NKKNMa/yqOKgXRDMnsN6rVSx96tj2R29sVFFbTqAOM4yKitYZdsVNSeKkHyu44rBzuKotfyyRnIGnc1G6XOSMZqTqJCSdtu1aY+Lbg5yQN6I1bx64vcHaiodUbgNVFlKEOk4wfWmEnhsASM98qKBVdp4c5wNm3FRQ+1E3mHiVgODih41qVXVTX7Rk6TSq+vpZ2858vpRl1HhjSydaC7/ABSX/CR09iGVW1I2eB6Upk/LSO9Wsu+RzWoRqn3FBj+SDTtljV7RJHFEpRcugYnv3/8Av0qi5GXwDsKLvY2+80lsYVR8eUVUDvEAuRUVQ43qwhgO5FYCp24NBqNN8Emqom8OR0PBouBNR8vNVXtuYyJQeTuPSgp0HJx2omCd4vIdxniprEDb/cJuMeYelUu64oC3iSaM6Tue1BrEyuVYcVZAXZsRk4757UcSuMSg4PDCopte27YJxSeZME12N9a4Q4Fc1dQkE7VUJJVwTWWoxKT7GiZYjneowxgM+f5aKEfzMaM6isovGIUkaVOf9oqlI/OSdscU1udJaJmOC8SnP6UQoSVlbcEVf4iMgDKpz7UWUT/UQg+tYY44odKujF922/Edh80Ai+Gg1KCCeAK09tLMv8WewNEKiZ2Zyf8AhTNExI7YHhSHHdiFFAqieW0ZozweRUvBjkI8JjvuR6U1mtklTEpXI4CD/vTCy+n1tbB7u4BeUqSEH8K/+8UCONQiBVXaioGwuGAI7ZqDxgNhTkZ2PrVsaEc1Fdrefga5m9/eVlZWkKpqqj5f4rKyoqsc0Vd/5Wz/AOl/5GsrKID7UU/70/p/asrKAq35/Wrk7/NZWVRIct/t/vXUXn+Uk/5D/asrKDi4vyf5NXnmsrKiv//Z"
  }
  ```

---

### `GET Get All`

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
/attachment/61b1b55ca29cc051b494dd4f
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

### `DEL Delete`

```
/attachment/61b1b55ca29cc051b494dd4f
```

#### Example Request

```shell
curl --location --request DELETE '/attachment/61b1b55ca29cc051b494dd4f' \
--data '{
    "session_id": "",
    "access_token": ""
}'
```

#### Example Response

- Status: 204 No Content

---

<br>

We hope this guide provides you with the necessary information to create, get, and delete attachments using our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="../../api-documentation/index.md">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
