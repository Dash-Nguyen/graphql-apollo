'use strict';

var _require = require('notarealdb'),
    DataStore = _require.DataStore;

var store = new DataStore('./data');

module.exports = {
  companies: store.collection('companies'),
  jobs: store.collection('jobs'),
  users: store.collection('users')
};