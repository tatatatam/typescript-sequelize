import User from './user'
import Order from './order'
const models = {
  User,
  Order
}

export default models

export type MyModels = typeof models