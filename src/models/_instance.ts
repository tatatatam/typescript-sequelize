/* eslint-disable import/no-dynamic-require */
import path from 'path'
import Sequelize from 'sequelize'

const config = require(path.join(`${__dirname}/../config/config.json`))['development']
console.log(config, path.join(`${__dirname}/../../${config.storage}`))

const sequelize = new Sequelize.Sequelize(
  {
    dialect: config.dialect,
    storage: path.join(`${__dirname}/../../${config.storage}`),
    logQueryParameters: true,
  }
);
sequelize.authenticate().then((a) => { console.log('ok') }).catch(error => console.error(error))
const db = {
  sequelize,
  Sequelize,
}

export default db