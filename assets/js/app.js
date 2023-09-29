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

/**
 * SEARCH INTEGRATION
 */

const searchField = document.querySelector("[date-search-field]");

const searchResult = document.querySelector("[ date-search-result]");

let searchTimeout = null;
const searchTimeoutDuration = 500;

searchField.addEventListener("input", function () {
  searchTimeout ?? clearTimeout(searchTimeout);
  if (!searchField.value) {
    searchResult.classList.remove("active");
    searchResult.innerHTML = "";
    searchField.classList.add("searching");
  } else {
    searchField.classList.remove("searching");
  }

  if (searchField.value) {
    searchTimeout = setTimeout(() => {
      fetchData(url.geo(searchField.value), function (locations) {
        searchField.classList.remove("searching");
        searchResult.classList.add("active");
        searchResult.innerHTML = `
        <ul class="view-list" date-search-list>
        
      </ul>
        `;
        const /**{NodeList} */ items = [];

        for (const { name, lat, lon, country, state } of locations) {
          const searchItem = document.createElement("li");
          searchItem.classList.add("view-item");
          searchItem.innerHTML = `
          <span class="m-icon">location_on</span>
          <div>
            <p class="item-tittle">${name}</p>
            <p class="label-2 item-subtitle">${state || ""} ${country}</p>
          </div>
          <a
            href="#/weather?lat=${lat}&lon=${lon}"
            class="item-link has- state" arial-label="${name} weather" 
            date-search-toggler
          ></a>
          `;
          searchResult
            .querySelector("[date-search-list]")
            .appendChild(searchItem);
          items.push(searchItem.querySelector("[date-search-toggler]"));
        }
      });
    }, searchTimeoutDuration);
  }
});
