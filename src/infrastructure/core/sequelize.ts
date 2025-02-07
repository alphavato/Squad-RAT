import {Sequelize} from 'sequelize-typescript';

const dbHost: string = process.env.DB_HOST || 'localhost';
const dbPort: number = parseInt(process.env.DB_PORT || '3306');

const dbName: string = process.env.DB_NAME || 'sequelize';
const dbUsername: string = process.env.DB_USERNAME || '';
const dbPassword: string = process.env.DB_PASSWORD || '';

// initializing sequelize to the application
const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  port: dbPort,

  dialect: "mysql",
  logging: true,
  models: [
    __dirname + '/../models',
  ]
})

// exporting to sequelize
export default sequelize