## LinkShrink Chrome Extension

### Author
- **Author:** chessz

### Description
**LinkShrink** is a Chrome extension that allows users to quickly shorten URLs for easier sharing. With LinkShrink, you can easily generate shortened URLs using the Bitly API, making it convenient to share links on social media, in emails, or in any other context where space is limited or a cleaner appearance is desired.

### Features
- **One-click URL shortening** directly from your browser.
- **Customizable shortened URLs** for easy sharing.
- **Automatically copies the shortened URL** to your clipboard for quick pasting.
- **Ability to track click analytics** for shortened URLs (requires a Bitly account and access token).

### Installation
To install the LinkShrink Chrome extension, follow these steps:

1. Clone or download this repository to your local machine.
2. Extract the downloaded ZIP file.
3. Open Google Chrome and navigate to `chrome://extensions/`.
4. Enable **Developer mode** by toggling the switch in the top right corner.
5. Click on the **"Load unpacked"** button and select the directory where you extracted the extension files.
6. Once the extension is loaded, you should see the LinkShrink icon in your Chrome toolbar.

### Usage
1. Click on the LinkShrink icon in your Chrome toolbar to open the extension popup.
2. **Paste the long URL** you want to shorten into the input field.
3. Click the **"Shorten" button** to generate a shortened URL.
4. The shortened URL will be displayed in the popup and **automatically copied to your clipboard**.
5. You can now **paste the shortened URL** wherever you want to share it.

### Bitly Access Token
To enable URL shortening with Bitly and track click analytics, you'll need to obtain a Bitly access token. Follow these steps to get your Bitly access token:

1. Sign up for a Bitly account or log in if you already have one.
2. Navigate to [Bitly API settings](https://app.bitly.com/settings/api).
3. Generate an access token with the necessary permissions.
4. **Copy the access token**.

Next, replace the placeholder `YOUR_BITLY_ACCESS_TOKEN` in the `popup.js` file with your Bitly access token. Open the `popup.js` file and locate the following section:

```javascript
'Authorization': 'Bearer YOUR_BITLY_ACCESS_TOKEN',
