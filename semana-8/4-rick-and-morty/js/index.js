'use strict';

import header from "./modules/header.js";
import characters from "./modules/characters.js";

const documentReady = () => {
  header();
  characters();
};

document.addEventListener('DOMContentLoaded', documentReady);