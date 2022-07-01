import { Sequelize } from 'sequelize'

export const database = new Sequelize(
  'mysql',
  'root',
  'root',
  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  }
)