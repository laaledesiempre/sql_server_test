const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const db = mysql.createPool({
  host: 'localhost',
  user: 'testing_server',
  password: 'foobar123',
  database: "Test"
})
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (_req, res) => {
  //  db.query('insert into characters (NAME, DESCRIPTION) VALUES ("trixie","a wonderful pony indeed");',(err,result)=>{
  //  if (err) {console.log(err)} else {console.log(result)}
  // })
  res.send("Lol")
})
app.get('/get/ids', (_req, res) => {
  db.query('select ID from characters', (err, result) => {
    if (err) { console.log(err) } else { res.json(result) }
  })
})
app.get('/get/characters', (_req, res) => {
  db.query('select * from characters;', (err, result) => {
    if (err) { console.log(err) } else { res.json(result) }
  })
})

app.get('/get/characters/description/:description', (req, res) => {
  console.log(req.params.description)
  db.query('select * from characters where DESCRIPTION like ? ;', [`%${req.params.description}%`], (err, result) => {
    if (err) { console.log(err) } else { res.json(result) }
  })
})

app.post('/post/newcharacter', (req, res) => {
  const { name, description } = req.body
  console.log("Trying to add " + name + ", " + description)
  db.query("insert into characters (name, description) values (? , ?);", [name, description], (err, result) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    }
    else {
      console.log(result)
      res.sendStatus(200)
    }
  })
})

app.get('/get/characters/name/:name', (req, res) => {
  parameter = req.params.name
  db.query('select * from characters where NAME like ?;', ["%" + parameter + "%"], (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
      res.json(result)
    }
  })
})

app.put('/put/characters/id/:id', (req, res) => {
  const { id } = req.params
  const { name, description } = req.body
  if (description) {
    db.query('update characters set NAME= ? , DESCRIPTION= ? where ID= ?;', [name, description, id], (err, result) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else {
        console.log("Object updated \n" + result)
        res.sendStatus(200)
      }
    })

  } else {
    db.query('update characters set NAME= ? where ID= ?;', [name, id], (err, _result) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else {
        console.log("Object updated \n")
        res.sendStatus(200)
      }
    })
  }
})

app.delete('/delete/characters/id/:id', (req, res) => {
  const { id } = req.params
  db.query('delete from characters where ID= ?', [id], (err, result) => {
    if (err || result.affectedRows === 0) {
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
      console.log("Element deleted on id " + id)
    }
  })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log('runing in port ' + PORT
  )
})

