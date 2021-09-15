import express, { Application, Request, Response } from 'express'
import models from './models'
import User from './models/user'
const app: Application = express()

app.get('/', async (req: Request, res: Response) => {
  await models.User.create({ name: 'ttam' })
  await models.Order.create({ name: '123', userId: 1 })
  return res.send('Hello World!')
})

app.get('/123', async (req: Request, res: Response) => {
  const data = await models.User.findAll()
  return res.json({ data })
})

app.get('/order', async (req: Request, res: Response) => {
  const data = await models.Order.findAll({
    include: [{ model: User }]
  })
  return res.json({ data })
})
app.listen(12000)