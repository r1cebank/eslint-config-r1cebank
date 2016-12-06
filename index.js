/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */

exports.extends = [

  './base',
  './react',
  './lodash',
  './ava'

].map(require.resolve);
