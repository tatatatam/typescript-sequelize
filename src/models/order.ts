import { Model, Optional, DataTypes } from 'sequelize'
import User from './user'
import db from './_instance'

export interface OrderAttributes {
  id: string,
  userId: Number,
  name: string
  createdAt?: Date
  updatedAt?: Date
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> { }

export interface OrderInterface
  extends Model<OrderAttributes, OrderCreationAttributes>,
  OrderAttributes { }

const Order = db.sequelize.define<OrderInterface>(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
  }
)
Order.hasOne(User, { sourceKey: "userId", foreignKey: 'id' })

export default Order