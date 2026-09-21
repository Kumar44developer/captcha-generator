<div align="center">

# CAPTCHA Generator

**A zero-dependency, fully client-side CAPTCHA built with plain HTML, CSS & JavaScript.**

Generate a random code, type it back, get instant validation — no backend, no build step, no libraries.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](#)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](#license)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Validation Rules](#validation-rules)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## Overview

**CAPTCHA Generator** is a lightweight, single-page web app that produces a random six-character
alphanumeric code on load and verifies the user's input in real time. Everything runs in the
browser — there is no server, no framework and no package manager to install. Open the file and it works.

It is ideal for learning DOM manipulation, dropping into a landing page as a bot-check demo, or
as a starting point for a larger form-validation project.

---

## Features

- ⚡ **Instant setup** — open `index.html`, no build or server required
- 🔐 **Random 6-character codes** drawn from digits, uppercase and lowercase letters
- ✅ **Real-time validation** with clear *Matched*, *Not-Matched* and *empty-input* feedback
- 🔄 **One-click refresh** that generates a brand-new code and clears the field
- 🧮 **Zero dependencies** — pure HTML, CSS and vanilla JavaScript
- 📱 **Responsive layout** with an animated gradient background
- ♿ **Read-only generator field** so the challenge can't be tampered with

---

## Tech Stack

| Technology | Role |
| --- | --- |
| **HTML5** | Page structure, inputs and buttons |
| **CSS3** | Layout, styling and the animated gradient background |
| **JavaScript (ES6+)** | Code generation and validation logic |

No frameworks, no bundlers, no runtime dependencies.

---

## Project Structure

```
captcha-generator/
├── index.html      # Markup: generator field, input, Submit & Refresh buttons
├── style.css       # Layout, gradient animation and component styling
├── index.js        # Captcha generation + validation logic
└── README.md       # This file
```

---

## Getting Started

### Option 1 — Just open it (recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/Kumar44developer/captcha-generator.git
   ```
2. Open the `captcha-generator` folder and **double-click `index.html`** — it runs directly in any modern browser.

### Option 2 — Serve it locally

If you prefer a local server (e.g. to test on a phone), run one from the project folder:

```bash
# Python
python -m http.server 8123

# or Node.js
npx serve .
```

Then visit **http://localhost:8123** in your browser.

---

## Usage

1. On load, a random six-character code appears in the top field.
2. Type the code exactly as shown into the input box.
3. Click **Submit** to validate:
   - correct code → **Matched 😎**
   - wrong code → **Not-Matched 😖**
   - empty box → prompt to enter the text
4. Click **Refresh** anytime to get a new code.

---

## How It Works

The character pool is `0-9`, `A-Z` and `a-z`. `generateCaptcha()` loops six times, each iteration
picking a random character and appending it to the current code, then renders it into the read-only
field. On **Submit**, the entered value is compared character-for-character (case-sensitive) against
the stored code and the status heading updates. **Refresh** simply calls `generateCaptcha()` again
and clears the input.

```js
function generateCaptcha() {
  const captchaLength = 6;
  captcha = "";
  for (let i = 0; i < captchaLength; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    captcha += char.substring(randomIndex, randomIndex + 1);
  }
  generator.value = captcha;
  display.innerText = "Captcha Generator";
}
```

---

## Validation Rules

| Input state | Result |
| --- | --- |
| Empty | ⚠️ "Please Enter the text Shown below 👇" |
| Exact match (case-sensitive) | ✅ "Matched 😎" |
| Anything else | ❌ "Not-Matched 😖" |

---

## Troubleshooting

- **The code field is blank on load** — make sure `index.js` loads *after* the DOM (it is included at the bottom of `<body>`). Modern browsers run it automatically.
- **Emoji messages render as boxes** — this is an OS font issue; the logic still works.
- **Nothing happens on Submit** — confirm JavaScript is enabled in the browser.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Author

Created by **[Kumar44developer](https://github.com/Kumar44developer)**.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
