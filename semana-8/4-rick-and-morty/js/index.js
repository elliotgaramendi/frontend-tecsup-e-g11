'use strict';

import characters from "./modules/characters.js";

const documentReady = () => {
  characters();
};

document.addEventListener('DOMContentLoaded', documentReady);