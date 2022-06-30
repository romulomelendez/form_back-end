import express, { json } from 'express'
import { database } from './database/database'
import { router } from './route'

const app = express()

app.use(json())
app.use(router)

const port = process.env.PORT || 3000

app.listen(port, async () => {
  await database.sync()
  console.log(`App's running on port ${port}`)
})