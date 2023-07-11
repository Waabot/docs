<head>
<link rel="stylesheet" href="../../style.css">
</head>

# Whatsapp/Bots

The "Whatsapp/Bots" endpoints in our API allow developers to integrate and interact with WhatsApp for building powerful chatbot experiences. With these endpoints, you can leverage the capabilities of WhatsApp to automate conversations, provide information, and engage with users.

## Settings

---

**AUTHORIZATION** Bearer Token

### `PUT Update General Info`

```
/whatsapp/updateGeneral
```

#### Example Request

```shell
curl --location --request PUT '/whatsapp/updateGeneral' \
--header 'x-refresh;' \
--data '{
    "bot_name": "Bot Name",
    "bot_timezone": "+1",
    "bot_lang": "en",
    "default_msg": true
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Whatsapp settings updated successfully!",
    "data": {
      "acknowledged": true,
      "modifiedCount": 0,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 0
    }
  }
  ```

---

### `PUT Update Bot Actions`

```
/whatsapp/updateActions
```

#### Example Request

```shell
curl --location --request PUT '/whatsapp/updateActions' \
--header 'x-refresh;' \
--data '{
    "send_default_msg": true,
    "reply_group_msgs": true,
    "reply_unread_msgs": true,
    "reply_msgs": true,
    "multi_device": true,
    "send_webhook": true
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Whatsapp settings updated successfully!",
    "data": {
      "acknowledged": true,
      "modifiedCount": 0,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 0
    }
  }
  ```

---

### `PUT Update Active Days`

```
/whatsapp/updateActiveDays
```

#### Example Request

```shell
curl --location --request PUT '/whatsapp/updateActiveDays' \
--header 'x-refresh;' \
--data '{
    "monday": true,
    "tuesday": true,
    "wednesday": true,
    "thursday": true,
    "friday": true,
    "saturday": true,
    "sunday": true
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Whatsapp settings updated successfully!",
    "data": {
      "acknowledged": true,
      "modifiedCount": 0,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 0
    }
  }
  ```

---

### `PUT Update Active Hours`

```
/whatsapp/updateActiveHours
```

#### Example Request

```shell
curl --location --request PUT '/whatsapp/updateActiveHours' \
--header 'x-refresh;' \
--data '{
    "from": "00:00",
    "to": "5:00"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Whatsapp settings updated successfully!",
    "data": {
      "acknowledged": true,
      "modifiedCount": 0,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 0
    }
  }
  ```

---

### `PUT Set Webhook`

```
/whatsapp/setWebhook
```

#### Example Request

```shell
curl --location --request PUT '/whatsapp/setWebhook' \
--header 'x-refresh;' \
--data '{
    "session_id": "",
    "access_token": "",
    "webhook_url": "https://eoy4r2ybzzfdw9y.m.pipedream.net",
    "events": [
        "onMessage",
        "onAnyMessage"
    ],
    "requestConfig": {}
}'
```

#### Example Response

- Status: 204 No Content

---

## Instance Bot

---

**AUTHORIZATION** Bearer Token

### `POST Create(Require Auth)`

```
/whatsapp/createNewWhatsapp
```

#### Example Request

```shell
curl --location '/whatsapp/createNewWhatsapp' \
--header 'x-refresh;' \
--data '{}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Whatsapp created successfully!",
    "data": {
      "settings": {
        "bot_name": "WhatsappClient (bot_number)",
        "status": "CONNECTED",
        "bot_timezone": "Africa/Harare",
        "bot_lang": "en",
        "default_msg": "{Hi|Hello} [name] your message has no keyword here.",
        "actions": {
          "send_default_msg": true,
          "reply_group_msgs": true,
          "reply_unread_msgs": true,
          "reply_msgs": true,
          "multi_device": false,
          "send_webhook": false
        },
        "active_days": {
          "monday": true,
          "tuesday": true,
          "wednesday": true,
          "thursday": true,
          "friday": true,
          "saturday": true,
          "sunday": true
        },
        "active_hours": {
          "from": "always",
          "to": "always"
        },
        "access_token": "0184-28a5-439a-a1cd-fc6f"
      },
      "_id": "61c08cdf2ff357329471bbb1",
      "user_id": "61bbdbe3087d744b748535ff",
      "session_id": "2ad8-07c9-447b-994d-eb8b",
      "createdAt": "2021-12-20T14:02:07.472Z",
      "updatedAt": "2021-12-20T14:02:07.472Z",
      "__v": 0
    }
  }
  ```

---

### `POST Init Instance`

```
/whatsapp/init
```

Init a new WhatsApp instance

#### Example Request

```shell
curl --location '/whatsapp/init' \
--header 'x-refresh;' \
--data '{
    "session_id": "",
    "access_token": "",
    "config": {
        "multiDevice": true,
        "setWebhook": true,
        "webhookUrl": "valid_url"
    }
}'
```

#### Example Response

- Status: 204 No Content

---

### `GET Scan QR`

```
/whatsapp/scan?session_id=&access_token=
```

Get an instance QrCode

#### Example Request

```shell
curl --location '/whatsapp/scan?session_id=&access_token=' \
--header 'x-refresh;'
```

#### Example Response

- Status: 204 No Content

---

### `GET Get QR in Base64`

```
/whatsapp/scan?session_id=&access_token=&format=base64text
```

#### Example Request

```shell
curl --location '/whatsapp/scan?session_id=&access_token=&format=base64text'
```

#### Example Response

- Status: 204 No Content

---

### `GET Get one instance Info(Connected Status and Phone Number)`

```
/whatsapp/instance/?session_id=&access_token=&format=base64
```

#### Example Request

```shell
curl --location --request GET '/whatsapp/instance?session_id=&access_token=&format=base64' \
--header 'x-refresh;' \
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
    "message": "Status checked successfully",
    "data": {
      "error": false,
      "message": "Instance fetched successfully",
      "instance_data": {
        "instance_key": "a1c91084-fa2e-43b8-8d52-3d98f65a0495",
        "phone_connected": true,
        "webhookUrl": null,
        "user": {
          "id": "2349040613521:8@s.whatsapp.net",
          "name": "Waap Test"
        }
      }
    }
  }
  ```

---

### `DEL Delete Instance`

```
/whatsapp/61a7bd6ea34282366c025764
```

#### Example Request

```shell
curl --location --request DELETE '/whatsapp/61a7bd6ea34282366c025764'
```

#### Example Response

- Status: 204 No Content

---

### `GET Logout Instance`

```
/whatsapp/instance/logout/61a7bd6ea34282366c025764?session_id=&access_token=
```

Logout WhatsApp session from mobile

#### Example Request

```shell
curl --location '/whatsapp/instance/logout/61a7bd6ea34282366c025764?session_id=&access_token='
```

#### Example Response

- Status: 204 No Content

---

### `GET Get All Instances`

```
/whatsapp
```

#### Example Request

```shell
curl --location --request GET '/whatsapp' \
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
    "message": "Whatsapp fetched successfully!",
    "data": [
      {
        "_id": "61a7bd6ea34282366c025764",
        "settings": {
          "bot_number": "2349011668758",
          "bot_name": "WhatsappClient (2349011668758)",
          "status": "CONNECTED",
          "bot_timezone": "+1",
          "default_msg": "{Hi|Hello} [name] your message has no keyword here.",
          "actions": {
            "send_default_msg": true,
            "reply_group_msgs": true,
            "reply_unread_msgs": true,
            "reply_msgs": true,
            "multi_device": true,
            "send_webhook": false
          },
          "active_days": {
            "monday": true,
            "tuesday": true,
            "wednesday": true,
            "thursday": true,
            "friday": true,
            "saturday": true,
            "sunday": true
          },
          "active_hours": {
            "from": "always",
            "to": "always"
          },
          "access_token": "d451-5a9b-45d8-86a9-0b7f"
        },
        "session_id": "8813-8991-4646-bae1-6bf1",
        "createdAt": "2021-12-01T18:22:38.228Z",
        "updatedAt": "2021-12-05T10:56:42.382Z",
        "__v": 0
      }
    ]
  }
  ```

---

## Message

---

**AUTHORIZATION** Bearer Token

### `POST Send Text Message`

```
/whatsapp/message?session_id=&access_token=
```

Send a text message to WhatsApp User or Group

#### Example Request

```shell
curl --location '/whatsapp/message?session_id=&access_token=' \
--header 'x-refresh;' \
--data '{
    "session_id": "",
    "access_token": "",
    "chatId": "",
    "message": "Hello dear",
    "attachments": [
        "64ac311eee05a1a2c27fbdb5",
        "64ac265749240c35b96cb78c"
    ],
    "location": {
        "name": "locationName",
        "lat": "6.556452",
        "lng": "3.2774487"
    },
    "contactId": "64a00ec7c5e487d95dcb0d5e"
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Message sent successfully",
    "data": {
      "message": {},
      "attachment": ["64ac311eee05a1a2c27fbdb5", "64ac265749240c35b96cb78c"],
      "contact": {
        "contactMessage": {
          "displayName": "Barnks 2",
          "vcard": "BEGIN:VCARD\nVERSION:3.0\nFN:Barnks 2\nORG:undefined;\nTEL;type=CELL;type=VOICE;waid=2349048988056:2349048988056\nEND:VCARD"
        }
      },
      "image": {},
      "buttons": {},
      "location": {
        "locationMessage": {
          "degreesLatitude": 6.556452,
          "degreesLongitude": 3.2774487
        }
      }
    }
  }
  ```

---

### `POST Send Image Message`

```
/whatsapp/message/image?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/image?session_id=&access_token=' \
--form 'file=@"/C:/Users/Mrbarnk/Downloads/Nvestos/1_dark - Copy (2).png"' \
--form 'chatId=""' \
--form 'caption="Yo"'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Message sent successfully",
    "data": {
      "key": {
        "remoteJid": "2349048988056@s.whatsapp.net",
        "fromMe": true,
        "id": "BAE59F1807A62E0D"
      },
      "status": "PENDING",
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m230/up-oil-image-db060f78-7485-413a-b2eb-256e7bf45270?ccb=9-4&oh=01_AdQPcsanCmR2R7x9Ypyx_DdT36qw5pwomRlu1KytbnslgQ&oe=64D365F3&mms3=true",
          "mimetype": "image/png",
          "caption": "Yo",
          "fileSha256": "tXTkGZ3uFbdD5JW1TvNxHE55mA3pEtfwetxC83K75sg=",
          "fileLength": "130722",
          "height": 653,
          "width": 590,
          "mediaKey": "Cy878j15uftMGhFdbITi9g7b3/rRF1oLEJnfBDFZbwI=",
          "fileEncSha256": "1/Jnz/rZjcmB5Oy1x0gxt1S6tOE0QPEfKkCBkt+zunw=",
          "directPath": "/o1/v/t62.7118-24/f1/m230/up-oil-image-db060f78-7485-413a-b2eb-256e7bf45270?ccb=9-4&oh=01_AdQPcsanCmR2R7x9Ypyx_DdT36qw5pwomRlu1KytbnslgQ&oe=64D365F3",
          "mediaKeyTimestamp": "1688996225",
          "jpegThumbnail": "/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAkACADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABgcABAUB/8QALBAAAgAFAgQEBwEAAAAAAAAAAQIAAwQFERIhBgcxURMiQWEUMjRUY4Gyof/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAAxIXH/2gAMAwEAAhEDEQA/AD5mCjeMbimoKcN1zIzIfDxlTvgkAwvm4lvU2axFymruTjYDr6bRbpbxX3CzXiTWVDTlSnDDVjY6wIuDEdcAzF1lCfK2MZ/WYYXL2c82xzdbEhZ5AHYYELgqT105PvDD5dNizT1P3B/kQ4AEU2pNSvnbJ2+X2MX7SumgvA2+lX0/IsVFAEtdSpkjIwR/vvG7wXTSayurqefLDSplNhlz18w7QAw6ksds/qGBy+yLPP7/ABB/kRcHCNnxjwZu/wCVo17Xaqa10/g0ssohbUQWLEnuSYsWFTcZa0dyqqaXlklTGVdXXGfaCvl1TI5rKpidYxLA9MHeJEjKDgKF6COxIkB//9k="
        }
      },
      "messageTimestamp": "1688996225"
    }
  }
  ```

---

### `POST Send Video Message`

```
/whatsapp/message/video?session_id=&access_token=
```

Send a video message to WhatsApp User

#### Example Request

```shell
curl --location '/whatsapp/message/video?session_id=&access_token=' \
--form 'file=@"/path/to/file"' \
--form 'chatId=""' \
--form 'caption=""'
```

#### Example Response

- Status: 204 No Content

---

### `POST Send Audio Message`

```
/whatsapp/message/audio?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/audio?session_id=&access_token=' \
--form 'file=@"/path/to/file"' \
--form 'chatId=""'
```

#### Example Response

- Status: 204 No Content

---

### `POST Send Document Message`

```
/whatsapp/message/doc?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/doc?session_id=&access_token=' \
--form 'file=@"/path/to/file"' \
--form 'chatId=""' \
--form 'filename=""'
```

#### Example Response

- Status: 204 No Content

---

### `POST Send File URL`

```
/whatsapp/message/fileurl?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/fileurl?session_id=&access_token=' \
--form 'chatId="2349048988056"' \
--form 'url="https://images.unsplash.com/photo-1597431793715-b4b71ddb5670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Nzc2MTY4NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"' \
--form 'type="image"' \
--form 'mimetype="image/jpeg"' \
--form 'caption="Caption"'
```

#### Example Response

- Status: 204 No Content

---

### `POST Send Button(Template) Message

```
/whatsapp/message/button?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/button?session_id=&access_token=' \
--header 'Content-Type: application/json' \
--data '{
    "chatId": "",
    "btndata": {
        "text": "title Head",
        "buttons": [
            {
                "type": "replyButton",
                "title": "Reply this text (REPLY)"
            },
            {
                "type": "urlButton",
                "title": "Click me (URL)",
                "payload": "https://google.com"
            },
            {
                "type": "callButton",
                "title": "Click to call (CALL)",
                "payload": "918788889688"
            }
        ],
        "footerText": "title footer"
    }
}'
```

#### Example Response

- Status: 204 No Content

---

### `POST Send Contact Message`

```
/whatsapp/message/contact?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/contact?session_id=&access_token=' \
--data '{
    "chatId": "2348179803743",
    "vcard": {
        "fullName": "john doe",
        "displayName": "johndoe",
        "organization": "Men In Black",
        "phoneNumber": "919999999999"
    }
}'
```

#### Example Response

- Status: 204 No Content

---

### `Send List Message`

```
/whatsapp/message/list?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/list?session_id=&access_token=' \
--header 'x-refresh;' \
--data '{
  "chatId": "2349048988056",
  "msgdata": {
    "buttonText": "Button Text",
    "text": "Middle Text",
    "title": "Head Title",
    "description": "Footer Description",
    "sections": [
      {
        "title": "title",
        "rows": [
          {
            "title": "Title Option 1",
            "description": "Option Description",
            "rowId": "string"
          }
        ]
      }
    ],
    "listType": 0
  }
}'
```

#### Example Response

- Status: 204 No Content

---

### `POST Send Button With Media`

```
/whatsapp/message/MediaButton?session_id=&access_token=
```

#### Example Request

```shell
curl --location '/whatsapp/message/MediaButton?session_id=&access_token=' \
--data '{
    "chatId": "2348179803743",
    "btndata": {
        "text": "Title of Message",
        "buttons": [
            {
                "type": "replyButton",
                "title": "this button reply"
            },
            {
                "type": "callButton",
                "title": "this button calls",
                "payload": "91999999999"
            }
        ],
        "footerText": "Footer text",
        "image": "https://picsum.photos/536/354",
        "mediaType": "image",
        "mimeType": "image/jpeg"
    }
}'
```

#### Example Response

- Status: 204 No Content

---

### `POST Send Text(Depreciated)`

```
/whatsapp/message/sendText
```

#### Example Request

```shell
curl --location '/whatsapp/sendText' \
--data '{
    "session_id": "",
    "access_token": "",
    "to": "2348179803743",
    "message": "Hello sir 3."
}'
```

#### Example Response

- Status: 200 OK
- Body:
  ```json
  {
    "status": true,
    "message": "Message sent successfully",
    "data": "true_2348179803743@c.us_3EB015715C3A6439227F"
  }
  ```

---

<br>

We hope this guide provides you with the necessary information to create WhatsApp bots and send messages using our API. If you have any questions or need further assistance, please feel free to contact our support team.

<br> <br>

<footer>
  <a class="prev-page" href="../../api-documentation/index.md">Previous <br>
  Go back to the API Documentation Index &larr;</a>
</footer>
