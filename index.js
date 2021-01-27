console.log("test");

import React from "react";
import { render } from "react-dom";

const user = "Tanya";
function getGreeting(user) {
    if (user) {
      return <h1>Bonjour, {formatName(user)} !</h1>;
    }
    return <h1>Bonjour, Belle Inconnue.</h1>;
  }

render(
    getGreeting(),
    document.getElementById('root')
);