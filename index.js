const express = require('express')
const app = express()
const port = 7783
const { db } = require('./firebase.js')
const ref = db.ref('testDB/message')

app.use(express.json())

app.post('/message', (req, res) => {
  const { data } = req.body
  const newPostRef = ref.push({
    data: data,
    timestamp: new Date().getTime()
  })
  res.status(200).send({
    id: newPostRef.key
  })
})

app.put('/message', (req, res) => {
  const { id, data } = req.body
  ref.child(id).update({
    data: data,
    timestamp: new Date().getTime()
  })
  res.status(200).send({
    id: id
  })
})

app.delete('/message', (req, res) => {
  const { id } = req.body
  ref.child(id).remove()
  res.status(200).send({
    id: id
  })
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))
