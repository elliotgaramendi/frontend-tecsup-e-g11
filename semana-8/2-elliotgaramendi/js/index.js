'use strict';

import header from "./modules/header.js";

const documentReady = () => {
  header();
};

document.addEventListener('DOMContentLoaded', documentReady);