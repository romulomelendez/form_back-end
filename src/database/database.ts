import { Sequelize } from 'sequelize'

export const database = new Sequelize(
  process.env.DATABASE_NAME || 'database',
  process.env.DATABASE_USER || 'root',
  process.env.DATABASE_PASS,
  {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    dialect: 'mysql'
  }
)