# Bloom & Bind

Bloom & Bind is a single-page flower shop demo where customers can build a bouquet, add gifts, choose wrapping, and enter delivery details.

## Features

- Browse, search, and filter flowers by collection.
- Adjust flower quantities and add gift items.
- Choose gift wrapping and view delivery charges and the order total.
- Enter delivery details and choose UPI, card, or cash on delivery.
- View saved orders in the Admin view.

## Run locally

This is a static site and does not need a build step or package installation.

1. Clone or download this project.
2. Open a terminal in the project folder.
3. Start a local web server:

   ```bash
   python -m http.server 8000
   ```

   On Windows, `py -m http.server 8000` can be used if `python` is not on your PATH.
4. Open [http://localhost:8000](http://localhost:8000) in a browser.

You can also open the project folder in VS Code and serve it with the Live Server extension.

## Project files

- `index.html` — page entry point and CDN-loaded libraries.
- `app.js` — React UI and shop/order behavior.
- `styles.css` — page styles and responsive layout.
- `assets/` — local image assets.

React, ReactDOM, Babel, Bootstrap, QRCode.js, and fonts are loaded from external CDNs, so an internet connection is needed when viewing the site.

## Demo notes

- Orders are stored in the current browser's `localStorage`; they are not sent to a server and are not shared across browsers or devices.
- UPI QR codes are provided for demonstration only. Payment is not processed or automatically verified. Card selection is also a demo option, not a live payment integration.
- The Admin view shows orders stored in that browser.
