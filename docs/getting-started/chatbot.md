<head>
<link rel="stylesheet" href="../style.css">
</head>


# Chatbot Interaction for WAABOT-SDK

To interact with the ChatBot functionality of the WAABOT-SDK, use the `intent` property from the instantiated `waabot` class. Here are some examples of available methods:

## Adding a New Keyword for Auto Replies

To add a new keyword and its corresponding auto reply, use the following code:

```javascript
const intent = waabot.intent;

const createdAutoReply = intent.add({
    title: "test auto reply title",
    keyword: "this keyword",
    reply: "Response",
    action: {}
});
```

## Finding and Deleting Auto Replies

To find and delete an auto reply by its ID, use the following code:

```javascript
// Find one auto reply
const foundAutoReply = await waabot.intent.getOne(createdAutoReply._id);

// Delete an auto reply
await waabot.intent.deleteOne(createdAutoReply._id);
```

## Settings Interaction

The WAABOT-SDK provides methods to interact with various settings. Here are some examples:

### Setting Default Replies

To set the default reply message, use the following code:

```javascript
const response = await waabot.settings.setDefaultReply({ default_msg: "{Hi|Hello} [name] I can't find a reply for your message." });
```

### Turning Off Group Replies

To turn off group auto replies, use the following code:

```javascript
const response = await waabot.settings.turnOffGroupAutoreplies();
```

### Turning On ChatBot

To turn on the ChatBot functionality, use the following code:

```javascript
const response = await waabot.settings.turnOnChatbot();
```

### Turning On Group Replies

To turn on group replies, use the following code:

```javascript
const response = await waabot.settings.turnOnGroupReplies();
```

### To Listen to Message events

To listen to message events, use the following code.

```javascript
const response = await waabot.settings.setWebhookUrl("https://webhook.site/ca0fa48b-aa9f-4614-8e11-fd916b4a8fad");
```

## Action Types

```json
// Buttons
action: {
    send_button: [
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
    ]
}

// Locations
"send_location": {
    "lat": "51.5074",
    "lng": "0.1278",
    "loc": "London!"
},

// send contact
"send_contact": {
    "name": "Banky",
    "number": "2348123343433"
},

// and the rest
"send_file": "attachment_id",
"send_photo": "attachment_id",
"send_notification": {
    "email": "mrbarnk1@gmail.com",
    "whatsapp_number": "2348179803743"
},
"add_to_group": "61b19e128f12f271545eec7c",
"start_survey": "survey_id"
```

These examples demonstrate how to interact with the ChatBot and various settings using the WAABOT-SDK. Please note that the provided code snippets are examples and may require modifications based on your specific implementation and requirements.


<br> <br>

<footer>
  <a class="prev-page" href="installation.md">&larr; Previous <br>
  Installation</a>
</footer>

