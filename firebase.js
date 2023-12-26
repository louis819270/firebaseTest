var admin = require('firebase-admin')

// Fetch the service account key JSON file contents
var serviceAccount = require('./serviceAccountKey.json')

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: 'https://peter-97b3f-default-rtdb.asia-southeast1.firebasedatabase.app'
})

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database()

module.exports = { db }
