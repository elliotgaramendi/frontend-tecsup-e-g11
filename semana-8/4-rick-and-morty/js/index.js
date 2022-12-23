'use strict';

import foods from "./modules/foods.js";

const documentReady = () => {
  foods();
};

document.addEventListener('DOMContentLoaded', documentReady);