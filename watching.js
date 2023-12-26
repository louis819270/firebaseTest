const { db } = require('./firebase.js')

const ref = db.ref('testDB/message')

// 一直讀取
ref.on('value', function(snapshot) {
  console.log(snapshot.val())
  console.log('======')
})

// 讀取一次
// ref.once('value', function(snapshot) {
//   console.log(snapshot.val())
// })


// // Retrieve new posts as they are added to our database
// ref.on('child_added', (snapshot) => {
//   console.log('added:', snapshot.val());
// });

// // Get the data on a post that has changed
// ref.on('child_changed', (snapshot) => {
//   console.log('changed:', snapshot.val());
// });

// // Get the data on a post that has been removed
// ref.on('child_removed', (snapshot) => {
//   console.log('removed:', snapshot.val());
// });
