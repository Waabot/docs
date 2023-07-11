<head>
<link rel="stylesheet" href="../style.css">
</head>

# Installation for WAABOT-SDK

To begin using the WAABOT-SDK and start interacting with WhatsApp, follow these steps:
<br>

1. **Install the Package**: Make sure you have the WAABOT package installed in your project. You can do this by running either of the following commands, depending on your preferred package manager:

   ```javascript
   yarn add wasms-sdk
   ```

   ```javascript
   npm install wasms-sdk
   ```

2. **Import the Package**: In your JavaScript file, import the WAABOT package using the following code:

   ```javascript
   const { Waabot } = require("wasms-sdk");
   ```

3. **Create a New WhatsApp Instance**: To create a new WhatsApp instance, use the following code:

   ```javascript
   const waabot = new Waabot(config.accessToken, config.refreshToken);
   ```

Note: Make sure to refer to the [Authentication Page](authentication.md) to learn how to obtain your access token and refresh token.

4. **Set the Active Instance** After creating the WhatsApp instance, you need to set it as the active instance by providing the necessary configuration. Use the response received after creating the WhatsApp instance to set the configuration:

   ```javascript
   waabot.setConfig({
     session_id: createdWhatsappInstance.session_id,
     access_token: createdWhatsappInstance.settings.access_token,
   });
   ```

5. **Initialize the WhatsApp Instance**: To start using the WhatsApp instance, you need to initialize it. Use the following code:

   ```javascript
   const initializedWhatsapp = await waabot.initialize();
   ```

6. **Obtain necessary information**: To get the QR code required for authenticationR code as a base64 image, use the following code:

   ```javascript
   const getQrcode = await waabot.scanToBase64();
   ```

7. You can then display the obtained QR code in your frontend application, allowing users to scan it with their WhatsApp devices.

<br>

---

By following these steps, you can create a new WhatsApp instance, initialize it, and obtain the QR code for authentication. This will enable you to connect with WhatsApp and start interacting with it using the WAABOT-SDK.

<br><br>

<footer>
  <a class="next-page" href="authentication.html">Next <br>
  Authentication &rarr;</a>
</footer>
