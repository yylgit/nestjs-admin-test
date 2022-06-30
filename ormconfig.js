// If you use an ormconfig.js

let  AdminUserEntity = require('nestjs-admin');
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nestjs-admin',
  synchronize: true,
  entities: [AdminUserEntity],
};
