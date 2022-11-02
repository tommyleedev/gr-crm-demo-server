const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   members:store.collection('members'),
};