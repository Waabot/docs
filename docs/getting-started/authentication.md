<head>
<link rel="stylesheet" href="../style.css">
</head>

# Authentication for WAABOT-SDK

Here are the authentication settings and the key functionalities for interacting with the WhatsApp API for WAABOT-SDK:

First, ensure that you've created and verified an account on [waabot.com](https://waabot.com). The detailed steps are on the [Prerequisites Page](introduction/prerequisites.md). If you encounter any issues during the registration process or require further assistance, please reach out to our support team at [support@waabot.com](mailto:support@waabot.com) for prompt assistance.

## Create Credentials

To get started with the SDK, follow these steps to create your credentials:

1. Go to [waabot.com](https://waabot.com/) using your preferred web browser and create an account.
2. Use the credentials obtained during the account creation process to create a session.

## Creating a Session

To create a session for API access, follow these steps:

Endpoint: `https://api.waabot.com/api/v1/sessions`

```json
{
  "email": "your-account-email",
  "password": "your-account-password"
}
```

Make a POST request to the provided endpoint with the JSON payload, replacing "your-account-email" and "your-account-password" with your actual account credentials. Save the session details, including the `accessToken` and `refreshToken` from the response, to a secure location or a `.env` file.

## Initializing the WhatsApp Client

To initialize the WhatsApp client and start interacting with the API, follow these steps:

```javascript
const { Waabot } = require("wasms-sdk");
const waabot = new Waabot(config.accessToken, config.refreshToken);
const chatId = "15417543010";
const chat = {
  chatId,
  fullname: "Chat Name",
  displayName: "Display Name",
  organization: "Organization",
  phoneNumber: chatId,
};
const message = "This is the message to be sent!";
```

1. Import the `Waabot` class from the SDK.

2. Create a new instance of `Waabot` by passing the `accessToken` and `refreshToken` obtained from the session creation step.

3. Define a `chat` object with the necessary details, such as `chatId`, `fullname`, `displayName`, `organization`, and `phoneNumber`.

4. Set the `message` variable with the desired content of the message to be sent.

## Creating a WhatsApp Instance

To create a WhatsApp instance, use the following code:

```javascript
const response = await waabot.whatsapp.createNew();
The response will contain the settings and details of the newly created instance.
```

## Configuring the WhatsApp Instance

To configure the WhatsApp instance, use the following code:

```javascript
waabot.setConfig({
  session_id: "464c3391-dee7-4206-ad13-d75ffb7498a0",
  access_token: "0b375583-b9c7-4a86-b95c-7e5064326778",
});
```

Replace the `session_id` and `access_token` with the appropriate values you want to use for the rest of the requests.

## Sending Text Messages

To send a text message, use the following code:

```javascript
await waabot.whatsapp.sendTextMessages({ chatId, message });
```

## Sending a List Message

To send a list message, use the following code:

```javascript
await waabot.whatsapp.sendListMessage({
    chatId,
    msgdata: {
        buttonText: "Button Text",
        text: "Middle Text",
        title: "Head Title",
        description: "Footer Description",
        sections: [
            {
                title: "title",
                rows: [
                    {
                        title: "Title Option 1",
                        description: "Option Description",
                        rowId: "string"
                    }
                ]
            }
​
​
        ],
        "listType": 0
    }
});
```

## Sending a Contact

To send a contact, use the following code:

```javascript
await waabot.whatsapp.sendContact({
  chatId,
  vcard: {
    fullName: chat.fullname,
    displayName: chat.displayName,
    organization: chat.organization,
    phoneNumber: chat.phoneNumber,
  },
});
```

Note: The provided code snippets are examples and may need to be modified to fit your specific implementation and requirements.
​

<br> <br>

<footer>
  <a class="prev-page" href="/installation.md">&larr; Previous <br>
  Installation</a>
   <a class="next-page" href="/chatbot.md">&rarr; Next <br>
  ChatBot</a>
</footer>
