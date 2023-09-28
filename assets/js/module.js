/**
 * @license MIT
 * @fileoverview All module functions
 
 */

"use strict";
export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 *
 * @param {number} dateUnix Unix date in second
 * @param {number} timezone  Timezone shift from UTC in second
 * @returns  {string} Date String. format: "Sunday 10, Jan "
 */

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + time) * 1000);
  const weekDayName = weekDayNames[date.getUTCDate()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}}`;
};

/**
 *
 * @param {number} dateUnix Unix date in second
 * @param {number} timezone  Timezone shift from UTC in second
 * @returns  {string} Time String. format: "HH:MM:AM/PM "
 */

export const getTime = function (dateUnix, timezone) {
  const date = new Date((dateUnix + time) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}:${minutes} ${period} `;
};

/**
 *
 * @param {number} dateUnix Unix date in second
 * @param {number} timezone  Timezone shift from UTC in second
 * @returns  {string} Time String. format: "HH AM/PM "
 */

export const getHours = function (dateUnix, timezone) {
  const date = new Date((dateUnix + time) * 1000);
  const hours = date.getUTCHours();

  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12} ${period} `;
};

/**
 *
 * @param {number} mps  meter per second
 * @returns {number} kilometer per second
 */

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air Quality is considered satisfactory,and air polluction poses or no risk.",
  },
  2: {
    level: "Fair",
    message:
      "Air Quality is acceptable;however for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air polluction.",
  },
  3: {
    level: "Moderate",
    message:
      "Members of sensitive groups may experience health effects.The general public is not likely to be affected.",
  },
  4: {
    level: "Poor",
    message:
      "Everyone may begin to exeprience healt effect; members of sensitive groups may experience more serious health effect.",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warning of emergency conditions.The entire population is more likely to be affected.",
  },
};
