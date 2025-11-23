import "./style.css";

import { setupCounter } from "./counter.js";
import javascriptLogo from "./javascript.svg";

import { setUpClientSocket } from './socket.js'

document.querySelector("#app").innerHTML = `
  <div>
    <!--
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    -->
    <h1>Hello Single Page Application!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <p>Server count is 
        <div id="socketCount"></div>
      </p>
    </div>
    <!--
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    -->
  </div>
`;

setupCounter(document.querySelector("#counter"));

// ========================================================
// Setup client Socket.IO
// ========================================================
setUpClientSocket();

// ========================================================
// Mock invoking Server API
// ========================================================
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
(async function () {
  const data = {
    "name": "Mike Mikowski",
    "is_online": false,
    "css_map": {
      "top": 100,
      "left": 120,
      "background-color": "rgb(136, 255, 136)"
    },
    "another_name": "Mikes"
  }
  const res = await fetch('http://localhost:3000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  console.log(await res.json())
})()