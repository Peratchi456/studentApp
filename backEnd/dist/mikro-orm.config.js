"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const Student_1 = require("./entities/Student");
const postgresql_1 = require("@mikro-orm/postgresql");
exports.default = {
    //   type: 'postgresql',
    driver: postgresql_1.PostgreSqlDriver,
    clientUrl: 'postgresql://postgres:admin@localhost:5432/student',
    entitiesDirs: [path_1.default.join(__dirname, './entities')],
    dbName: 'student',
    debug: true,
    logger: console.log.bind(console),
    entities: [Student_1.Student],
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: './src/migrations',
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
};
