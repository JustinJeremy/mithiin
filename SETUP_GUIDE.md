# MITHIIN: The Rizal Quest — Setup Guide
## VS Code + Node.js + Tailwind CSS (npm)

---

## 📁 Final Folder Structure

```
mithiin/
├── index.html            ← Main HTML (all screens)
├── package.json          ← npm config & scripts
├── tailwind.config.js    ← Tailwind theme config
├── css/
│   ├── input.css         ← Your source CSS (Tailwind directives + custom styles)
│   └── output.css        ← ⚠️ AUTO-GENERATED — do not edit manually
└── js/
    ├── main.js           ← Theme, menu, screen switching, shared helpers
    ├── quiz.js           ← Utak at Panitik (Trivia)
    ├── memory.js         ← Gunita (Memory Match)
    ├── word.js           ← Mga Lihim (Word Guess)
    └── runner.js         ← Takbo, Pepe! (Endless Runner)
```

---

## ✅ Prerequisites — Install These First

### 1. Install Node.js
- Go to: https://nodejs.org
- Download the **LTS version** (recommended)
- Run the installer — it also installs **npm** automatically
- To verify, open a terminal and run:
  ```
  node -v
  npm -v
  ```
  Both should print a version number (e.g. `v20.11.0` and `10.2.4`)

### 2. Install VS Code
- Go to: https://code.visualstudio.com
- Download and install for your OS

### 3. Install the Live Server extension in VS Code
- Open VS Code
- Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
- Search for **"Live Server"** by Ritwick Dey
- Click **Install**

---

## 🚀 Step-by-Step Setup

### Step 1 — Open the project folder in VS Code
1. Put all the files from this zip into a single folder (e.g. `mithiin/`)
2. Open VS Code
3. Go to **File → Open Folder** and select your `mithiin/` folder
4. You should see all the files in the Explorer panel on the left

---

### Step 2 — Open the Terminal in VS Code
- Press `` Ctrl+` `` (backtick) or go to **Terminal → New Terminal**
- Make sure the terminal path shows your project folder

---

### Step 3 — Install Tailwind CSS
In the terminal, type exactly:
```
npm install
```
This reads `package.json` and automatically installs Tailwind CSS into a `node_modules/` folder.

> ⚠️ You'll see a `node_modules/` folder appear — this is normal. Never edit anything inside it.

---

### Step 4 — Build the CSS (Two Options)

#### Option A — Development Mode (RECOMMENDED while working)
```
npm run dev
```
This **watches** your files. Every time you save a change to `index.html` or `css/input.css`, it automatically rebuilds `css/output.css`. **Keep this terminal running** while you work.

#### Option B — Production Build (when you're done / submitting)
```
npm run build
```
This builds a **minified** (smaller file size) version of `css/output.css`. Run this once before submitting or deploying.

> ⚠️ You must run at least one of these BEFORE opening the site — otherwise `css/output.css` won't exist and the page will have no styling.

---

### Step 5 — Preview the Website
1. In the VS Code file explorer, right-click on `index.html`
2. Select **"Open with Live Server"**
3. Your browser will open at `http://127.0.0.1:5500` (or similar)
4. The page will **auto-refresh** every time you save a file

---

## 🛠️ Daily Workflow (When Coming Back to Work)

Every time you open the project to work on it:

1. Open the folder in VS Code
2. Open the terminal (`` Ctrl+` ``)
3. Run:
   ```
   npm run dev
   ```
4. Right-click `index.html` → **Open with Live Server**
5. Make your edits and save — both Tailwind and Live Server will auto-refresh

---

## 📝 Which File to Edit for What

| What you want to change           | File to edit             |
|----------------------------------|--------------------------|
| Page layout / HTML structure     | `index.html`             |
| Custom CSS / animations          | `css/input.css`          |
| Theme, menu, screen navigation   | `js/main.js`             |
| Trivia questions & quiz logic    | `js/quiz.js`             |
| Memory game cards & logic        | `js/memory.js`           |
| Word guess words & logic         | `js/word.js`             |
| Runner game mechanics            | `js/runner.js`           |
| Tailwind colors / fonts / theme  | `tailwind.config.js`     |

> ❌ Never edit `css/output.css` — it gets overwritten every time Tailwind rebuilds.
> ❌ Never edit anything inside `node_modules/`

---

## 📦 Submitting / Sharing the Project

When sharing with your teacher or uploading to a host:

1. Run `npm run build` one final time
2. You can **exclude** the `node_modules/` folder (it's very large)
3. Share these files/folders:
   ```
   index.html
   tailwind.config.js
   package.json
   css/input.css
   css/output.css      ← important! include this
   js/main.js
   js/quiz.js
   js/memory.js
   js/word.js
   js/runner.js
   ```

> The recipient only needs `index.html` + `css/output.css` + `js/*.js` to VIEW the site.
> They only need `package.json` + `tailwind.config.js` + `css/input.css` if they want to EDIT and rebuild Tailwind.

---

## ❓ Troubleshooting

| Problem | Solution |
|--------|----------|
| Page has no styling (looks broken) | You haven't run `npm run dev` or `npm run build` yet. `css/output.css` is missing. |
| `npm: command not found` | Node.js is not installed. Go back to Prerequisites Step 1. |
| `npm run dev` stops working | Just run it again in the terminal. |
| Live Server not appearing in right-click menu | Make sure you installed the Live Server VS Code extension. |
| Changes to HTML not showing up | Make sure Live Server is running AND `npm run dev` is running at the same time. |
| `node_modules` folder is missing | Run `npm install` again. |

---

*MITHIIN: The Rizal Quest — Group 6 | GEM 001*
