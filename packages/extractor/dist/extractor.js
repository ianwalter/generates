'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clone = require('@ianwalter/clone');
var dotter = require('@generates/dotter');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var clone__default = /*#__PURE__*/_interopDefaultLegacy(clone);

function excluding (src, ...props) {
  const dest = clone__default['default'](src);
  for (const prop of props) dotter.del(dest, prop);
  return dest
}

function including (src, ...props) {
  const dest = {};
  for (const prop of props) dotter.set(dest, prop, dotter.get(src, prop));
  return dest
}

function map (src, map) {
  const dest = {};
  const entries = Object.entries(map);
  for (const [key, val] of Object.entries(src)) {
    const [toKey] = entries.find(e => e[1] === key);
    dest[toKey] = val;
  }
  return dest
}

function remap (src, map) {
  const dest = {};
  for (const [key, val] of Object.entries(src)) dest[map[key]] = val;
  return dest
}

exports.excluding = excluding;
exports.including = including;
exports.map = map;
exports.remap = remap;