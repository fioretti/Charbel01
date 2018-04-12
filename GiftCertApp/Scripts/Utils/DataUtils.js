import React from 'react';
import _ from 'lodash'
import validUrl from 'valid-url'

export const DATE_FORMAT = 'DD/MM/YYYY'
export const DATETIME_FORMAT = 'DD/MM/YYYY HH:mm'

export function isValidUrl(url) {
  return validUrl.isUri(url)
}

export function isEmpty(str) {
  if (str == undefined || str == null) {
    return true;
  }

  return _.isEmpty(String(str));
}

export function trim(str) {
  return _.trim(str);
}

export function validPartNumber(str) {
  const re = /[0-9a-zA-Z]/;
  return re.exec(str)
}

export function validNumber(str) {
  return !isNaN(parseInt(str));
}

export function renderToLocalDate(date) {
  if (date == undefined) {
    return ''
  }

  return moment(date).format(DATE_FORMAT)
}

export function renderToLocalDateTime(date) {
  if (date == undefined) {
    return ''
  }

  return moment(date).format(DATETIME_FORMAT)
}

export function renderMultiline(str) {
  if (str) {
    return str.split('\n').map((item, idx) => {
      return (
        <span key={idx}>{item}<br/></span>
      )
    })
  }

  return '';
}

export function hasTrueValue(obj) {
  for(var o in obj) {
    if(obj[o]) return true;
  }

  return false;
}

export function formatToThreeDecimals(num) {
  return Math.round(num * 1000) / 1000
}
