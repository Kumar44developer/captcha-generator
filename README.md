# CAPTCHA Generator

A lightweight, fully client-side CAPTCHA generator built with HTML, CSS, and vanilla JavaScript. It produces a random alphanumeric code, lets the user type it back, and validates the input instantly. No backend and no libraries are required.

## Overview

On page load the app generates a six-character code drawn from digits and upper and lower case letters, and shows it in a read-only field. The user enters the code and submits it for validation, or requests a fresh code with the refresh button.

## Features

- Random six-character alphanumeric code generated on load
- Instant validation with clear matched, not matched, and empty-input messages
- Refresh button to generate a new code at any time
- Pure front-end implementation with no dependencies
- Responsive centered layout with an animated gradient background

## Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Page structure and controls |
| CSS3 | Layout, styling, and background animation |
| JavaScript | Code generation and validation logic |

## Project Structure

```
project24/
├── index.html
├── style.css
├── index.js
└── README.md
```

## Getting Started

Clone the repository and open `index.html` in any browser. No build step or server is required.

```bash
git clone https://github.com/Kumar44developer/captcha-generator.git
```

## How It Works

The character set combines digits and letters. JavaScript picks six random characters to form the code and displays it in the generator field. When the user submits, the entered text is compared against the current code and the status message updates accordingly. The refresh button rebuilds the code on demand.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
