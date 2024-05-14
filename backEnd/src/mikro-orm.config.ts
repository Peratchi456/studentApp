import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { Student } from './entities/Student';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export default {
//   type: 'postgresql',
  driver:PostgreSqlDriver,
  clientUrl: 'postgresql://postgres:admin@localhost:5432/student',
  entitiesDirs: [path.join(__dirname, './entities')],
  dbName: 'student',
  debug: true,
  logger: console.log.bind(console),
  entities: [Student],
  migrations: {
    tableName: 'mikro_orm_migrations',
    path: './src/migrations',
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
