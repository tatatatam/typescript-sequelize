import { Model, Optional, DataTypes } from 'sequelize'
import Order from './order'
import db from './_instance'

export interface UserAttributes {
  id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
  UserAttributes { }

const User = db.sequelize.define<UserInstance>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
  }
)

export default User