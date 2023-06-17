# **Steps for React w/Tailwind Project**
https://tailwindcss.com/docs/guides/create-react-app

### cmd\
npx create-react-app my-project\
cd my-project\
npm install -D tailwindcss\
npx tailwindcss init

### tailwind.config.js\
/** @type {import('tailwindcss').Config} */\
module.exports = {\
content: [\
"./src/**/*.{js,jsx,ts,tsx}",\
],\
theme: {\
extend: {},\
},\
plugins: [],\
}

### src/input.css\
@tailwind base;\
@tailwind components;\
@tailwind utilities;

# **Steps for React w/CSS Project**\
npx create-react-app my-app\
cd my-app\
npm start

# Create Routers

### cmd

npm install react-router-dom

### index.js
//pode apagar App.js - App.test.js - index.css

import React from 'react';\
import ReactDOM from 'react-dom/client';\
import './index.css';\
import reportWebVitals from './reportWebVitals';\
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {\
    path: "/",\
    element: <{screen_name} />,\
  },\
])

root.render(\
  <React.StrictMode>\
    <RouterProvider router={router} />\
  </React.StrictMode>\
);

reportWebVitals();
