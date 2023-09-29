"use strict";

import { fetchData, url } from "./api.js";

import * as module from "./module.js";

/**
 *
 * @param {NodeList} elements Elements node array
 * @param {string} eventType Event Type "click","mouseover"
 * @param {Function} callback callback function
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (const element of elements) element.addEventListener(eventType, callback);
};
/**
 * Toogle search in mobile devices
 */

const searchView = document.querySelector("[date-search-view]");

const searchTogglers = document.querySelectorAll("[date-search-toggler]");

const toggleSearch = () => {
  searchView.classList.toggle("active");
};

addEventOnElements(searchTogglers, "click", toggleSearch);
