import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  "stockUTN",
  "root",
  "123456789",
  {
    dialect: "mysql",
    host: "localhost",
    port: 3306
  })